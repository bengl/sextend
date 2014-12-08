var sextend = require('./sextend'),
    tape = require('tape');

tape('sextend', function (t) {
  t.plan(13);

  function A(){}
  A.prototype.a = 12345;
  A.q = 54321;

  function B(){}
  sextend(B, A);

  t.equal(B.super_, A);

  t.equal(B.q, 54321);
  B.q = "go";
  t.equal(B.q, "go");
  t.equal(A.q, 54321);
  t.equal(B.prototype.a, 12345);

  function C(){}
  sextend(C, B);

  t.equal(C.q, "go");
  t.equal(C.prototype.a, 12345);

  sextend(C); // should not throw
  sextend(C, null); //should not throw

  function D() {}
  D.s = 72;
  var mixin1 = function(){
    this.t = 27;
    this.prototype.u = 28;
  };

  var mixin2 = function() {
    this.v = 29;
  };

  sextend(D, C, mixin1, mixin2);
  t.equal(D.s, 72);
  t.equal(D.t, 27);
  t.equal((new D()).u, 28);
  t.equal((new D()).a, 12345);
  t.equal(D.v, 29);

  sextend(B, null, mixin2);
  t.equal(B.v, 29);

});
