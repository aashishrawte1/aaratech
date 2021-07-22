// mapboxgl.accessToken = 'pk.eyJ1IjoiYWFzaGlzaHJhd3RlMSIsImEiOiJja3BheDdld3Qwc2JtMm9sbHlrdHQ0Ym5pIn0.jJLVeD8yfQHv2Npas8vQ1A';
// const map = new mapboxgl.Map({
// container: 'map',
// style: 'mapbox://styles/mapbox/streets-v11'
// zoom: 9,
// center: [-71.15, 42.70]
// });

// function getShop(){
//     const res = await fetch('/shop')
//     const data = await res.json();

// const shop = data.data.map(store=>{
    // return 
        //                             {
        //                                 'type': 'Feature',
        //                                 'geometry': {
        //                                     'type': 'Point',
        //                                     'coordinates': [shop.location.coordinates[0], store.location.coordinates[1]]
        //                                 },
                                            // properties: {
                                            //     shopId: shop.shopId,
                                            //     icon: 'shop'
                                            // }
        //                             }
// })
//loadMap(shop)

// }

// function loadMap() {
//     map.on('load', function () {
//         // Load an image from an external URL.
//         map.loadImage(
//             'https://docs.mapbox.com/mapbox-gl-js/assets/cat.png',
//             function (error, image) {
//                 if (error) throw error;

//                 // Add the image to the map style.
//                 map.addImage('cat', image);

//                 // Add a data source containing one point feature.
//                 map.addSource('point', {
//                     'type': 'geojson',
//                     'data': {
//                         'type': 'FeatureCollection',
//                         'features': shop
//                     }
//                 });

//                 // Add a layer to use the image to represent the data.
//                 map.addLayer({
//                     'id': 'points',
//                     'type': 'symbol',
//                     'source': 'point', // reference the data source
//                     'layout': {
//                         'icon-image': '{icon}-15', // reference the image
//                         'icon-size': 1.5,
                            //'text-field': '{shopId}'
//                     }
//                 });
//             }
//         );
//     }

// getShop()