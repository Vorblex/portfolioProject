let flip = (function () {
  let _reversBlockUser = function (e) {
    $(this).toggleClass('out');
    $('.flipper-wrap').toggleClass('flip');
    e.stopPropagation();
  };

  let _authBlockShow = function () {
    $('.flipper-wrap').toggleClass('flip');
    $('#auth-flip').removeClass('out');
  };

  let _showBlockUser = function (e) {
     // if ($.contains(document.querySelector('.flipper-wrap'), e.target )) {
    // if (document.getElementById('flipper-wrap').contains(e.target)) {
        if ($('.flipper-wrap').hasClass('flip')) {
            $('.flipper-wrap').removeClass('flip');
            $('#auth-flip').removeClass('out');
        }
    // }
  };

  let atachEvent = function () {
    $('#auth-flip').on('click', _reversBlockUser);
    $('#auth-unflip').on('click', _authBlockShow);
    $('.flipper-wrap').on('click', function(e) {
      e.stopPropagation();
    });
    $('.wrapper').on('click', _showBlockUser);
    $(window).on('load', function () {
      $('.flipper').removeClass('unloaded');
    });
  };
  return {
    init: atachEvent
  };
})();

export {flip};