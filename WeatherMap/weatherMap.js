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

    $.get("http://api.openweathermap.org/data/2.5/forecast", {
        APPID: OPENWEATHER_TOKEN,
        lat: marker.getLngLat().lat,
        lon: marker.getLngLat().lng,
        units: "imperial"
    }).done(function (data) {
        console.log('5 day forecast', data);
    });

})
})();
