var color = require('onecolor');

module.exports = function(arr, initialHue, deltaHue, start, len) {
  if (len === undefined) {
    len = arr.length;
  }
  if (start === undefined) {
    start = 0;
  }

  deltaStep = deltaHue / 360.0;

  var curr = new color.HSV(initialHue, 255, 240);
  for(var i = start; i < start + len; i++) {
    arr[i] = curr;
    curr = curr.hue(deltaStep, true);
  }
};