mapboxgl.accessToken = mapToken;

const map = new mapboxgl.Map({
    container: 'map', // container ID
    center: [77.2090, 28.6139], // starting position [lng, lat]
    zoom: 9 // starting zoom
});

console.log("working");
// console.log(listing.geometry.coordinates);

// const marker = new mapboxgl.Marker({ color: 'black', rotation: 45 })
//     .setLngLat([77.2090, 28.6139])
//     .addTo(map);


