/**
 * 默认配置（开发）
 * @author 妙才<renmaomin@126.com>
 */

var ip = require('ip')
var port = 4000

module.exports = {
  ip: ip.address(),
  port: port
}
