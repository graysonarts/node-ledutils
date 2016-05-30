# ledutils

A small collection of utilities to make it easier to work with node-pixel, including
mapping an array of onecolor objects to the strip, color range generation, gradient
generation (soon)

## usage

### fill_rainbow

```javascript

var leds = require('ledutils');
var colors = new Array(5);
leds.fill_rainbow(colors, 0, 45);
```

The previous code will generate the following colors in the array:

![color ff0000](http://placehold.it/35/ff0000/000000)
![color ffbf00](http://placehold.it/35/ffbf00/000000)
![color 80ff00](http://placehold.it/35/80ff00/000000)
![color 00ff40](http://placehold.it/35/00ff40/000000)
![color 00ffff](http://placehold.it/35/00ffff/000000)
