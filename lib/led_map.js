module.exports = function (opts) {
  opts = opts || {};
  var arr = opts.arr;
  var strip = opts.strip;
  var offset = opts.offset || 0;
  var mapFunction = opts.func || undefined;

  if (arr === undefined) {
    throw new Error('you must specify a color array');
  }
  if (strip === undefined) {
    throw new Error('you must specify a node-pixel strip');
  }

  var stripLength = strip.stripLength();

  arr.forEach((v, idx) => {
    var position = idx + offset;
    if (mapFunction) {
      position = mapFunction(position);
    }
    if (position < stripLength) {
      var pixel = strip.pixel(position);
      pixel.color(v.hex());
    }
  });
};
