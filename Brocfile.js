var Funnel = require('broccoli-funnel');
var ES2015 = require('broccoli-es6modules');
var debug = require('broccoli-stew').debug;

var app = new Funnel('app', {
  destDir: 'my-app-name'
});

var debugApp = debug(app, { name: 'my-app-name' });

var transpiledTree = new ES2015(debugApp);

module.exports = transpiledTree;
