'use strict';
var util = require('util');
var yeoman = require('yeoman-generator');

var ModelListGenerator = module.exports = function ModelListGenerator() {
  // By calling `NamedBase` here, we get the argument to the subgenerator call
  // as `this.name`.
    yeoman.generators.NamedBase.apply(this, arguments);

    console.log('You called the model subgenerator with the argument ' + this.name + '.');
};

util.inherits(ModelListGenerator, yeoman.generators.NamedBase);

ModelListGenerator.prototype.files = function files() {
  //this.copy('somefile.js', 'somefile.js');
    var filename = 'app/scripts/models/' + this.name + '_list' + '.js';
    var filenameTest = 'test/models/' + this.name + '_list' + '.js';
    this.name += '_list';
    console.log(filename);
    this.template('modellist', filename);
    this.template('test', filenameTest);
    //this.writeTemplate('model', path.join(this.env.options.appPath + '/scripts/models', this.name));
};
