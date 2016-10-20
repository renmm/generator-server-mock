/**
 * 开票历史查询
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
      'applicationId': '@string("number", 15)', // 申请id
      'applyTime': '@datetime("yyyy-MM-dd HH:mm:ss")', // 申请时间
      'invoiceValue|1-1000.0-2': 100, // 开票金额
      'expressName': '申通快递', // 快递公司
      'expressNum': '@string("number", 15)', // 快递单号
      'status|1-5': 1, // 申请状态 1 => 未开票,2 => 待发出,3 => 已发出,4 ＝> 待支付 5 => 关闭
      'isUrgent|0-1': 1, // 是否加急
      'applicationType|1-3': 1, // 申请类型 1专快车 2出行卡 3代驾
      'invoicePrintType|1-2': 1 // 发票类型 1纸质发票 2电子发票
    }]
  })

  if (this.query.pageNum >= 3) { // 简单模拟分页，空数据
    this.body = message.success({data: []})
    return
  }
  this.body = message.success(successData)
}

exports.get = consoleInfo(api)
