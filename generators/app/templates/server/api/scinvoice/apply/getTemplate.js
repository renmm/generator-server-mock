/**
 * 开票预申请字段读取
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
      'recipientName': '@cname', // 收件人
      'recipientPhone': /\d{1,13}/, // 收件电话 @desc 项目里如此判断手机号～
      'provinceId': area.getProvinceId(), // 收件人省
      'cityId': area.getCityId(), // 收件人市
      'districtId': area.getDistrictId(), // 收件人区
      'detailedAddress': '@ctitle(5, 20)', // 收件人详细地址
      'recipientEmail': '@email', // 收件人邮箱
      'invoiceTitle': '@ctitle(5, 15)', // 发票抬头
      'invoiceRemark': '@csentence', // 发票备注
      'expressFeeType|1': ['WX', 'ALI', 'DF', 'WX'], // 支付方式 WX：微信支付 ALI：支付宝支付 DF：货到付款
      'taxRegistrationNumber': '@string("number", 15)', // 纳税人识别号
      'registeredAddressPhone': '@county(true) @string("number", 13)', // 注册地址、电话
      'depositBankAccount': '@ctitle @string("number", 15)', // 开户行及账号
      'isInvoicePayee|0-1': 1, // 是否需要收款人
      'isInvoiceChecker|0-1': 1 // 是否需要复核人
    }
  })

  this.body = message.success(successData)
}

exports.get = consoleInfo(api)
