let blur = (function () {
    var wrapper = document.querySelector('.blur-wrap'),
        form = document.querySelector('.blur-bg'),
        bgSection = document.querySelector('.sections-contacts__bg');

    return {
        init: function() {
            var imgWidth = bgSection.offsetWidth,
                posLeft = -wrapper.offsetLeft,
                posTop = -wrapper.offsetTop + bgSection.offsetTop,
                blurCss = form.style;

            blurCss.backgroundSize = imgWidth + 'px' + ' ' + 'auto';
            blurCss.backgroundPosition = posLeft + 'px' + ' ' + posTop + 'px';
        }
    };

}());

export {blur};

