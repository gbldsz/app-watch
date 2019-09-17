/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = "./src/index.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./node_modules/webpack/buildin/amd-options.js":
/*!****************************************!*\
  !*** (webpack)/buildin/amd-options.js ***!
  \****************************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("/* WEBPACK VAR INJECTION */(function(__webpack_amd_options__) {/* globals __webpack_amd_options__ */\nmodule.exports = __webpack_amd_options__;\n\n/* WEBPACK VAR INJECTION */}.call(this, {}))\n\n//# sourceURL=webpack:///(webpack)/buildin/amd-options.js?");

/***/ }),

/***/ "./node_modules/webpack/buildin/harmony-module.js":
/*!*******************************************!*\
  !*** (webpack)/buildin/harmony-module.js ***!
  \*******************************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = function(originalModule) {\n\tif (!originalModule.webpackPolyfill) {\n\t\tvar module = Object.create(originalModule);\n\t\t// module.parent = undefined by default\n\t\tif (!module.children) module.children = [];\n\t\tObject.defineProperty(module, \"loaded\", {\n\t\t\tenumerable: true,\n\t\t\tget: function() {\n\t\t\t\treturn module.l;\n\t\t\t}\n\t\t});\n\t\tObject.defineProperty(module, \"id\", {\n\t\t\tenumerable: true,\n\t\t\tget: function() {\n\t\t\t\treturn module.i;\n\t\t\t}\n\t\t});\n\t\tObject.defineProperty(module, \"exports\", {\n\t\t\tenumerable: true\n\t\t});\n\t\tmodule.webpackPolyfill = 1;\n\t}\n\treturn module;\n};\n\n\n//# sourceURL=webpack:///(webpack)/buildin/harmony-module.js?");

/***/ }),

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* WEBPACK VAR INJECTION */(function(module) {/* harmony import */ var _netWork__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./netWork */ \"./src/netWork/index.js\");\n/*\r\n * @Description: 初始化监控\r\n * @Author: liu deng\r\n * @Date: 2019-09-17 11:11:51\r\n * @LastEditTime: 2019-09-17 19:31:49\r\n * @LastEditors: liu deng\r\n */\r\n\r\n\r\nclass appWatch {\r\n  constructor(configs) {\r\n    let obNetWork = new _netWork__WEBPACK_IMPORTED_MODULE_0__[\"default\"](configs);\r\n    setInterval(() => {\r\n      let netList = obNetWork.doneReqList;\r\n      obNetWork.doneReqList = [];\r\n      if (netList && netList.length >= 1) {\r\n        console.log(netList);\r\n        var req = new XMLHttpRequest();\r\n        req.open('POST', 'http://127.0.0.1:7001');\r\n        req.setRequestHeader('Content-type', 'application/json');\r\n        req.send(JSON.stringify({ data: netList }));\r\n      }\r\n    }, 3000);\r\n  }\r\n}\r\n\r\nif (\r\n  typeof define === 'function' &&\r\n  typeof __webpack_require__(/*! !webpack amd options */ \"./node_modules/webpack/buildin/amd-options.js\") === 'object' &&\r\n  __webpack_require__(/*! !webpack amd options */ \"./node_modules/webpack/buildin/amd-options.js\")\r\n) {\r\n  // AMD. Register as an anonymous module.\r\n  define(function() {\r\n    return appWatch;\r\n  });\r\n} else if ( true && module.exports) {\r\n  module.exports = appWatch;\r\n  module.exports.appWatch = appWatch;\r\n} else {\r\n  window.appWatch = appWatch;\r\n}\r\n\n/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../node_modules/webpack/buildin/harmony-module.js */ \"./node_modules/webpack/buildin/harmony-module.js\")(module)))\n\n//# sourceURL=webpack:///./src/index.js?");

/***/ }),

