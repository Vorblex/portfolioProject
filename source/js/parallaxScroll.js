var parallaxScroll = (function() {

  var initModule = function (wScroll) {
    _event();
    layers.forEach(function (layer, i) {

      var style = layer.style;
      var transform = 'translate3d(0,'+ strafe * (i - 5) + '%' +', 0)';
      style.transform = transform;
      style.webkitTransform = transform;
    });
  };

  var _event = window.onscroll(function() {
    var wScroll = window.pageYOffset;
    var layersAll = document.querySelectorAll('.parallax__layer');
    var layers = [].slice.call(layersAll);
    var strafe = wScroll / -125;
  });



  return {
    init: initModule
  };

}());

parallaxScroll.init();


// (function () {
//
//     window.onscroll = function () {
//         var wScroll = window.pageYOffset;
//         var layersAll = document.querySelectorAll('.parallax__layer');
//         var layers = Array.from(layersAll); //[].slice.call(layersAll);
//         var strafe = wScroll / -125;
//
//
//         function Scroll(wScroll) {
//
//             layers.forEach(function (layer, i) {
//                 var style = layer.style;
//                 var transform = 'translate3d(0,'+ strafe * (i - 5) + '%' +', 0)';
//                 style.transform = transform;
//                 style.webkitTransform = transform;
//             });
//
//         }
//
//         Scroll();
//     };
//
// }());