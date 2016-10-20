/**
 * 出行卡消费明细接口
 * @author 妙才<renmaomin@didichuxing.com>
 * @example
 * mock文档: http://mockjs.com/examples.html
 */

var message = require('../../../util/message')
var consoleInfo = require('../../../util/info')
var Mock = require('mockjs')

const api = function () {
  var successData = Mock.mock({
    'data|20': [{
      'orderId': '@string("number", 15)', // 订单id
      'orderAmount|1-10000.0-2': 1, // 订单金额
      'productId|1': [258, 260], // 打车类型 260 快车  258专车
      'createTime': '@datetime("yyyy-MM-dd HH:mm:ss")', // 叫车时间
      'destName': '@county(true)', // 终点名称
      'startingName': '@county(true)', // 起点名称
      'cardBalance|0-10000.0-2': 0, // 出行卡余额
      'totalRecharge|1-100000.0-2': 1000 // 出行卡累计充值总额
    }
  ]})

  this.body = message.success(successData)
}

exports.get = consoleInfo(api)
