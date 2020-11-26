(function(){
"use strict"
    mapboxgl.accessToken = MAPBOX_TOKEN;
    let map = new mapboxgl.Map({
        container: 'map',
        style: 'mapbox://styles/mapbox/streets-v11', // stylesheet location
        center: [-98.493, 29.42412], // starting position [lng, lat]
        zoom: 9 // starting zoom
    });
    let marker = new mapboxgl.Marker({
        draggable: true
    })
        .setLngLat([-98.493, 29.42412])
        .addTo(map)

    function onDragEnd() {
        let lngLat = marker.getLngLat();
        console.log(lngLat.lng + " " + lngLat.lat);
    }
    marker.on('dragend', onDragEnd);

$(document).ready(function(){

    let fiveDayForecast = function(){


        let lngLat = onDragEnd(marker.getLngLat());

        $.get("api.openweathermap.org/data/2.5/weather?lat=" + lngLat.lat + "&lon=" + lngLat.lng + "&appid=" + OPENWEATHER_TOKEN, {
            APPID: OPENWEATHER_TOKEN,
            q: "San Antonio, US",
            units: "imperial"
        }).done(function(data) {
            console.log(data);
            for(var i = 0; i < data.list.length; i++){
                if (data.list[i].dt_txt.includes('00:00:00')){
                    $('#openWeather').append(
                        '<div class="card d-flex">'+
                        '<div class="col">' +
                        '<p>' + data.list[i].dt_txt + '</p>' +
                        '<h4 class="mt-2">' + data.city.name +'</h4>' +
                        '<img class="img " src="http://openweathermap.org/img/w/' + data.list[i].weather[0].icon + '.png" alt="Weather Map">' +
                        '<p class="text-align-center">'  + 'Current Temp: ' + data.list[i].main.temp+'&#8457' +'</p>' +
                        '<p class="text-align-center">'  + 'High: ' + data.list[i].main.temp_max+'&#8457' +'</p>' +
                        '<p class="text-align-center">'  + 'Low:' + data.list[i].main.temp_min+'&#8457'+'</p>' +
                        '<p class="text-align-center">'  + 'Humidity: ' + data.list[i].main.humidity  +'</p>' +
                        '<p class="text-align-center">'  +  'Wind Direction: ' + data.list[i].wind.deg + '</p>' +
                        '<p class="text-align-center">'  + 'Wind Speed: ' + data.list[i].wind.speed +'</p>' +
                        '</div>' +
                        '</div>'
                    )
                }else{
                    console.log(data)
                }
            }
        })
        $('')
    }
    console.log(fiveDayForecast())
})


})();