/***/ "./src/netWork/index.js":
/*!******************************!*\
  !*** ./src/netWork/index.js ***!
  \******************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"default\", function() { return netWork; });\n/*\r\n * @Description:\r\n * @Author: liu deng\r\n * @Date: 2019-08-11 17:00:46\r\n * @LastEditTime: 2019-09-17 19:31:27\r\n * @LastEditors: liu deng\r\n */\r\nclass netWork {\r\n  constructor(configs) {\r\n    this.initConfigs(configs);\r\n    this.initNetWork();\r\n  }\r\n  // 初始化配置信息\r\n  initConfigs(configs) {\r\n    // 用户id\r\n    this.personId = configs.personId || '';\r\n    // 应用名称\r\n    this.appName = configs.appName || '';\r\n  }\r\n  // 初始化网络监控\r\n  initNetWork() {\r\n    let that = this;\r\n    that.reqList = {};\r\n    // hook XMLHttpRequest.open api\r\n    let _open = window.XMLHttpRequest.prototype.open;\r\n    let _send = window.XMLHttpRequest.prototype.send;\r\n    that._open = _open;\r\n    that._send = _send;\r\n    window.XMLHttpRequest.prototype.open = function() {\r\n      let XMLReq = this;\r\n      let args = [].slice.call(arguments),\r\n        method = args[0],\r\n        url = args[1],\r\n        id = that.getUniqueID();\r\n      let timer = null;\r\n\r\n      // may be used by other functions\r\n      XMLReq._requestID = id;\r\n      XMLReq._method = method;\r\n      XMLReq._url = url;\r\n\r\n      // mock onreadystatechange\r\n      let _onreadystatechange = XMLReq.onreadystatechange || function() {};\r\n      let onreadystatechange = function() {\r\n        let item = that.reqList[id] || {};\r\n        // init user\r\n        item.personId = that.personId;\r\n        item.appName = that.appName;\r\n        // update status\r\n        item.readyState = XMLReq.readyState;\r\n        item.status = 0;\r\n        if (XMLReq.readyState > 1) {\r\n          item.status = XMLReq.status;\r\n        }\r\n        item.responseType = XMLReq.responseType;\r\n\r\n        if (XMLReq.readyState == 0) {\r\n          // UNSENT\r\n          if (!item.startTime) {\r\n            item.startTime = +new Date();\r\n          }\r\n        } else if (XMLReq.readyState == 1) {\r\n          // OPENED\r\n          if (!item.startTime) {\r\n            item.startTime = +new Date();\r\n          }\r\n        } else if (XMLReq.readyState == 2) {\r\n          // HEADERS_RECEIVED\r\n          item.header = {};\r\n          let header = XMLReq.getAllResponseHeaders() || '',\r\n            headerArr = header.split('\\n');\r\n          // extract plain text to key-value format\r\n          for (let i = 0; i < headerArr.length; i++) {\r\n            let line = headerArr[i];\r\n            if (!line) {\r\n              continue;\r\n            }\r\n            let arr = line.split(': ');\r\n            let key = arr[0],\r\n              value = arr.slice(1).join(': ');\r\n            item.header[key] = value;\r\n          }\r\n        } else if (XMLReq.readyState == 3) {\r\n          // LOADING\r\n        } else if (XMLReq.readyState == 4) {\r\n          // DONE\r\n          clearInterval(timer);\r\n          (item.endTime = +new Date()),\r\n            (item.costTime = item.endTime - (item.startTime || item.endTime));\r\n          item.response = XMLReq.response;\r\n        } else {\r\n          clearInterval(timer);\r\n        }\r\n\r\n        that.updateRequest(id, item);\r\n        that.addDoneReqList(id);\r\n        return _onreadystatechange.apply(XMLReq, arguments);\r\n      };\r\n      XMLReq.onreadystatechange = onreadystatechange;\r\n\r\n      // some 3rd libraries will change XHR's default function\r\n      // so we use a timer to avoid lost tracking of readyState\r\n      let preState = -1;\r\n      timer = setInterval(function() {\r\n        if (preState != XMLReq.readyState) {\r\n          preState = XMLReq.readyState;\r\n          onreadystatechange.call(XMLReq);\r\n        }\r\n      }, 10);\r\n\r\n      return _open.apply(XMLReq, args);\r\n    };\r\n    // mock send()\r\n    window.XMLHttpRequest.prototype.send = function() {\r\n      let XMLReq = this;\r\n      let args = [].slice.call(arguments),\r\n        data = args[0];\r\n\r\n      let item = that.reqList[XMLReq._requestID] || {};\r\n      item.method = XMLReq._method.toUpperCase();\r\n\r\n      let query = XMLReq._url.split('?'); // a.php?b=c&d=?e => ['a.php', 'b=c&d=', '?e']\r\n      item.url = query.shift(); // => ['b=c&d=', '?e']\r\n\r\n      if (query.length > 0) {\r\n        item.getData = {};\r\n        query = query.join('?'); // => 'b=c&d=?e'\r\n        query = query.split('&'); // => ['b=c', 'd=?e']\r\n        for (let q of query) {\r\n          q = q.split('=');\r\n          item.getData[q[0]] = decodeURIComponent(q[1]);\r\n        }\r\n      }\r\n\r\n      if (item.method == 'POST') {\r\n        // save POST data\r\n        if (that.isString(data)) {\r\n          let arr = data.split('&');\r\n          item.postData = {};\r\n          for (let q of arr) {\r\n            q = q.split('=');\r\n            item.postData[q[0]] = q[1];\r\n          }\r\n        } else if (that.isPlainObject(data)) {\r\n          item.postData = data;\r\n        }\r\n      }\r\n\r\n      if (!XMLReq._noVConsole) {\r\n        that.updateRequest(XMLReq._requestID, item);\r\n      }\r\n\r\n      return _send.apply(XMLReq, args);\r\n    };\r\n  }\r\n  /**\r\n   * generate an unique id string (32)\r\n   * @private\r\n   * @return string\r\n   */\r\n  getUniqueID() {\r\n    let id = 'xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx'.replace(/[xy]/g, function(\r\n      c\r\n    ) {\r\n      let r = (Math.random() * 16) | 0,\r\n        v = c == 'x' ? r : (r & 0x3) | 0x8;\r\n      return v.toString(16);\r\n    });\r\n    return id;\r\n  }\r\n  updateRequest(id, data) {\r\n    // see whether add new item into list\r\n    let preCount = Object.keys(this.reqList).length;\r\n\r\n    // update item\r\n    let item = this.reqList[id] || {};\r\n    for (let key in data) {\r\n      item[key] = data[key];\r\n    }\r\n    this.reqList[id] = item;\r\n  }\r\n  isPlainObject(obj) {\r\n    let hasOwn = Object.prototype.hasOwnProperty;\r\n    // Must be an Object.\r\n    if (!obj || typeof obj !== 'object' || obj.nodeType || isWindow(obj)) {\r\n      return false;\r\n    }\r\n    try {\r\n      if (\r\n        obj.constructor &&\r\n        !hasOwn.call(obj, 'constructor') &&\r\n        !hasOwn.call(obj.constructor.prototype, 'isPrototypeOf')\r\n      ) {\r\n        return false;\r\n      }\r\n    } catch (e) {\r\n      return false;\r\n    }\r\n    let key;\r\n    for (key in obj) {\r\n    }\r\n    return key === undefined || hasOwn.call(obj, key);\r\n  }\r\n  isString(value) {\r\n    return Object.prototype.toString.call(value) == '[object String]';\r\n  }\r\n  // 添加完成记录\r\n  addDoneReqList(id) {\r\n    if (!Array.isArray(this.doneReqList)) {\r\n      this.doneReqList = [];\r\n    }\r\n    if (this.doneReqList[id]) {\r\n      return;\r\n    }\r\n    let currentReq = this.reqList[id];\r\n    if (currentReq.readyState === 4) {\r\n      if (currentReq.url.indexOf('127.0.0.1:7001') >= 0) {\r\n        return;\r\n      }\r\n      this.doneReqList.push(currentReq);\r\n      console.log(this.doneReqList);\r\n    }\r\n  }\r\n}\r\n\r\nfunction isWindow(value) {\r\n  var toString = Object.prototype.toString.call(value);\r\n  return (\r\n    toString == '[object global]' ||\r\n    toString == '[object Window]' ||\r\n    toString == '[object DOMWindow]'\r\n  );\r\n}\r\n// export default appWatch;\r\n\n\n//# sourceURL=webpack:///./src/netWork/index.js?");

/***/ })

/******/ });