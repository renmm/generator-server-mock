/**
 * 创建支付单
 * @author 妙才<renmaomin@didichuxing.com>
 * @example
 * mock文档: http://mockjs.com/examples.html
 */

var message = require('../../../util/message')
var consoleInfo = require('../../../util/info')
var config = require('config')
var Mock = require('mockjs')

const api = function () {
  var params = this.request.body
  var successDataOfWx = Mock.mock({
    'data': {
      'sign': '@string("number", 22)', // 签名
      'timestamp': '@datetime("yyyy-MM-dd HH:mm:ss")', // 时间戳
      'noncestr': '@string("number", 15)', // 随机数
      'partnerid': '@string("number", 15)', // 付款人id
      'appkey': '@string("number", 15)', // appkey
      'package': '@string("number", 15)', // package
      'appid': '@string("number", 15)', // appid
      'payOrderId': '@string("number", 22)' // 支付订单号
    }
  })
  var successDataOfAli = Mock.mock({
    'data': {
      'payOrderId': '@string("number", 22)', // 支付订单号
      'pay_string': '@url' // 支付参数字符串
    }
  })
  var successDataOfDf = {
    'data': {
      'payChannel': 'DF', // 支付类型
      url: 'http://' + config.get('ip') + ':' + config.get('port') + '/inviceShare.html' // url
    }
  }
  if (params.payChannel === 'WX') {
    this.body = message.success(successDataOfWx)
  } else if (params.payChannel === 'ALI') {
    this.body = message.success(successDataOfAli)
  } else if (params.payChannel === 'DF') {
    this.body = message.success(successDataOfDf)
  }
}

exports.post = consoleInfo(api)
