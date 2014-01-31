'use strict';
var util = require('util');
var yeoman = require('yeoman-generator');

var WidgetGenerator = module.exports = function WidgetGenerator(args, options, config) {
  // By calling `NamedBase` here, we get the argument to the subgenerator call
  // as `this.name`.
  yeoman.generators.NamedBase.apply(this, arguments);

  console.log('You called the widget subgenerator with the argument ' + this.name + '.');
};

util.inherits(WidgetGenerator, yeoman.generators.NamedBase);

WidgetGenerator.prototype.files = function files() {
  this.copy('somefile.js', 'somefile.js');
};
