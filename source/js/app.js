(function () {
    // fadein welcome
    $(window).load(function () {
        $('.flipper').removeClass('unloaded');
    });
    // nav toggle
    $('#toggle').click(function() {
        $(this).toggleClass('active');
        $('#overlay').toggleClass('open');
    });
    // blog toggle
    $('.sidebar-toggle').click(function () {
        $('.sidebar').toggleClass('active');
        $('.maincontent').toggleClass('active');
    });
    // welcome flipper
    $('#auth-flip').click(function () {
       $(this).toggleClass('out');
       $('.flipper-wrap').toggleClass('flip');
    });

    $('#auth-unflip').click(function () {
        $('.flipper-wrap').toggleClass('flip');
        $('#auth-flip').removeClass('out');
    });

    $('.unflip-wrap').click(function () {
        if($('.flipper-wrap').hasClass('flip')) {
            $('.flipper-wrap').removeClass('flip');
            $('#auth-flip').removeClass('out');
        }
    });



})();

// var module = require('./module');

// module.func1();
// module.func2();

// import {square, MyClass} from './module';
//
// console.log(square(5));
// var cred = {
//   name: 'Юрий Кучма',
//   enrollmentNo: 11115078
// };
// var x = new
// MyClass(cred);
// console.log(x.getName());

$(function () {
    var Maps;
    var Routes;
    var App;
    var Utils;
    Utils = {
        settings: {
            debug: false
        },
        clickEvent: 'click',
        log: function(what) {
            if ( Utils.settings.debug && window.console ) {
                console.log(what);
            }
        }
    };

    //  Для быстрого использования
    var clickEvent = Utils.clickEvent,
        _log = Utils.log;
    Maps = {
        load: function() {
            _log( "Map: load script" );
            var script = document.createElement('script');
            script.type = 'text/javascript';
            script.src = 'https://maps.googleapis.com/maps/api/js?v=3.exp&sensor=false&' +
                'callback=initMap&key=AIzaSyBZdZjvlnPZ7mzYNUA-1NULENsPzewb0-s';
            document.body.appendChild(script);
        },
        initSettings: function() {
            _log( "Map: init settings" );
            this.map = null;
            this.marker = null;
            this.settings = {
                zoom: 14,
                center: new google.maps.LatLng(50.456714, 30.522725),
                mapTypeId: google.maps.MapTypeId.ROADMAP,
                styles: [
                    {
                        "featureType": "administrative",
                        "elementType": "labels.text.fill",
                        "stylers": [
                            {
                                "color": "#444444"
                            }
                        ]
                    },
                    {
                        "featureType": "landscape",
                        "elementType": "all",
                        "stylers": [
                            {
                                "color": "#ffffff"
                            }
                        ]
                    },
                    {
                        "featureType": "landscape",
                        "elementType": "labels",
                        "stylers": [
                            {
                                "visibility": "off"
                            }
                        ]
                    },
                    {
                        "featureType": "poi",
                        "elementType": "all",
                        "stylers": [
                            {
                                "visibility": "off"
                            }
                        ]
                    },
                    {
                        "featureType": "road.highway",
                        "elementType": "all",
                        "stylers": [
                            {
                                "visibility": "simplified"
                            }
                        ]
                    },
                    {
                        "featureType": "road.highway",
                        "elementType": "geometry",
                        "stylers": [
                            {
                                "color": "#d5d5d5"
                            }
                        ]
                    },
                    {
                        "featureType": "road.arterial",
                        "elementType": "geometry.fill",
                        "stylers": [
                            {
                                "color": "#d6d6d6"
                            }
                        ]
                    },
                    {
                        "featureType": "road.local",
                        "elementType": "geometry.fill",
                        "stylers": [
                            {
                                "color": "#d6d6d6"
                            }
                        ]
                    },
                    {
                        "featureType": "road.arterial",
                        "elementType": "labels.icon",
                        "stylers": [
                            {
                                "visibility": "off"
                            }
                        ]
                    },
                    {
                        "featureType": "transit",
                        "elementType": "all",
                        "stylers": [
                            {
                                "visibility": "off"
                            }
                        ]
                    },
                    {
                        "featureType": "water",
                        "elementType": "all",
                        "stylers": [
                            {
                                "color": "#61dac9"
                            },
                            {
                                "visibility": "on"
                            }
                        ]
                    },
                    {
                        "featureType": "water",
                        "elementType": "labels",
                        "stylers": [
                            {
                                "color": "#61dac9"
                            },
                        ]
                    }
                ],
                scrollwheel: false,
                mapTypeControl: false,
                panControl: false,
                omControl: false,
                scaleControl: false,
                streetViewControl: false
            };
        },
        init: function() {
            _log( "Map: init Map" );
            Maps.initSettings();
            Maps.map = new google.maps.Map(document.getElementById('map'),
                Maps.settings);
            Maps.marker = new google.maps.Marker({
                map: Maps.map,
                draggable: false,
                position: new google.maps.LatLng(50.456714, 30.522725)
            });
        }
    };
    //  Функция для обратного вызова карт при асинхронной загрузке
    window.initMap = function() {
        Maps.init();
    };
    Routes = {
        init: function() {
            _log( "Routes: init" );
            Maps.load();
        }
    };
    App = {
        init: function() {
            Routes.init();
        }
    };
    if ($('#map').length) {
        App.init();
    }
});