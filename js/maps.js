console.log(secret);

mapboxgl.accessToken = MAPBOX_TOKEN;
    var map = new mapboxgl.Map({
        container: 'map',
        style: 'mapbox://styles/mapbox/satellite-streets-v11', // stylesheet location
        center: [-98.489615, 29.426827], // starting position [lng, lat]
        zoom: 20 // starting zoom
});

var jeddah = new mapboxgl.Marker().setLngLat([39.0829, 21.7340]).addTo(map);
