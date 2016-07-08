require('chai').should();
var alternate = require('../index').alternate;

describe('alternate', () => {
  it('should alternate directions every row', () => {
    var m = alternate(5);
    m(0).should.be.equal(0);
    m(1).should.be.equal(1);
    m(2).should.be.equal(2);
    m(3).should.be.equal(3);
    m(4).should.be.equal(4);
    m(5).should.be.equal(9);
    m(6).should.be.equal(8);
    m(7).should.be.equal(7);
    m(8).should.be.equal(6);
    m(9).should.be.equal(5);
    m(10).should.be.equal(10);
  });
});
