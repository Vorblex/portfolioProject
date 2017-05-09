let blogToggle = (function () {

    let _toggle = function () {
        $('.sidebar').toggleClass('active');
        $('.maincontent').toggleClass('active');
    };

   let attachEvent = function () {
       $('.sidebar-toggle').on('click', _toggle)
   };

   return {
        init: attachEvent
   };
}());

export {blogToggle};