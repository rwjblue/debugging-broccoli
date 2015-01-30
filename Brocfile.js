var Funnel = require('broccoli-funnel');
var ES2015 = require('broccoli-es6modules');
var log = require('broccoli-stew').log;

var app = new Funnel('app', {
  destDir: 'my-app-name'
});

var loggedApp = log(app, { output: 'tree', label: 'my-app-name tree' });

var transpiledTree = new ES2015(loggedApp);

module.exports = transpiledTree;
