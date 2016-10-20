/**
 * get请求(example)
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
      'objArr|10': [
        'AMD'
      ],
      'isBusiness|1-2': true, // 是否可以因公开票
      'lastApplyTime': '@datetime("yyyy-MM-dd HH:mm:ss")', // 上次申请时间
      'popupMessage': { // 弹框提示
        'display|1-2': true, // 是否显示
        'content': '@sentence(5, 15)' // 显示内容
      },
      'isReimbursement|1-2': true // 是否具有企业报销权限
    }
  })

  this.body = message.success(successData)
}

exports.get = consoleInfo(api)
