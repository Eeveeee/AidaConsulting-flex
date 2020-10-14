import { tns } from '../../node_modules/tiny-slider/src/tiny-slider'
var sliderMain = tns({
  gutter: 0,
  container: '.main-slider',
  center: true,
  edgePadding: 0,
  nav: false,
  controlsPosition: 'bottom',
  controlsContainer: '.slider-controls',
  gutter: 50,
  fixedWidth: 300,
  arrowKeys: true,
  responsive: {
    500: {
      items: 1,
      fixedWidth: 1170,
      mouseDrag: true,
      edgePadding: 10,
    },
    480: {
      fixedWidth: 400,
    },
  },
})
