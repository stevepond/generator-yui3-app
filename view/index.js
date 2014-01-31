'use strict';
var util = require('util');
var yeoman = require('yeoman-generator');

var ViewGenerator = module.exports = function ViewGenerator(args, options, config) {
  // By calling `NamedBase` here, we get the argument to the subgenerator call
  // as `this.name`.
    yeoman.generators.NamedBase.apply(this, arguments);

    console.log('You called the view subgenerator with the argument ' + this.name + '.');
};

util.inherits(ViewGenerator, yeoman.generators.NamedBase);

ViewGenerator.prototype.files = function files() {
    var filename = 'app/scripts/views/' + this.name + '' + '.js';
    var filenameTest = 'test/views/' + this.name + '' + '.js';
    this.template('view', filename);
    this.template('test', filenameTest);
};
