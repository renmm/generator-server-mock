/**
 * 广告图片
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
      'bannerInfo': {
        'imageUrl': '//es_static.xiaojukeji.com/static/web/invoice/img/ad_banner.jpg',
        'linkUrl': '@url'
      },
      'display|1-2': true
    }
  })

  this.body = message.success(successData)
}

exports.get = consoleInfo(api)
