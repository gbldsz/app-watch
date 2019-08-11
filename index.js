/*
 * @Description:
 * @Author: liu deng
 * @Date: 2019-08-11 17:00:46
 * @LastEditTime: 2019-08-11 22:18:28
 * @LastEditors: liu deng
 */
class appWatch {
  constructor(opt) {
    this.initNetWork();
  }
  // 初始化网络监控
  initNetWork() {
    let that = this;
    that.reqList = {};
    // hook XMLHttpRequest.open api
    let _open = window.XMLHttpRequest.prototype.open;
    let _send = window.XMLHttpRequest.prototype.send;
    that._open = _open;
    that._send = _send;
    window.XMLHttpRequest.prototype.open = function() {
      let XMLReq = this;
      let args = [].slice.call(arguments),
        method = args[0],
        url = args[1],
        id = that.getUniqueID();
      let timer = null;

      // may be used by other functions
      XMLReq._requestID = id;
      XMLReq._method = method;
      XMLReq._url = url;

      // mock onreadystatechange
      let _onreadystatechange = XMLReq.onreadystatechange || function() {};
      let onreadystatechange = function() {
        let item = that.reqList[id] || {};

        // update status
        item.readyState = XMLReq.readyState;
        item.status = 0;
        if (XMLReq.readyState > 1) {
          item.status = XMLReq.status;
        }
        item.responseType = XMLReq.responseType;

        if (XMLReq.readyState == 0) {
          // UNSENT
          if (!item.startTime) {
            item.startTime = +new Date();
          }
        } else if (XMLReq.readyState == 1) {
          // OPENED
          if (!item.startTime) {
            item.startTime = +new Date();
          }
        } else if (XMLReq.readyState == 2) {
          // HEADERS_RECEIVED
          item.header = {};
          let header = XMLReq.getAllResponseHeaders() || '',
            headerArr = header.split('\n');
          // extract plain text to key-value format
          for (let i = 0; i < headerArr.length; i++) {
            let line = headerArr[i];
            if (!line) {
              continue;
            }
            let arr = line.split(': ');
            let key = arr[0],
              value = arr.slice(1).join(': ');
            item.header[key] = value;
          }
        } else if (XMLReq.readyState == 3) {
          // LOADING
        } else if (XMLReq.readyState == 4) {
          // DONE
          clearInterval(timer);
          (item.endTime = +new Date()),
            (item.costTime = item.endTime - (item.startTime || item.endTime));
          item.response = XMLReq.response;
        } else {
          clearInterval(timer);
        }

        that.updateRequest(id, item);
        that.addDoneReqList(id);
        console.log(item);
        return _onreadystatechange.apply(XMLReq, arguments);
      };
      XMLReq.onreadystatechange = onreadystatechange;

      // some 3rd libraries will change XHR's default function
      // so we use a timer to avoid lost tracking of readyState
      let preState = -1;
      timer = setInterval(function() {
        if (preState != XMLReq.readyState) {
          preState = XMLReq.readyState;
          onreadystatechange.call(XMLReq);
        }
      }, 10);

      return _open.apply(XMLReq, args);
    };
    // mock send()
    window.XMLHttpRequest.prototype.send = function() {
      let XMLReq = this;
      let args = [].slice.call(arguments),
        data = args[0];

      let item = that.reqList[XMLReq._requestID] || {};
      item.method = XMLReq._method.toUpperCase();

      let query = XMLReq._url.split('?'); // a.php?b=c&d=?e => ['a.php', 'b=c&d=', '?e']
      item.url = query.shift(); // => ['b=c&d=', '?e']

      if (query.length > 0) {
        item.getData = {};
        query = query.join('?'); // => 'b=c&d=?e'
        query = query.split('&'); // => ['b=c', 'd=?e']
        for (let q of query) {
          q = q.split('=');
          item.getData[q[0]] = decodeURIComponent(q[1]);
        }
      }

      if (item.method == 'POST') {
        // save POST data
        if (that.isString(data)) {
          let arr = data.split('&');
          item.postData = {};
          for (let q of arr) {
            q = q.split('=');
            item.postData[q[0]] = q[1];
          }
        } else if (that.isPlainObject(data)) {
          item.postData = data;
        }
      }

      if (!XMLReq._noVConsole) {
        that.updateRequest(XMLReq._requestID, item);
      }

      return _send.apply(XMLReq, args);
    };
  }
  /**
   * generate an unique id string (32)
   * @private
   * @return string
   */
  getUniqueID() {
    let id = 'xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx'.replace(/[xy]/g, function(
      c
    ) {
      let r = (Math.random() * 16) | 0,
        v = c == 'x' ? r : (r & 0x3) | 0x8;
      return v.toString(16);
    });
    return id;
  }
  updateRequest(id, data) {
    // see whether add new item into list
    let preCount = Object.keys(this.reqList).length;

    // update item
    let item = this.reqList[id] || {};
    for (let key in data) {
      item[key] = data[key];
    }
    this.reqList[id] = item;
  }
  isPlainObject(obj) {
    let hasOwn = Object.prototype.hasOwnProperty;
    // Must be an Object.
    if (!obj || typeof obj !== 'object' || obj.nodeType || isWindow(obj)) {
      return false;
    }
    try {
      if (
        obj.constructor &&
        !hasOwn.call(obj, 'constructor') &&
        !hasOwn.call(obj.constructor.prototype, 'isPrototypeOf')
      ) {
        return false;
      }
    } catch (e) {
      return false;
    }
    let key;
    for (key in obj) {
    }
    return key === undefined || hasOwn.call(obj, key);
  }
  isString(value) {
    return Object.prototype.toString.call(value) == '[object String]';
  }
  addDoneReqList(id) {
    if (!Array.isArray(this.doneReqList)) {
      this.doneReqList = [];
    }
    if (this.doneReqList[id]) {
      return;
    }
    let currentReq = this.reqList[id];
    if (currentReq.readyState === 4 && currentReq.status === 200) {
      this.doneReqList.push(currentReq);
      console.log(this.doneReqList);
    }
  }
}

// export default appWatch;
