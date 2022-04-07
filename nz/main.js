/*Neuseelandreise Skript*/
//einzeiliger Kommentar

let lat = -45.34
let lng = 170.82
let zoom= 8
let map = L.map('map').setView([lat, lng], zoom);

L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {

    attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
}).addTo(map);
L.marker([lat, lng]).addTo(map)
    .bindPopup('<h3>Moeraki Boulders</h3>')
    .openPopup();

