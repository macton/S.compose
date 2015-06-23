var S = require('s');

S.compose = require('../s.compose');

console.log( S.compose.R( [ function(x) { return x+1; }, function(x) { return x*2; } ], 1 ) );
console.log( S.compose.L( [ function(x) { return x+1; }, function(x) { return x*2; } ], 1 ) );
