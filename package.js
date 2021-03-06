Package.describe({
  name: 'mikamai:opal',
  summary: 'Opal - Ruby to Javascript Compiler',
  version: '0.1.2',
  documentation: 'README.md',
  git: 'https://github.com/mikamai/meteor-opal'
});

Package.registerBuildPlugin({
  name: "compileOpal",
  use: [],
  sources: [
    'lib/opal.min.js',
    'lib/opal-parser.min.js',
    'plugin/compile-opal.js'
  ],
});

Package.onUse(function (api) {
  api.addFiles([
    'lib/opal.min.js',
  ], ['client', 'server']);
});

Package.onTest(function(api) {
  api.use('tinytest');
  api.use('mikamai:opal');
  api.addFiles('test/opal-test-setup.rb');
  api.addFiles('test/opal-tests.js');
});