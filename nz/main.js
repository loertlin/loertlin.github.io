/*Neuseelandreise Skript*/
//einzeiliger Kommentar


var map = L.map('map').setView([-45.34, 170.82], 8);

L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {

    attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
}).addTo(map);
L.marker([-45.34, 170.82]).addTo(map)
    .bindPopup('<h3>Moeraki Boulders</h3>')
    .openPopup();