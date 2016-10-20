/**
 * 通过 parentId 查询
 * @author 妙才<renmaomin@didichuxing.com>
 * @example
 * mock文档: http://mockjs.com/examples.html
 */

var message = require('../../../util/message')
var consoleInfo = require('../../../util/info')
var area = require('../../../util/area')

const api = function () {
  var parentId = this.query.parentId
  var areaArr = area.getAreaByParentId(Number(parentId))

  this.body = message.success({data: areaArr})
}

exports.get = consoleInfo(api)
