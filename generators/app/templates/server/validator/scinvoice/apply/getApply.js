/**
 * 获取单个接口的数据校验
 * @author 妙才<renmaomin@126.com>
 */
var validatorUtil = require('../../../util/validator')

module.exports = {
  'request': {
    'method': 'GET',
    'query': {
      'applicationId': validatorUtil.isNotEmpty('applicationId格式不正确')
    }
  }
}
