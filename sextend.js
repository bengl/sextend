(function () {

  var root = this; 

  var sextend = function(ctor, superCtor) {

    if (superCtor) {
      // Normal node inheritance (util.inherits)
      ctor.super_ = superCtor;
      ctor.prototype = Object.create(superCtor.prototype, {
        constructor: {
          value: ctor,
          enumerable: false,
          writable: true,
          configurable: true
        }
      });

      // Static properties (same as ES6)
      ctor.__proto__ = superCtor;
    }

    if (arguments.length > 2) {
      var mixins = [].slice.call(arguments, 2);
      for (var i=0; i < mixins.length; ++i) {
        mixins[i].call(ctor);
      }
    }
  }

  if (typeof module !== 'undefined' && module.exports) {
    module.exports = sextend;
    root.sextend = sextend;
  } else {
    root.sextend = sextend;
  }
})();
