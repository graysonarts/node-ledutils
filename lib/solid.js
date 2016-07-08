var color = require('onecolor');

module.exports = function (opts) {
  opts = opts || {};
  var arr = opts.arr;
  var c = opts.color || '#000000';
  c = color(c);

  if (arr === undefined) {
    throw new Error('must specify an array');
  }

  for (var i = 0; i < arr.length; i++) {
    arr[i] = c;
  }
};
