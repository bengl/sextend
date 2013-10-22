# sextend

__sextend__ ("super extend") allows you to to do inheritance in JavaScript *and* in much the same manner as `util.inherits` in Node.js, except now you also inherit static variables too! Isn't that cool?

## Usage

Just use it like you would use `util.extend` in node.js.

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

## License

WTFPL
