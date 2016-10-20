'use strict'
var yeoman = require('yeoman-generator')
var chalk = require('chalk')
var yosay = require('yosay')

module.exports = yeoman.Base.extend({
  constructor: function () {
    yeoman.Base.apply(this, arguments)
    this.option('webpack', {
      type: Boolean,
      desc: 'need to use webpack or not.',
      defaults: false
    })
    this.npmInstallPkgs = [
      // 'koa',
      // 'koa-static',
      // 'koa-frouter',
      // 'koa-bodyparser',
      // 'koa-scheme',
      // 'koa-jsonp',
      'chalk',
      'config'
    ]
  },
  prompting: function () {
    // Have Yeoman greet the user.
    this.log(yosay(
      'Welcome to the praiseworthy ' + chalk.red('generator-server-mock') + ' generator!'
    ))
    var prompts = []
    if (!this.options['webpack']) {
      prompts.push({
        type: 'confirm',
        name: 'webpack',
        message: 'Would you need to use webpack or not?',
        default: false
      })
    }

    return this.prompt(prompts).then(function (props) {
      // To access props later use this.props.someAnswer
      this.props = props
    }.bind(this))
  },

  writing: function () {
    this.fs.copyTpl(
      this.templatePath('app.js'),
      this.destinationPath('app.js'),
      {
        webpack: this.options['webpack'] || this.props.webpack
      }
    )
  },

  install: function () {
    this.npmInstall(this.npmInstallPkgs, { 'saveDev': true })
  }
})
