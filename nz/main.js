/*Neuseelandreise Skript*/
//einzeiliger Kommentar

let lat = -45.34
let lng = 170.82
let zoom= 8

let coords = [-45.34, 170.82];
console.log(coords);
console.log(coords[0]);
console.log(coords[1]);
console.log(coords.length);

console.log("text");
console.log('text');
console.log('id="map"')
console.log(`latitude = ${lat}`); /*Variable wird ersetzt*/

console.log(ETAPPEN);

let popup = `
    <h3>Moeraki Boulders</h3>
    <ul>
        <li>geogr. Länge: ${lng}</li>
        <li>geogr. Breite: ${lat}</li>
`;


let map = L.map('map').setView(coords, zoom);

L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {

    attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
}).addTo(map);
L.marker(coords).addTo(map)
    .bindPopup(popup)
    .openPopup();



