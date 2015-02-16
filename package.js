Package.describe({
  name: 'massimoronca:opal-meteor',
  summary: 'Meteor ported to Opal',
  version: '0.1.0',
  documentation: 'README.md',
  git: 'git@github.com:wstucco/opal-meteor.git'
});

Package.onUse(function (api) {
  api.use('massimoronca:opal');

  api.addFiles([
    'lib/meteor.js.rb',
  ], ['client', 'server']);
});

Package.onTest(function(api) {
  api.use('tinytest');
  api.use('massimoronca:opal');
  api.use('massimoronca:opal-meteor');
  api.addFiles('test/meteor-tests.js.rb');
});

