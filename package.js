Package.describe({
  name: 'massimoronca:opal',
  summary: 'Opal - Ruby to Javascript Compiler',
  version: '0.1.1',
  documentation: 'README.md',
  git: 'https://github.com/wstucco/meteor-opal'
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
  api.versionsFrom('METEOR@0.9.2');
  api.addFiles([
    'lib/opal.min.js',
  ], ['client', 'server']);
});

Package.onTest(function(api) {
  api.use('tinytest');
  api.use('massimoronca:opal');
  api.addFiles('test/opal-test-setup.rb');
  api.addFiles('test/opal-tests.js');
});