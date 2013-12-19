var sextend = require('./sextend'),
    assert = require('assert');

function A(){}
A.prototype.a = 12345;
A.q = 54321;

function B(){}
sextend(B, A);

assert(B.q === 54321);
B.q = "go";
assert(B.q === "go");
assert(A.q === 54321);
assert(B.prototype.a === 12345);

function C(){}
sextend(C, B);

assert(C.q === "go");
assert(C.prototype.a === 12345);

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
assert(D.s === 72);
assert(D.t === 27);
assert((new D()).u === 28);
assert((new D()).a === 12345);
assert(D.v === 29);

sextend(B, null, mixin2);
assert(B.v === 29);
