# ledutils

A small collection of utilities to make it easier to work with
[node-pixel](https://github.com/ajfisher/node-pixel), including mapping an array of
onecolor objects to the strip, color range generation, gradient generation (soon)

## examples

See the examples directory.

![Example Rainbow wipe with ledutils](http://share.gifyoutube.com/qxmV23.gif)

## usage

### fill_solid

fill_solid fills the entire array with a specific color

### fill_rainbow

fill_rainbow generates a rainbow of color by manipulating the hue with a delta
degree between them.

```javascript

var leds = require('ledutils');
var colors = new Array(5);
leds.fill_rainbow({
  arr: colors,
  initialHue: 0,
  hueDelta: 45
});
```

The previous code will generate the following colors in the array:

![color ff0000](http://placehold.it/35/ff0000/000000)
![color ffbf00](http://placehold.it/35/ffbf00/000000)
![color 80ff00](http://placehold.it/35/80ff00/000000)
![color 00ff40](http://placehold.it/35/00ff40/000000)
![color 00ffff](http://placehold.it/35/00ffff/000000)

### fill_gradient

fill_gradient fills the entire array with a gradient [startColor,endColor)

```javascript
var leds = require('ledutils');
var colors = new Array(5);
leds.fill_gradient({
  arr: colors,
  startColor: 'blue',
  endColor: 'orange'
});
```

The previous code will generate the following colors in the array:

![color 0000ff](http://placehold.it/35/0000ff/000000)
![color 3321cc](http://placehold.it/35/3321cc/000000)
![color 664299](http://placehold.it/35/664299/000000)
![color 996366](http://placehold.it/35/996366/000000)
![color cc8433](http://placehold.it/35/cc8433/000000)

### led_map

led_map takes an array of colors and maps it into a node-pixel strip.  It can be
offset so that the strip can be represented by multiple arrays that you then map
into the strip.

```javascript

// Assume a node-pixel strip exists
var leds = require('ledutils');
var colors = new Array(5);
leds.fill_rainbow({arr: colors, initialHue: 0, hueDelta: 45);
leds.led_map({arr: colors, strip: strip, offset: 3});
```

The above example will display the rainbow in colors starting on led 3 of the strip.
If the strip is less then 8 leds, the rainbow will not be complete.
