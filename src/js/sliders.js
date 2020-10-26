import { tns } from '../../node_modules/tiny-slider/src/tiny-slider'

let currentWidth = document.documentElement.clientWidth

var sliderMain = tns({
  center: true,
  container: '.main-slider',
  center: true,
  nav: false,
  controlsPosition: 'bottom',
  controlsContainer: '.slider-controls',
  slideBy: 1,
  arrowKeys: true,
  items: 1,
  autowidth: true,
})

var sliderFeedback = tns({
  gutter: 0,
  container: '.feedback-slider',
  center: true,
  edgePadding: 0,
  nav: false,
  controlsPosition: 'bottom',
  controlsContainer: '.feedback-slider-controls',
  autowidth: true,
  arrowKeys: true,
  mouseDrag: true,
})

var sliderProjects = tns({
  lazyload: true,
  container: '.projects-slider',
  autoplay: true,
  speed: 600,
  slideBy: 3,
  gutter: 0,
  edgePadding: 0,
  controls: false,
  gutter: 21,
  arrowKeys: false,
  autoplayButton: '.button-autoplay',
  navPosition: 'bottom',
  items: 3,
  responsive: {
    1440: {
      items: 3,
      autoplayHoverPause: true,
      fixedWidth: 369,
      center: true,
    },
    700: {
      items: 2,
      autoplayHoverPause: false,
      fixedWidth: false,
      autowidth: true,
    },
    250: {
      items: 1,
    },
  },
})
