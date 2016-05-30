require('chai').should();
var led_map = require('../index').led_map;
var fill_rainbow = require('../index').fill_rainbow;
var color = require('onecolor');

function FakeStrip() {
  this.pixels = new Array(this.stripLength());
  for(var i=0; i<this.pixels.length; i++) {
    this.pixels[i] = '#000000';
  }
};
FakeStrip.prototype.stripLength = function() { return 5; };
FakeStrip.prototype.pixel = function(pixelIndex) {
  var self = this;
  return {
    'color': function (value) {
      self.pixels[ pixelIndex ] = value;
    }
  };
};

describe('led_map', () => {
  it('should convert color objects, and write them to a node-pixel object', () => {
    var fakeStrip = new FakeStrip();
    var colors = new Array(3);
    fill_rainbow(colors, 0, 45);
    led_map(colors, fakeStrip);
    fakeStrip.pixels[0].should.equal('#ff0000');
    fakeStrip.pixels[1].should.equal('#ffbf00');
    fakeStrip.pixels[2].should.equal('#80ff00');
  });

  it('should be able to set colors in the middle of the strip', () => {
    var fakeStrip = new FakeStrip();
    var colors = new Array(3);
    fill_rainbow(colors, 0, 45);
    led_map(colors, fakeStrip, 1);
    fakeStrip.pixels[0].should.equal('#000000');
    fakeStrip.pixels[1].should.equal('#ff0000');
    fakeStrip.pixels[2].should.equal('#ffbf00');
    fakeStrip.pixels[3].should.equal('#80ff00');
  });
});