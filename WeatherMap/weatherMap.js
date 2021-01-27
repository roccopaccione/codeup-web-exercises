(function(){
"use strict"
$(document).ready(function() {
    mapboxgl.accessToken = MAPBOX_TOKEN;
    let coordinates = document.getElementById('coordinates');
    let map = new mapboxgl.Map({
        container: 'map',
        style: 'mapbox://styles/mapbox/streets-v11',
        center: [-98.4916, 29.4252],
        zoom: 7
    });

    let marker = new mapboxgl.Marker({
        draggable: true
    })
        .setLngLat([-98.4916, 29.4252])
        .addTo(map);

    function onDragEnd() {
        let lngLat = marker.getLngLat();
        console.log(lngLat);
        coordinates.style.display = 'block';
        coordinates.innerHTML =
            'Longitude: ' + lngLat.lng + '<br />Latitude: ' + lngLat.lat;
    }

    marker.on('dragend', onDragEnd);

    $.ajax("http://api.openweathermap.org/data/2.5/weather", {
        data: {
            APPID: OPENWEATHER_TOKEN,
            q: onDragEnd()
        }
    });
    $.get("http://api.openweathermap.org/data/2.5/weather", {
        APPID:OPENWEATHER_TOKEN,
        q: onDragEnd()
    }).done(function (data) {
        console.log(data);
    });
});


})();