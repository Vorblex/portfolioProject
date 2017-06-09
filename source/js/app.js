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
  animateSkills.init();
}

if ($('.flipper-wrap').length) {
  flip.init();
}

if ($('.parallaxM').length) {
  window.addEventListener('load', mouseParallax);
}


if ($('.parallax').length) {
  window.addEventListener('scroll', scrollParallax);
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



var pageScroll = (function () {
    var section = $('.section'),
        sectionWorks = $('.works'),
        offset = section.height(),
        body = $('body'),
        toBottom = $('.nav-arrowlink'),
        toTop = $('.nav-arrowlink_bottom');

    function topArrow() {
        if(sectionWorks.length) {
            body.animate({scrollTop: offset + 178}, 800);
        }
        else {
            body.animate({scrollTop: offset}, 800);
        }

    }

    function bottomArrow() {
        body.animate({scrollTop: 0}, 800);
    }

    var attachEvent = function () {
        toBottom.on('click', topArrow);
        toTop.on('click', bottomArrow);
    };
    // attachEvent();
    return {
        init: attachEvent
    };
}());

window.addEventListener('load', pageScroll.init);
