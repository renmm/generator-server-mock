/**
 * 重新发送电子行程单
 * @author 妙才<renmaomin@didichuxing.com>
 * @example
 * mock文档: http://mockjs.com/examples.html
 */

var message = require('../../../util/message')
var consoleInfo = require('../../../util/info')

const api = function () {
  this.body = message.success()
}

exports.get = consoleInfo(api)
