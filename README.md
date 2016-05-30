# ledutils

A small collection of utilities to make it easier to work with node-pixel, including
mapping an array of onecolor objects to the strip, color range generation, gradient
generation (soon)

## usage

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
