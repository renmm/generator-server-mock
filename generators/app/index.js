'use strict'
var yeoman = require('yeoman-generator')
var chalk = require('chalk')
var yosay = require('yosay')
var _ = require('lodash')

module.exports = yeoman.Base.extend({
  constructor: function () {
    yeoman.Base.apply(this, arguments)
    this.npmInstallPkgs = [
      'koa@^1.2.4',
      'koa-static@^2.0.0',
      'koa-frouter@^0.3.3',
      'koa-bodyparser@^2.2.0',
      'koa-scheme@^2.2.1',
      'koa-jsonp@0.2.0',
      'mockjs',
      'nodemon',
      'lodash',
      'winston',
      'ls-sync',
      'ip',
      'chalk',
      'validator',
      'config'
    ]
    console.log()
  },
  prompting: function () {
    // Have Yeoman greet the user.
    this.log(yosay(
      'Welcome to the praiseworthy ' + chalk.red('generator-server-mock') + ' generator!'
    ))

    return this.prompt([]).then(function (props) {
      // To access props later use this.props.someAnswer
      this.props = props
    }.bind(this))
  },

  writing: function () {
    var currentPkg = this.fs.readJSON(this.destinationPath('package.json'), {})
    currentPkg = _.merge({}, currentPkg, {
      'scripts': {
        'start': 'nodemon app.js',
        'release': 'NODE_ENV=production nodemon app.js'
      }
    })
    this.fs.writeJSON(this.destinationPath('package.json'), currentPkg)
    this.directory('./server', './server')
    this.directory('./config', './config')
    this.fs.copyTpl(this.templatePath('app.js'), this.destinationPath('app.js'))
  },

  install: function () {
    this.npmInstall(this.npmInstallPkgs, { 'saveDev': true })
  }
})
