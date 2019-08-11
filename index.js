/*
 * @Description:
 * @Author: liu deng
 * @Date: 2019-08-11 17:00:46
 * @LastEditTime: 2019-08-11 19:05:08
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
    that._open = window.XMLHttpRequest.prototype.open;
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

        if (!XMLReq._noVConsole) {
          that.updateRequest(id, item);
        }
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
}

export default appWatch;
