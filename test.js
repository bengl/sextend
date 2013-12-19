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
