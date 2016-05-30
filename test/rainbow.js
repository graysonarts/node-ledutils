require('chai').should();
var expect = require('chai').expect;
var fill_rainbow = require('../index').fill_rainbow;

describe('fill_rainbow', () => {
  it('generates a gradient', () => {
    var arr = new Array(3);
    fill_rainbow({arr: arr, initialHue: 0, hueDelta: 45});
    arr[0].hex().should.equal('#ff0000');
    arr[1].hex().should.equal('#ffbf00');
    arr[2].hex().should.equal('#80ff00');
  });

  it('can fill only a portion of the array', () => {
    var arr = new Array(5);
    arr[0] = '#000000';
    arr[4] = '#000000';
    fill_rainbow({arr: arr, initialHue: 0, hueDelta: 45, start: 1, len: 3});
    arr[0].should.equal('#000000');
    arr[1].hex().should.equal('#ff0000');
    arr[2].hex().should.equal('#ffbf00');
    arr[3].hex().should.equal('#80ff00');
    arr[4].should.equal('#000000');
  });

  it('does not fail if passed not an array', () => {
    var fn = () => {
      var foo = 5;
      fill_rainbow({arr: foo, initialHue: 10, hueDelta: 10, start: 1, len: 2});
      foo.should.equal(5);
    };

    expect(fn).to.not.throw();
  });
});