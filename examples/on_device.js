var five = require('johnny-five');
var pixel = require('node-pixel');
var leds = require('../index');
var colors = new Array(8);
var board = new five.Board();
var strip;
var anim = function() {
  var step = 0;
  return function() {
    leds.fill_rainbow({
      arr: colors,
      initialHue: step,
      hueDelta: 10
    });
    step = (step + 1) % 360;
    leds.led_map({arr: colors, strip: strip});
    strip.show();
  };
}();

board.on('ready', () => {
  strip = new pixel.Strip({
    board: board,
    controller: 'FIRMATA',
    strips: [ { pin: 6, length: 8} ]
  });

  strip.on('ready', () => {
    setInterval(anim, 1000 / 60);
  });
});
