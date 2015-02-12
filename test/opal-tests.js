Tinytest.add('Opal and Javascript interoperability', function (test) {
  test.equal(Opal.User.$new().$name(), 'Bob');
  test.equal(Opal.gvars.a, 123);
  test.equal(Opal.Object.$b(), "321");
  test.notEqual(Opal.Object.$b(), 321);
});
