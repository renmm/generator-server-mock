/**
 * post请求(example)
 * @author 妙才<renmaomin@didichuxing.com>
 * @example
 * mock文档: http://mockjs.com/examples.html
 */

var message = require('../../util/message')
var consoleInfo = require('../../util/info')
var Mock = require('mockjs')

const api = function () {
  var successData = Mock.mock({
    'data': {
      'applicationId': '@string("number", 15)' // 申请 id
    }
  })
  this.body = message.success(successData)
}

exports.post = consoleInfo(api)
