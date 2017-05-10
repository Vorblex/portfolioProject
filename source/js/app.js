import {scrollParallax} from './scroll-parallax';
import {mouseParallax} from './mouse-parallax';
import {navToggle} from './nav-toggle';
import {blogToggle} from './blog-toggle';
import {flip} from './flip';
import {blur} from './blur';
import {map} from './map';

blogToggle.init();

window.addEventListener('scroll', scrollParallax);

if ($('#toggle').length) {
  navToggle.init();
}

if ($('.flipper-wrap').length) {
  flip.init();
  window.addEventListener('load', mouseParallax);
}

if ($('.blur-wrap').length) {
  blur.init();

  window.onresize = function () {
    blur.init();
  };
}

if ($('#map').length) {
  map();
}


