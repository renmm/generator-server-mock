/**
 * 获取初始化数据(前获取乘客状态)
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
      'isBusiness|1-2': true, // 是否可以因公开票
      'lastApplyTime': '@datetime("yyyy-MM-dd HH:mm:ss")', // 上次申请时间
      'isScVip|1-2': true, // 是否是专车至尊会员
      'leftUrgentNum|0-10': 0, // 剩余发票加急特权数量
      'popupMessage': {
        'display|1-2': true, // 是否显示
        'content': '@csentence' // 显示内容
      },
      'isReimbursement|1-2': true, // 是否具有企业报销权限
      'reimbursementUrl': '@url' // 企业报销跳转地址
    }
  })

  this.body = message.success(successData)
}

exports.get = consoleInfo(api)
