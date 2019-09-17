/*
 * @Description: 
 * @Author: liu deng
 * @Date: 2019-08-26 16:35:18
 * @LastEditTime: 2019-09-17 11:39:27
 * @LastEditors: liu deng
 */
const path = require('path');

module.exports = {
  mode: 'development',
  entry: './src/index.js',
  output: {
    filename: 'bundle.js',
    path: path.resolve(__dirname, 'dist')
  }
};