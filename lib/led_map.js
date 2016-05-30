var color = require('onecolor');

module.exports = function(opts) {
  opts = opts || {};
  var arr = opts.arr;
  var strip = opts.strip;
  var offset = opts.offset || 0;

  if (arr === undefined) {
    throw 'you must specify a color array';
  }
  if (strip === undefined) {
    throw 'you must specify a node-pixel strip';
  }
  
  var stripLength = strip.stripLength();

  arr.forEach((v,idx) => {
    if (idx+offset < stripLength) {
      var pixel = strip.pixel(idx+offset);
      pixel.color(v.hex());
    }
  });
};
