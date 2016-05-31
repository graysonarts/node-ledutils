require('chai').should();
var expect = require('chai').expect;
var fill_gradient = require('../index').fill_gradient;
var fill_solid = require('../index').fill_solid;

describe('fill_gradient', () => {
  it('generates a gradient', () => {
    var arr = new Array(5);
    fill_solid({
      arr: arr
    });
    fill_gradient({
      arr: arr,
      startColor: "#ff0000",
      endColor: "#00ff00"
    });

    arr[0].hex().should.equal('#ff0000');
    arr[1].hex().should.equal('#cc3300');
    arr[2].hex().should.equal('#996600');
    arr[3].hex().should.equal('#669900');
    arr[4].hex().should.equal('#33cc00');
  });

  it('can fill only a portion of the array', () => {
    var arr = new Array(5);
  });
});