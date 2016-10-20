/**
 * 待开发票行程列表
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
      'productId|0-1': 1, // 打车类型 0 快车  1 专车
      'payAmount|1-1000.0-2': 100, // 开票金额
      'finishTime': '@datetime("yyyy-MM-dd HH:mm:ss")', // 行程结束时间
      'createTime': '@datetime("yyyy-MM-dd HH:mm:ss")', // 叫车时间
      'beginChargeTime': '@datetime("yyyy-MM-dd HH:mm:ss")', // 行程开始时间
      'startingName': '@county(true)', // 起点名称
      'destName': '@county(true)', // 终点名称
      'onBusiness|1-2': true, // 是否因公 0 否 1 是
      'isAfterLastApply|1-2': true // 是否是上次申请之后
    }]
  })

  if (Number(this.query.pageNum) > 3) {
    this.body = message.success({data: []})
    return
  }

  this.body = message.success(successData)
}

exports.get = consoleInfo(api)
