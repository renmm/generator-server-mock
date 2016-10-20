/**
 * 获取校验的参数
 * @author 妙才<renmaomin@126.com>
 */
const path = require('path')
const fs = require('fs')
const ls = require('ls-sync')

function formatPath (filePath, root, wildcard) {
  return filePath
    .replace(path.join(process.cwd(), root), '')
    .replace(/\\/g, '/')
    .replace(new RegExp('/\\' + wildcard, 'g'), '/:')
    .split('.')[0]
}

const getSchemeParams = function (conf, options) {
  if (typeof conf === 'string') {
    conf = {root: conf}
  } else if (!conf || !conf.root) {
    throw new Error('`root` config required.')
  }

  var root = conf.root
  var wildcard = conf.wildcard || '*'
  var scheme = {}
  ls(root).forEach(function (filePath) {
    var stat = fs.lstatSync(filePath)
    var exportFuncs, pathRegexp
    if (!stat.isDirectory()) {
      exportFuncs = require(filePath)
      pathRegexp = formatPath(filePath, root, wildcard)
      scheme[pathRegexp] = exportFuncs
    }
  })
  if (options && options.debug) {
    console.log('scheme:', scheme)
  }
  return scheme
}

module.exports = getSchemeParams
