/**
 * app入口
 * @author 妙才<renmaomin@didichuxing.com>
 */

const koa = require('koa')
const serve = require('koa-static')
const router = require('koa-frouter')
const bodyParser = require('koa-bodyparser')
const scheme = require('koa-scheme')
const jsonp = require('koa-jsonp')
const chalk = require('chalk')
const path = require('path')
const config = require('config')
const getSchemeParams = require('./server/util/schemeParams')

const app = koa()
const ip = config.get('ip')
const port = config.get('port')

var isProduction = function () {
  return process.env.NODE_ENV === 'production'
}

app.use(jsonp())
app.use(bodyParser())
app.use(scheme(getSchemeParams('./server/validator')))
app.use(serve(path.join(__dirname, isProduction() ? 'dist' : 'src')))
app.use(router(app, './server/api'))

app.listen(port, ip, function () {
  console.log(
    chalk.magenta('Server'),
    chalk.magenta(isProduction() ? '[产品版]' : '[开发版]',
      ' listening on ' + chalk.green.underline('http://' + ip + ':' + port) + ', Ctrl+C to stop')
  )
})
