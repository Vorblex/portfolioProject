var animateSkills = (function () {

  var checkDistance = function (scrollTop, element) {
    var
      offset = element.offset().top,
      windowMargin = Math.ceil($(window).height() /1.5),
      topBorder = offset - scrollTop - windowMargin,
      bottomEdge = element.outerHeight(true) + offset,
      bottomBorder = scrollTop + windowMargin - bottomEdge;

    return topBorder <=0 && bottomBorder <=0;
  };

  var item = $('.skills__item');

  var animationActions = {
    toSkills: function () {
      item.addClass('active');
    }
  };

  return {
    init: function () {
      $(window).on('scroll', function () {
        var scrollTop = $(window).scrollTop();

        if (checkDistance(scrollTop, $('.skills'))) {
          animationActions.toSkills();
        }
      });
    }
  };
}());

export {animateSkills};
