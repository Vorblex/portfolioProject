// Parallax mouse
let mouseParallax = function () {
  var parallaxContainer = document.getElementById('parallaxM');
  var layers = parallaxContainer.children;
  var moveLayers = function (e) {
    var initialX = (window.innerWidth/2) - e.pageX,
      initialY = (window.innerHeight/2) - e.pageY;
    [].slice.call(layers).forEach(function(layer, i) {
      var divider = i / 100,
        positionX = initialX * divider,
        positionY = initialY * divider,
        layerStyle = layer.style,
        bottomPosition = (window.innerHeight / 2) * divider,
        transformString = 'translate3d(' + positionX +'px, '+ positionY +'px, 0)';
      layerStyle.transform = transformString;
      layerStyle.bottom = '-' + bottomPosition + 'px';
    });
  };

  window.addEventListener('mousemove', moveLayers);
};

export {mouseParallax};