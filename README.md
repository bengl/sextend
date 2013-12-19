# sextend

__sextend__ ("super extend") allows you to to do inheritance in JavaScript *and* in much the same manner as `util.inherits` in Node.js, except now you also inherit static variables too! Isn't that cool?

For further awesome, you can also add mixins at the same time!

## Usage

For extending, just use it like you would use `util.extend` in node.js.

In node:
```javascript
var sextend = require('sextend');

function A(){}
A.coolStaticVar = "fun";
function B(){}
sextend(B, A);

console.log(A.coolStaticVar); // fun
```

In browser:
```html
<script src="sextend.js"></script>
<script>
function A(){}
A.coolStaticVar = "fun";
function B(){}
sextend(B, A);

console.log(A.coolStaticVar); // fun
</script>
```

For mixins, you can add extra arguments that are mixin functions. A mixin 
function is just a function that refers to the destination object as `this` and 
adds properties accordingly.

Example:
```javascript
function A(){}
function MyMixin(){
  this.prototype.instanceVar = 1;
  this.staticVar = 2;
}
sextend(A, null, MyMixin); // superclass is optional

console.log(A.staticVar); // 2
console.log((new A()).instanceVar); // 1
```

## License

WTFPL
