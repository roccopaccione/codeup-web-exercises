(function(){
"use strict"
$(document).ready(function() {
    let longitude = -98.48527;
    let latitude = 29.423017;

    mapboxgl.accessToken = MAPBOX_TOKEN;

    const map = new mapboxgl.Map({
        container: 'map',
        style: 'mapbox://styles/mapbox/streets-v11',
        center: [longitude, latitude],
        zoom: 10.8,

    });

    const marker = new mapboxgl.Marker({
        draggable: true
    })
        .setLngLat([longitude, latitude])
        .addTo(map);


    let geocoder = new MapboxGeocoder({
        accessToken: MAPBOX_TOKEN,
        marker: {
            center: [longitude, latitude],
            draggable: true
        },
        mapboxgl: mapboxgl
    });
    //
    map.addControl(geocoder);


    let weatherForecast = ''
    const renderForecast = function (data) {
        console.log(data)
        if (weatherForecast === '') {
            for (let i = 0; i < data.daily.length; i++) {
                weatherForecast += `<div class="col card text-center"><img src="http://openweathermap.org/img/w/${data.daily[i].weather[0].icon}.png" alt="weatherIMG"><p>${data.daily[i].weather[0].description}</p>
                        <p>Humidity: ${data.daily[i].humidity}%</p>
                        <p>Wind Speed: ${data.daily[i].wind_speed} MPH</p>
                        <p>Temp: ${data.daily[i].temp.day}°</p>
                        <p>Low: ${data.daily[i].temp.min}°</p>
                        <p>High: ${data.daily[i].temp.max}°</p></div>`
            }
            $('#forecast').append(weatherForecast)
        } else {
            $('#forecast').replaceWith('<div class="col card text-center" id="forecastDays"></div>')
            weatherForecast = ''
            for (let j = 0; j < data.daily.length; j++) {
                weatherForecast += `
                        <div class="card">
                            <img src="http://openweathermap.org/img/w/${data.daily[j].weather[0].icon}.png" alt="weatherIMG">
                            <p>${data.daily[j].weather[0].description}</p>
                            <p>Humidity: ${data.daily[j].humidity}%</p>
                            <p>Wind Speed: ${data.daily[j].wind_speed} MPH</p>
                            <p>Temp: ${data.daily[j].temp.day}°</p>
                            <p>Low: ${data.daily[j].temp.min}°</p>
                            <p>High: ${data.daily[j].temp.max}°</p>
                        </div>`
            }
            $('#forecast').append(weatherForecast)

        }
    }


    $.get("http://api.openweathermap.org/data/2.5/onecall", {
        APPID: OPENWEATHER_TOKEN,
        lat: latitude,
        lon: longitude,
        units: "imperial"
    }).done(function (data) {
        $('#location').html(`${data.city}`)
        renderForecast(data)
    });

    function onDragEnd() {
        let lngLat = marker.getLngLat();

        longitude = lngLat.lng;
        latitude = lngLat.lat;

        $.get("http://api.openweathermap.org/data/2.5/onecall", {
            APPID: OPENWEATHER_TOKEN,
            lat: latitude,
            lon: longitude,
            units: "imperial"
        }).done(function (data) {
            // $('#location').html(data.city['name'])
            renderForecast(data)
        });
    }

    marker.on('dragend', onDragEnd);
})
    //builds proper format of location string based on mapbox data. city,state/province,country
    function parseReverseGeo(geocoder) {
        var region, countryName, placeName, returnStr;
        if(geocoder.context){
            $.each(geocoder.context, function(i, v){
                if(v.id.indexOf('region') >= 0) {
                    region = v.text;
                }
                if(v.id.indexOf('country') >= 0) {
                    countryName = v.text;
                }
            });
        }
        if(region && countryName) {
            returnStr = region + ", " + countryName;
        } else {
            returnStr = geocoder.place_name;
        }
        console.log(returnStr);
        return returnStr;
    }

})();
