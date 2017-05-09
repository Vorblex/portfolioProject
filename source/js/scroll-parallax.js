let scrollParallax = function () {
  var wScroll = window.pageYOffset;
  var layersAll = document.querySelectorAll('.parallax__layer');
  var layers = Array.from(layersAll); //[].slice.call(layersAll);
  var strafe = wScroll / -125;

  layers.forEach(function (layer, i) {
    var style = layer.style;
    var transform = 'translate3d(0,' + strafe * (i - 5) + '%, 0)';
    style.transform = transform;
    style.webkitTransform = transform;
  });

};

export {scrollParallax};