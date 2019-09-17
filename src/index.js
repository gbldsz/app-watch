/*
 * @Description: 初始化监控
 * @Author: liu deng
 * @Date: 2019-09-17 11:11:51
 * @LastEditTime: 2019-09-17 19:31:49
 * @LastEditors: liu deng
 */
import netWork from './netWork';

class appWatch {
  constructor(configs) {
    let obNetWork = new netWork(configs);
    setInterval(() => {
      let netList = obNetWork.doneReqList;
      obNetWork.doneReqList = [];
      if (netList && netList.length >= 1) {
        console.log(netList);
        var req = new XMLHttpRequest();
        req.open('POST', 'http://127.0.0.1:7001');
        req.setRequestHeader('Content-type', 'application/json');
        req.send(JSON.stringify({ data: netList }));
      }
    }, 3000);
  }
}

if (
  typeof define === 'function' &&
  typeof define.amd === 'object' &&
  define.amd
) {
  // AMD. Register as an anonymous module.
  define(function() {
    return appWatch;
  });
} else if (typeof module !== 'undefined' && module.exports) {
  module.exports = appWatch;
  module.exports.appWatch = appWatch;
} else {
  window.appWatch = appWatch;
}
