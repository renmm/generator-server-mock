/**
 * 通过 id 查询
 * @author 妙才<renmaomin@didichuxing.com>
 * @example
 * mock文档: http://mockjs.com/examples.html
 */

var message = require('../../../util/message')
var consoleInfo = require('../../../util/info')
var area = require('../../../util/area')

const api = function () {
  var ids = this.query.ids.split(',')
  ids = ids.map(function (id) { return Number(id) })
  var areaData = area.getAreaByIds(ids)
  this.body = message.success({data: areaData})
}

exports.get = consoleInfo(api)
