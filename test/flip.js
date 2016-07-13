require('chai').should();
var flip = require('../index').flip;

describe('flip', () => {
  it('should flip the location', () => {
    var m = flip(5);
    m(0).should.be.equal(4);
    m(1).should.be.equal(3);
    m(2).should.be.equal(2);
    m(3).should.be.equal(1);
    m(4).should.be.equal(0);
  });
});
