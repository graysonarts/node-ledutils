var color = require('onecolor');

module.exports = function(opts) {
  opts = opts || {};
  var arr = opts.arr;
  var startColor = opts.startColor;
  var endColor = opts.endColor;

  if (arr === undefined || arr.length == 0) {
    throw 'You must specify an array';
  }
  if (startColor === undefined) {
    throw 'you must specify a start color';
  }
  if (endColor === undefined) {
    throw 'you must specify an end color';
  }

  startColor = color(startColor);
  endColor = color(endColor);

  var distance = {
    red: Math.floor(endColor.red()*255 - startColor.red()*255) << 7,
    green: Math.floor(endColor.green()*255 - startColor.green()*255) << 7,
    blue: Math.floor(endColor.blue()*255 - startColor.blue()*255) << 7
  };
  var divisor = arr.length;
  var delta = {
    red: distance.red / divisor * 2,
    green: distance.green / divisor * 2,
    blue: distance.blue / divisor * 2
  };

  var curr = {
    red: Math.floor(startColor.red()*255) << 8,
    green: Math.floor(startColor.green()*255) << 8,
    blue: Math.floor(startColor.blue()*255) << 8
  };

  for(var idx=0; idx<arr.length; idx++) {
    arr[idx] = new color.RGB((Math.floor(curr.red) >> 8) / 255.0, (Math.floor(curr.green) >> 8) / 255.0, (Math.floor(curr.blue) >> 8) / 255.0);
    curr.red += delta.red;
    curr.green += delta.green;
    curr.blue += delta.blue;
  }
};