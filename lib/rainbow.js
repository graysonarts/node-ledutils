var color = require('onecolor');

module.exports = function(opts) { // arr, initialHue, deltaHue, start, len) {
  var arr = opts.arr;
  if (arr === undefined) {
    throw 'you must specify a color array';
  }

  var len = opts.len || arr.length;
  var start = opts.start || 0;
  var deltaStep = (opts.hueDelta || 45) / 360.0;
  var initialHue = opts.initialHue / 360.0 || 0;

  var curr = new color.HSV(initialHue, 255, 240);
  for(var i = start; i < start + len; i++) {
    arr[i] = curr;
    curr = curr.hue(deltaStep, true);
  }
};