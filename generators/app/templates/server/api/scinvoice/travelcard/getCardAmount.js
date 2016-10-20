/**
 * 出行卡金额状态
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
      'cardBalance|0-10000.0-2': 0, // 出行卡余额
      'totalRecharge|1-100000.0-2': 1000 // 出行卡累计充值总额
    }
  })

  this.body = message.success(successData)
}

exports.get = consoleInfo(api)
