var S = require('s');

var compose = {
  R     : S.curry( function( list, value ) { return list.reduceRight( function( prev, next ) { return S.cv( next, prev ); }, value ); }),
  L     : S.curry( function( list, value ) { return list.reduce( function( prev, next ) { return S.cv( next, prev ); }, value ); }),
  tap   : function( fn ) { return function( a ) { fn(a); return a; }; },
  flip  : S.curry( function( fn, a, b ) { return fn(b,a); }),
};

exports = module.exports = compose;
