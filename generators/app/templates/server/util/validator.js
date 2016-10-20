var validator = require('validator')
var message = require('./message')
var isNotEmpty = function isNotEmpty (msg) {
  return function (paramVal) {
    var msgObj
    if (paramVal === undefined || validator.isEmpty(paramVal)) {
      msgObj = message.format({
        message: msg || '参数格式不正确'
      })
    }
    if (msgObj) {
      this.body = msgObj
    }
    return true
  }
}

var isPhone = function isPhone (phoneNum) {
  var msg
  if (phoneNum === undefined || !validator.isMobilePhone(phoneNum, 'zh-CN')) {
    msg = message.format({
      message: '手机号格式不正确'
    })
  }
  if (msg) {
    this.body = msg
  }
  return true
}

module.exports = {
  isNotEmpty: isNotEmpty,
  isPhone: isPhone
}
