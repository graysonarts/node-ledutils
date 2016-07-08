require('chai').should();
var fillGradient = require('../index').fillGradient;
var fillSolid = require('../index').fillSolid;

describe('fillGradient', () => {
  it('generates a gradient', () => {
    var arr = new Array(5);
    fillSolid({
      arr: arr
    });
    fillGradient({
      arr: arr,
      startColor: '#ff0000',
      endColor: '#00ff00'
    });

    arr[0].hex().should.equal('#ff0000');
    arr[1].hex().should.equal('#cc3300');
    arr[2].hex().should.equal('#996600');
    arr[3].hex().should.equal('#669900');
    arr[4].hex().should.equal('#33cc00');
  });
});
