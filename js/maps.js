console.log(secret);
//
// mapboxgl.accessToken = MAPBOX_TOKEN;
//     var map = new mapboxgl.Map({
//         container: 'map',
//         style: 'mapbox://styles/mapbox/satellite-streets-v11', // stylesheet location
//         center: [-98.489615, 29.426827], // starting position [lng, lat]
//         zoom: 20 // starting zoom
// });

mapboxgl.accessToken = MAPBOX_TOKEN;
var map = new mapboxgl.Map({
    container: 'map',
    style: 'mapbox://styles/mapbox/streets-v9',
    center: [-97.74956, 30.2488412],
    zoom: 11.15

});

//favorite Restaurants Icons/markers
map.on('load', function() {
    map.addSource('places', {
        'type': 'geojson',
        'data': {
            'type': 'FeatureCollection',
            'features': [
                {
                    'type': 'Feature',
                    'properties': {
                        'description':
                            '<strong>Home Slice Pizza</strong><p><br> 1415 S Congress Ave, Austin, TX 78704<br><a href="https://homeslicepizza.com/" target="_blank" title="Opens in a new window"></a> The best Sicilian style pizza I have ever had in Austin.</p>',
                        'icon': 'restaurant'
                    },
                    'geometry': {
                        'type': 'Point',
                        'coordinates': [-97.749468, 30.249202]
                    }
                },
                {
                    'type': 'Feature',
                    'properties': {
                        'description':
                            '<strong>Sandy\'s Hamburgers</strong><p> 603 Barton Springs Rd, Austin, TX 78704 <br><a href="https://www.facebook.com/pages/Sandys-Hamburgers/120669561281714?rf=130496560618456/" target="_blank" title="Opens in a new window"></a> The Best Homestyle Burgers I\'ve Ever Had</p>',
                        'icon': 'restaurant'
                    },
                    'geometry': {
                        'type': 'Point',
                        'coordinates': [-97.751007, 30.258335]
                    }
                },
                {
                    'type': 'Feature',
                    'properties': {
                        'description':
                            '<strong>P. Terry\'s Burger Stand</strong><p><br>Burger Joint (404 S Lamar Blvd, Austin, TX 78704)<br><a href="https://pterrys.com/" target="_blank" title="Opens in a new window"></a> <br>My favorite fast-food burger place, I still think its better than Whataburger and In-n-Out COMBINED!</p>',
                        'icon': 'restaurant'
                    },
                    'geometry': {
                        'type': 'Point',
                        'coordinates': [-97.758550, 30.261590]
                    }
                },
            ]
        }
    });
// Add a layer showing the places.
    map.addLayer({
        'id': 'places',
        'type': 'symbol',
        'source': 'places',
        'layout': {
            'icon-image': '{icon}-15',
            'icon-allow-overlap': true
        }
    });
// When a click event occurs on a feature in the places layer, open a popup at the
// location of the feature, with description HTML from its properties.
    map.on('click', 'places', function(e) {
        var coordinates = e.features[0].geometry.coordinates.slice();
        var description = e.features[0].properties.description;

// Ensure that if the map is zoomed out such that multiple
// copies of the feature are visible, the popup appears
// over the copy being pointed to.
        while (Math.abs(e.lngLat.lng - coordinates[0]) > 180) {
            coordinates[0] += e.lngLat.lng > coordinates[0] ? 360 : -360;
        }

        new mapboxgl.Popup()
            .setLngLat(coordinates)
            .setHTML(description)
            .addTo(map);
    });

// Change the cursor to a pointer when the mouse is over the places layer.
    map.on('mouseenter', 'places', function() {
        map.getCanvas().style.cursor = 'pointer';
    });

// Change it back to a pointer when it leaves.
    map.on('mouseleave', 'places', function() {
        map.getCanvas().style.cursor = '';
    });
});