var rainbow = require('./lib/rainbow');
var gradient = require('./lib/gradient');
var ledMap = require('./lib/led_map');
var solid = require('./lib/solid');
var alternate = require('./lib/alternate');
var flip = require('./lib/flip');

module.exports = {
  fill_rainbow: rainbow,
  fill_gradient: gradient,
  fill_solid: solid,
  led_map: ledMap,
  alternate: alternate,
  flip: flip,
  ledMap: ledMap,
  fillSolid: solid,
  fillGradient: gradient,
  fillRainbow: rainbow
};
