var Funnel = require('broccoli-funnel');
var ES2015 = require('broccoli-es6modules');
var log = require('broccoli-stew').log;

var app = new Funnel('app', {
  destDir: 'my-app-name'
});

var transpiledTree = new ES2015(app);

module.exports = transpiledTree;
