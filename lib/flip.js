module.exports = function (totalPixels) {
  return function (led) {
    return totalPixels - 1 - led;
  };
};
