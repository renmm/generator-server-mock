/**
 * 开票详情查询
 * @author 妙才<renmaomin@didichuxing.com>
 * @example
 * mock文档: http://mockjs.com/examples.html
 */

var message = require('../../../util/message')
var consoleInfo = require('../../../util/info')
var area = require('../../../util/area')
var Mock = require('mockjs')

const api = function () {
  var successData = Mock.mock({
    'data': {
      'applicationId': '@string("number", 15)', // 申请id
      'applicationType|1-3': 1, // 申请类型 1专快车 2出行卡 3代驾
      'recipientName': '@cname', // 收件人
      'recipientPhone': /\d{1,13}/, // 收件电话 @desc 项目里如此判断手机号～
      'provinceId': area.getProvinceId(), // 收件人省
      'cityId': area.getCityId(), // 收件人市
      'districtId': area.getDistrictId(), // 收件人区
      'detailedAddress': '@ctitle(5, 20)', // 收件人详细地址
      'recipientEmail': '@email', // 收件人邮箱
      'applyTime': '@datetime("yyyy-MM-dd HH:mm:ss")', // 申请时间
      'invoicePrintType|1-2': 1, // 发票类型 1纸质发票 2电子发票
      'invoiceTitle': '@ctitle(5, 15)', // 发票抬头
      'invoiceContent': '@csentence', // 开票内容
      'invoiceRemark|1': ['@csentence', ''], // 发票备注?
      'invoiceValue|1-1000.0-2': 100, // 开票金额
      'invoiceCount|1-100': 1, // 开票数量
      'expressName': '申通快递', // 快递公司
      'expressNum': '@string("number", 15)', // 快递单号
      'expressFeeType|1': ['WX', 'ALI', 'DF', 'WX'], // 支付方式 WX：微信支付 ALI：支付宝支付 DF：货到付款
      'expressFee|5-30': 10, // 快递费用
      'status|1-5': 1, // 申请状态 1 => 未开票,2 => 待发出,3 => 已发出,4 ＝> 待支付 5 => 关闭
      'orderCount|1-100': 1, // 订单数量
      'taxRegistrationNumber': ['@string("number", 15)', ''], // 纳税人识别号?
      'registeredAddressPhone': ['@county(true) @string("number", 13)', ''], // 注册地址、电话?
      'depositBankAccount|1': ['@ctitle @string("number", 15)', ''], // 开户行及账号?
      'isInvoicePayee|0-1': 1, // 是否需要收款人
      'isInvoiceChecker|0-1': 1, // 是否需要复核人
      'isUrgent|0-1': 1 // 是否加急
    }
  })

  if (this.query.pageNum >= 3) { // 简单模拟分页，空数据
    this.body = message.success({data: []})
    return
  }
  this.body = message.success(successData)
}

exports.get = consoleInfo(api)
