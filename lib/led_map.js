var color = require('onecolor');

module.exports = function(arr, strip, offset) {
  var stripLength = strip.stripLength();
  if (offset === undefined) {
    offset = 0;
  }

  arr.forEach((v,idx) => {
    if (idx+offset < stripLength) {
      var pixel = strip.pixel(idx+offset);
      pixel.color(v.hex());
    }
  });
};
