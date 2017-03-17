'use strict';
var yeoman = require('yeoman-generator');
var chalk = require('chalk');
var asciiArt = require('le-ascii-art');
var path = require('path');
var q = require('q');
var formatter = require('change-case');
var wiring = require('html-wiring');

var answers;

var CastlePageGenerator = yeoman.generators.Base.extend({
  prompting: function() {
    var done = this.async();
    var dir = process.cwd().split(path.sep).pop();
    this.prompt([{
      type: 'input',
      name: 'camelCaseState',
      message: 'What is the ui-router state for the page?',
      default: 'root.foo.barsOnFoo'
    }, {
      type: 'input',
      name: 'url',
      message: 'What is the url for the page?',
      default: '/foos/:fooID/bars-on-foo'
    }], function(responses) {
      answers = responses;
      done();
    }.bind(this));
  },
  writing: function() {
    var writer = this;

    function copyTemplate(from, to) {
      writer.fs.copyTpl(
        writer.templatePath(from),
        writer.destinationPath(to),
        answers
      );
    };

    function addToIndex(pathToAdd) {
      var hook = '<!-- YOEMAN HOOK -->';
      var path = 'client/index.html';
      var file = wiring.readFileAsString(path);
      if (!file || file.indexOf(hook) === -1) {
        console.log('Unable to find hook "' + hook + '"in ' + path);
        return;
      }
      var insert = '<script type="text/javascript" src="' + pathToAdd + '"></script>';

      if (file.indexOf(insert) === -1) {
        wiring.writeFileFromString(file.replace(hook, hook + '\n\t' + insert), path);
      }
    };

    function addToAppModules(module) {
      var hook = '/*--YEOMAN-HOOK--*/';
      var path = 'client/src/app/app.js';
      var file = wiring.readFileAsString(path);
      if (!file || file.indexOf(hook) === -1) {
        console.log('Unable to find hook "' + hook + '"in ' + path);
        return;
      }
      var insert = "'" + module + "',";
      if (file.indexOf(insert) === -1) {
        wiring.writeFileFromString(file.replace(hook, hook + '\n\t' + insert), path);
      }
    };

    answers.paramCaseState = formatter.param(answers.camelCaseState);
    answers.controllerName = formatter.pascal(answers.camelCaseState) + 'StateController';

    copyTemplate('_template.tpl.html', 'client/src/common/partials-lazy/' + answers.paramCaseState + '.tpl.html');
    copyTemplate('_controller.js', 'client/src/common/controllers/' + answers.paramCaseState + '-state-controller.js');
    copyTemplate('_config.js', 'client/src/common/routes/' + answers.paramCaseState + '.js');

    addToIndex('tmp/common/routes/' + answers.paramCaseState + '.js');
    addToAppModules('common.routes.' + answers.camelCaseState);
  },
});

asciiArt.printLogo();

module.exports = CastlePageGenerator;
