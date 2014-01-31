'use strict';
var util = require('util');
var yeoman = require('yeoman-generator');

var ModelGenerator = module.exports = function ModelGenerator() {
  // By calling `NamedBase` here, we get the argument to the subgenerator call
  // as `this.name`.
    yeoman.generators.NamedBase.apply(this, arguments);

    console.log('You called the model subgenerator with the argument ' + this.name + '.');
};

util.inherits(ModelGenerator, yeoman.generators.NamedBase);

ModelGenerator.prototype.files = function files() {
  //this.copy('somefile.js', 'somefile.js');
    var filename = 'app/scripts/models/' + this.name + '.js';
    var filenameTest = 'test/models/' + this.name + '.js';
    console.log(filename);
    this.template('model', filename);
    this.template('test', filenameTest);
    //this.writeTemplate('model', path.join(this.env.options.appPath + '/scripts/models', this.name));
};
