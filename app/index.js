'use strict';
var util = require('util');
var path = require('path');
var yeoman = require('yeoman-generator');


var Yui3AppGenerator = module.exports = function Yui3AppGenerator(args, options, config) {
  yeoman.generators.Base.apply(this, arguments);

  this.on('end', function () {
    this.installDependencies({ skipInstall: options['skip-install'] });
  });

  this.pkg = JSON.parse(this.readFileAsString(path.join(__dirname, '../package.json')));
};

util.inherits(Yui3AppGenerator, yeoman.generators.Base);

Yui3AppGenerator.prototype.askFor = function askFor() {
  var cb = this.async();

  // have Yeoman greet the user.
  console.log(this.yeoman);

  var prompts = [{
    type: 'confirm',
    name: 'someOption',
    message: 'Would you like to enable this option?',
    default: true
  }];

  this.prompt(prompts, function (props) {
    this.someOption = props.someOption;

    cb();
  }.bind(this));
};

Yui3AppGenerator.prototype.app = function app() {
  this.mkdir('app');
  this.mkdir('app/scripts');
  this.mkdir('app/scripts/models');
  this.mkdir('app/scripts/views');
  this.mkdir('app/scripts/widgets');
  this.mkdir('app/templates');
  this.mkdir('app/test');
  this.mkdir('app/test/models');
  this.mkdir('app/test/views');
  this.mkdir('app/test/widgets');
  this.mkdir('app/styles');

  this.copy('_package.json', 'package.json');
  this.copy('_bower.json', 'bower.json');
  this.copy('Gruntfile.js', 'Gruntfile.js');
};

Yui3AppGenerator.prototype.projectfiles = function projectfiles() {
  this.copy('editorconfig', '.editorconfig');
  this.copy('jshintrc', '.jshintrc');
  this.copy('index.html', 'index.html');
};
