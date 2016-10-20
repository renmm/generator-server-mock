/**
 * 构造area数据
 * @author 妙才<renmaomin@didichuxing.com>
 * @example
 * mock文档: http://mockjs.com/examples.html
 */

var Mock = require('mockjs')
var _ = require('lodash')

const makeArea = function (parentId) {
  var areaType
  if (parentId === 0) {
    areaType = 'province'
  } else if (parentId !== 0 && parentId < 100) {
    areaType = 'city'
  } else {
    areaType = 'county'
  }
  var successData = Mock.mock({
    'data|1-20': [{
      'id|+1': parentId * 100 + 1, // 地区 id
      'parentId': parentId,
      'name': '@' + areaType // 地区名称
    }]
  })
  return successData
}
const Area = function () {
  this.area = []
}

Area.prototype.getAreaByIds = function (ids) {
  var areaArr = []
  this.area.forEach(function (area) {
    if (_.includes(ids, area.id)) {
      areaArr.push(area)
    }
  })
  return areaArr
}
Area.prototype.getAreaByParentId = function (parentId) {
  parentId = parentId || 0
  if (!this[parentId]) {
    this[parentId] = makeArea(parentId).data
    this.area = this.area.concat(this[parentId])
  }
  return this[parentId]
}

Area.prototype.getProvinceId = function () {
  return this.getAreaByParentId()[0].id
}
Area.prototype.getCityId = function () {
  return this.getAreaByParentId(this.getProvinceId())[0].id
}
Area.prototype.getDistrictId = function () {
  return this.getAreaByParentId(this.getCityId())[0].id
}

module.exports = new Area()
