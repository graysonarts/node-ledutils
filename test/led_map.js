require('chai').should();
var ledMap = require('../index').ledMap;
var fillRainbow = require('../index').fillRainbow;

function FakeStrip () {
  this.pixels = new Array(this.stripLength());
  for (var i = 0; i < this.pixels.length; i++) {
    this.pixels[i] = '#000000';
  }
}

FakeStrip.prototype.stripLength = function () { return 5; };
FakeStrip.prototype.pixel = function (pixelIndex) {
  var self = this;
  return {
    'color': function (value) {
      self.pixels[ pixelIndex ] = value;
    }
  };
};

describe('ledMap', () => {
  it('should convert color objects, and write them to a node-pixel object', () => {
    var fakeStrip = new FakeStrip();
    var colors = new Array(3);
    fillRainbow({arr: colors, initialHue: 0, hueDelta: 45});
    ledMap({arr: colors, strip: fakeStrip});
    fakeStrip.pixels[0].should.equal('#ff0000');
    fakeStrip.pixels[1].should.equal('#ffbf00');
    fakeStrip.pixels[2].should.equal('#80ff00');
  });

  it('should be able to set colors in the middle of the strip', () => {
    var fakeStrip = new FakeStrip();
    var colors = new Array(3);
    fillRainbow({arr: colors, initialHue: 0, hueDelta: 45});
    ledMap({arr: colors, strip: fakeStrip, offset: 1});
    fakeStrip.pixels[0].should.equal('#000000');
    fakeStrip.pixels[1].should.equal('#ff0000');
    fakeStrip.pixels[2].should.equal('#ffbf00');
    fakeStrip.pixels[3].should.equal('#80ff00');
  });
});
