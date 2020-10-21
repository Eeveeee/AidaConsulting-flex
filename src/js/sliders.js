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
  fixedWidth: 250,
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
var sliderFeedback = tns({
  gutter: 0,
  container: '.feedback-slider',
  center: true,
  edgePadding: 0,
  nav: false,
  controlsPosition: 'bottom',
  controlsContainer: '.feedback-slider-controls',
  gutter: 400,
  fixedWidth: 250,
  arrowKeys: true,
  responsive: {
    1000: {
      items: 1,
      fixedWidth: 750,
      mouseDrag: true,
    },
    768: {
      fixedWidth: 550,
    },
  },
})

var sliderProjects = tns({
  container: '.projects-slider',
  autoplay: true,
  speed: 600,
  slideBy: 3,
  gutter: 0,
  edgePadding: 0,
  nav: true,
  controls: false,
  gutter: 21,
  fixedWidth: 250,
  arrowKeys: false,
  items: 3,
  rewind: true,
  autoplayButton: '.button-autoplay',
  navContainer: '.projects-pages',
  autoplayHoverPause: true,
  responsive: {
    1000: {
      fixedWidth: 369,
    },
    768: {
      fixedWidth: 550,
    },
  },
})
