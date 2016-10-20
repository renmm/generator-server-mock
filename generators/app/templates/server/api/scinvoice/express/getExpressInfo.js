/**
 * 快递详情获取
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
      'expressCompany': '@ctitle', // 快递公司
      'expressNumber': '@string("number", 15)', // 快递单号
      'logistics|1-10': [{
        'dateTime': '@datetime("yyyy-MM-dd HH:mm:ss")', // 流转时间
        'remark': '@csentence', // 流转描述
        'status|1': ['正在签署', '正在检收', '已发送'] // 流转状态
      }]
    }
  })

  this.body = message.success(successData)
}

exports.get = consoleInfo(api)
