var scrollMenu = (function () {
  var $news = $('.articles__item'),
    $item = $('.sidebar-menu__item'),
    $wrapMenu = $('.sidebar'),
    isPositionArticle = [],
    scroll = window.pageYOffset,
    offsetHeight = scroll / 4,

    positionArticle = function (element) {
      var len = element.length;
      for (let i = 0; i < len; i++) {
        isPositionArticle[i] = {};
        isPositionArticle[i].top = element
                        .eq(i)
                        .offset()
                        .top - offsetHeight;
        isPositionArticle[i].bottom = isPositionArticle[i].top + element
                        .eq(i)
                        .innerHeight();
      }

    },

    scrollPageFixMenu = function (e) {
      let scroll = window.pageYOffset;
      if (scroll < $news.offset().top) {
        $wrapMenu.removeClass('fixed');
      } else {
        $wrapMenu.addClass('fixed');
      }
    },

    scrollPageActiveItem = function (e) {
      let scroll = window.pageYOffset;
      for (let i = 0; i < isPositionArticle.length; i++) {
        if (scroll >= isPositionArticle[i].top && scroll <= isPositionArticle[i].bottom) {
          $item
                        .eq(i)
                        .addClass('sidebar-menu__item_active')
                        .siblings()
                        .removeClass('sidebar-menu__item_active');
        }
      }
    },

    clickOnMenu = function (e) {
      e.preventDefault();
      var index = $(e.target).index();
      var sectionOffset = $news
                .eq(index)
                .offset()
                .top;
      $(document).off('scroll', scrollPageActiveItem);
      $('body, html').animate({
        'scrollTop': sectionOffset
      }, function () {
        $(e.target)
                    .addClass('menu__item--active')
                    .siblings()
                    .removeClass('menu__item--active');
        $(document).on('scroll', scrollPageActiveItem);
      });
    },

    addListener = function () {
      $('.sidebar-menu').on('click', clickOnMenu);

      $(document).on('scroll', scrollPageActiveItem);
      $(document).on('scroll', scrollPageFixMenu);

      $(window).on('load', function (e) {
        positionArticle($news);
      });

      $(window).on('resize', function (e) {
        positionArticle($news);
      });
    };

  return {
    init: addListener
  };
})();

export {scrollMenu};
