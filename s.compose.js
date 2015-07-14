var S = require('s');

var compose = {
  R      : S.curry( function( list, value ) { return list.reduceRight( function( prev, next ) { return S.cv( next, prev ); }, value ); }),
  L      : S.curry( function( list, value ) { return list.reduce( function( prev, next ) { return S.cv( next, prev ); }, value ); }),
  tap    : function( fn ) { return function( a ) { fn(a); return a; }; },
  flip   : S.curry( function( fn, a, b ) { return fn(b,a); }),
  spread : S.curry( function( fn, arr ) { return fn.apply( null, arr ); }),
  rest   : S.curry( function( ndx ) { return function() { return Array.prototype.slice.call(arguments, ndx); }; }), 
  zip    : S.curry( function( a, b ) {
    var result = [];
    for (var i=0;i<a.length;i++) {
      result[i] = S.cv( a[i], b[i] );
    }
    return result;
  }),
};

exports = module.exports = compose;
