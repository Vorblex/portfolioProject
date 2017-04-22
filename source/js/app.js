(function () {
  'use strict';

    // ymaps.ready(init);
    // var myMap;
    //
    // function init(){
    //     myMap = new ymaps.Map("map", {
    //         center: [50.45457027, 30.52303845],
    //         zoom: 17,
    //         controls: ["zoomControl"]
    //     });
    //     myMap.behaviors.disable('scrollZoom');
    // }


    mapboxgl.accessToken = 'pk.eyJ1Ijoidm9yYmxleCIsImEiOiJjajF0bWE0dDQwMTM1MndrbTJoYWljY2RyIn0.Nwh76e0A45uCbMtTGVsgxw';
    var map = new mapboxgl.Map({
        container: 'map',
        style: 'mapbox://styles/mapbox/streets-v9',
        center: [-74.50, 40], // starting position
        zoom: 9, // starting zoom
        scrollZoom: false
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
