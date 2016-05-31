var rainbow = require('./lib/rainbow');
var gradient = require('./lib/gradient');
var led_map = require('./lib/led_map');
var solid = require('./lib/solid');

module.exports = {
  fill_rainbow: rainbow,
  fill_gradient: gradient,
  fill_solid: solid,
  led_map: led_map
};
