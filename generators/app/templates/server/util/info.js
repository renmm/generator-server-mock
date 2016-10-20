/**
 * 统一输出信息(接口，参数，返回数据)
 * @author 妙才<renmaomin@didichuxing.com>
 */

var logger = require('./logger')
const chalk = require('chalk')

const consoleInfo = function consoleInfo (fn) {
  return function * () {
    consoleRequest(this)
    fn.bind(this)()
    consoleResponse(this, true)
  }
}

const consoleRequest = function consoleRequest (that) {
  var url = that.url && that.url.split('?')[0]
  var method = that.method
  var params = that.query || that.request.body

  logger.info(chalk.blue('[' + method + ']'), chalk.magenta(url), params)
}
const consoleResponse = function consoleResponse (that, isHidden) {
  if (!isHidden) {
    logger.info(chalk.blue('[RESPONSE]'), that.body)
  }
}

module.exports = consoleInfo
