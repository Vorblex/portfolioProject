let preloader = (function () {
  var percentsTotal = 0,
    preloader = $('.preloader');

  var imgPath = $('*').map(function(ndx, element) {
    var background = $(element).css('background-image'),
      img = $(element).is('img'),
      path = '';

    if (background != 'none') {
      path = background;
    }

    if (img) {
      path = $(element).attr('src');
    }

    if (path) return path;

  });

  var setPetcents = function(total, current) {
    var percents = Math.ceil(current / total * 100);

    $('.preloader__percents').text(percents + '%');

    if (percents >= 100) {
      preloader.fadeOut();
    }
  };

  var loadImages = function (images) {
    if (!images.length) {
      preloader.fadeOut();
    }

    images.forEach(function(img, i, images) {
      var fakeImage = $('<img>', {
        'attr' : {
          'src' : 'img'
        }
      });

      fakeImage.on('load error', function() {
        percentsTotal++;
        setPetcents(images.length, percentsTotal);
      });
    });
  };

  return {
    init: function () {
      var imgs = imgPath.toArray();

      loadImages(imgs);
    }
  };

}());

export {preloader};

