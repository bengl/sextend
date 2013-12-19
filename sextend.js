(function () {

  var root = this; 

  var sextend = function(ctor, superCtor) {

    if (superCtor) {
      // Normal node inheritance (util.inherits), without super_
      ctor.prototype = Object.create(superCtor.prototype, {
        constructor: {
          value: ctor,
          enumerable: false,
          writable: true,
          configurable: true
        }
      });
      // Set up _sextends variable, hidden.
      Object.defineProperty(ctor, '_sextends', { enumerable: false, value: {} });
      for (var s in superCtor) {
        if (s === '_sextends' || !superCtor.hasOwnProperty(s)) return;
        // Set up some accessors so we can get from super.
        Object.defineProperty(ctor, s, {
          enumerable: true,
          get: function() {
            // First search our _sextends. If not there, try super's.
            // If not there, try property on super.
            if (this._sextends[s]) {
              return this._sextends[s];
            } else {
              return superCtor._sextends ? superCtor._sextends[s] : superCtor[s];
            }
          },
          set: function(thing) {
            // Override's super's version. Just like prototype. :)
            this._sextends[s] = thing;
          }
        });
      }
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
