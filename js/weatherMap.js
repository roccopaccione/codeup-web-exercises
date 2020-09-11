(function(){
"use strict"

$(document).ready(function(){
    $.get("http://api.openweathermap.org/data/2.5/forecast", {
        APPID: OPENWEATHER_TOKEN,
        q:     "San Antonio, US",
        units: "imperial"
    }).done(function(data) {
        console.log(data);
        for(var i = 0; i < data.list.length; i++){
            if (data.list[i].dt_txt.includes('00:00:00')){
                $('#openWeather').append(
                    '<h4 class="col">' + 'City Name: ' + data.city.name +'</h4>' +
                    '<p class="col">'  + 'Description: ' + data.list[i].weather[0].description  +'</p>' +
                    '<p class="col">'  + 'Humidity: ' + data.list[i].main.humidity  +'</p>' +
                    '<p class="col">'  +  'Wind Direction: ' + data.list[i].wind.deg + '</p>' +
                    '<p class="col">'  + 'Wind Speed: ' + data.list[i].wind.speed +'</p>' +
                    '<p class="col">' + 'Pressure: ' + data.list[i].main.pressure  +'</p>' + '<hr>'
                )
            }else{
                console.log(data)
            }

        }

    })
})







})();