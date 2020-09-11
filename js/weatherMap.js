(function(){
"use strict"
    mapboxgl.accessToken = MAPBOX_TOKEN;
    var map = new mapboxgl.Map({
        container: 'map',
        style: 'mapbox://styles/mapbox/streets-v11', // stylesheet location
        center: [-98.493, 29.42412], // starting position [lng, lat]
        zoom: 9 // starting zoom
    });

$(document).ready(function(){
    $.get("http://api.openweathermap.org/data/2.5/forecast", {
        APPID: OPENWEATHER_TOKEN,
        q: "San Antonio, US",
        units: "imperial"
    }).done(function(data) {
        console.log(data);
        for(var i = 0; i < data.list.length; i++){
            if (data.list[i].dt_txt.includes('00:00:00')){
                $('#openWeather').append(
                    '<h4 class="col-3">' + 'City Name: ' + data.city.name +'</h4>' +
                    '<img src="http://openweathermap.org/img/w/' + data.list[i].weather[0].icon + '.png">' +
                    '<p class="col-3">'  + 'Description: ' + data.list[i].weather[0].description  +'</p>' +
                    '<p class="col-3">'  + 'Humidity: ' + data.list[i].main.humidity  +'</p>' +
                    '<p class="col-3">'  +  'Wind Direction: ' + data.list[i].wind.deg + '</p>' +
                    '<p class="col-6">'  + 'Wind Speed: ' + data.list[i].wind.speed +'</p>' +
                    '<p class="col-6">' + 'Pressure: ' + data.list[i].main.pressure  +'</p>' + '<hr>'
                )
            }else{
                console.log(data)
            }
        }
    })
})




})();