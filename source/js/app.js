import {scrollParallax} from './scroll-parallax';
import {mouseParallax} from './mouse-parallax';
import {navToggle} from './nav-toggle';
import {scrollMenu} from './blog-scroll';
import {blogToggle} from './blog-toggle';
import {animateSkills} from './skills';
import {preloader} from './preloader';
import {sliderFunc} from './slider';
import {flip} from './flip';
import {blur} from './blur';
import {map} from './map';


preloader.init();

if ($('.works').length) {
  window.addEventListener('load', sliderFunc.init);
}

if ($('#toggle').length) {
  navToggle.init();
}

if ($('.sidebar').length) {
  scrollMenu.init();
  blogToggle.init();
}

if ($('.skills').length) {
  window.addEventListener('load', animateSkills.init);
}

if ($('.flipper-wrap').length) {
  flip.init();
  window.addEventListener('load', mouseParallax);
}

window.addEventListener('scroll', scrollParallax);

if ($('.blur-wrap').length) {
  blur.init();

  window.onresize = function () {
    blur.init();
  };
}

if ($('#map').length) {
  map();
}






