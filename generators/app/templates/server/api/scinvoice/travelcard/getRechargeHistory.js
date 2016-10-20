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
      'type|1': [258, 260], // 充值类型 258 专车 260快车
      'amount|1-1000.0-2': 100, // 充值金额
      'time': '@datetime("yyyy-MM-dd HH:mm:ss")' // 充值时间
    }]
  })

  if (Number(this.query.pageNum) > 3) {
    this.body = message.success({data: []})
    return
  }

  this.body = message.success(successData)
}

exports.get = consoleInfo(api)
