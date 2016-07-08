module.exports = function (columns) {
  return function (led) {
    var column = led % columns;
    var row = Math.floor(led / columns);
    if (row % 2) /* Odd Rows */ {
      column = columns - column - 1; // Zero-based counting needs the -1
      return row * columns + column;
    }
    return led;
  };
};
