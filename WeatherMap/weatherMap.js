(function(){
"use strict"
    mapboxgl.accessToken = MAPBOX_TOKEN;
    let coordinates = document.getElementById('coordinates');
    let map = new mapboxgl.Map({
        container: 'map',
        style: 'mapbox://styles/mapbox/streets-v11',
        center: [0, 0],
        zoom: 2
    });

    let marker = new mapboxgl.Marker({
        draggable: true
    })
        .setLngLat([0, 0])
        .addTo(map);

    function onDragEnd() {
        let lngLat = marker.getLngLat();
        coordinates.style.display = 'block';
        coordinates.innerHTML =
            'Longitude: ' + lngLat.lng + '<br />Latitude: ' + lngLat.lat;
    }

    marker.on('dragend', onDragEnd);

$(document).ready(function() {
    $.ajax({
        url: "http://api.openweathermap.org/data/2.5/weather",
        type: "GET",
        data: {
            APPID: OPENWEATHER_TOKEN,
            q: marker
        }
    });

    $.ajax("http://api.openweathermap.org/data/2.5/weather", {
        data: {
            APPID: OPENWEATHER_TOKEN,
            q: marker
        }
    });

    $.get("http://api.openweathermap.org/data/2.5/weather?APPID=" + OPENWEATHER_TOKEN + "&q=" + marker + ",+US");

    $.get("http://api.openweathermap.org/data/2.5/weather", {
        APPID:OPENWEATHER_TOKEN,
        q: marker
    }).done(function (data) {
        console.log(data);
    });
});


})();