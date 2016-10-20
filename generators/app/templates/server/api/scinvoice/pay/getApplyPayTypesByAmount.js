/**
 * 按照金额查询
 * @author 妙才<renmaomin@didichuxing.com>
 * @example
 * mock文档: http://mockjs.com/examples.html
 */

var message = require('../../../util/message')
var consoleInfo = require('../../../util/info')
var Mock = require('mockjs')

const api = function () {
  var successData = Mock.mock({
    'data': {
      'payChannelList': [
        'ALI', // 支付宝支付
        'WX', // 微信支付
        'DF' // 到付
      ]
    }
  })

  this.body = message.success(successData)
}

exports.post = consoleInfo(api)
