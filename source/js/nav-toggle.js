
let navToggle = (function () {

  let _toggle = function () {
    $(this).toggleClass('active');
    $('#overlay').toggleClass('open');
  };

  let attachEvent = function () {
    $('#toggle').on('click', _toggle);
  };

  return {
    init: attachEvent
  };
}());

export {navToggle};