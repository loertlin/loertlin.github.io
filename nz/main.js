/*Neuseelandreise Skript*/
//einzeiliger Kommentar

let zoom = 8

let coords = [ETAPPEN[2].lat, ETAPPEN[2].lng];
//console.log(coords);
//console.log(coords[0]);
//console.log(coords[1]);
//console.log(coords.length);
//
//console.log("text");
//console.log('text');
//console.log('id="map"')
//console.log(`latitude = ${lat}`); /*Variable wird ersetzt*/

//console.log(ETAPPEN);
//console.log(ETAPPEN[0]);
//console.log(ETAPPEN[0].nr)
//console.log(ETAPPEN[0].github)
//console.log(ETAPPEN[0].titel)
//console.log(ETAPPEN[0].wikipedia)
//console.log(ETAPPEN[0].lat)
//console.log(ETAPPEN[0].lng)



let map = L.map('map').setView([-45.34, 170.82], zoom);

let startLayer = L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {

    attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
}).addTo(map);

let layerControl = L.control.layers({
    "OpenStreetMap": startLayer, 
    "OpenTopoMap": L.tileLayer.provider("OpenTopoMap"),
    "Stamen.Watercolor": L.tileLayer.provider("Stamen.Watercolor"),
    "Stadia.Outdoors": L.tileLayer.provider("Stadia.Outdoors"),
    "GeoportailFrance.orthos": L.tileLayer.provider("GeoportailFrance.orthos"),

}).addTo(map); 


for (let etappe of ETAPPEN) {
    let popup = `
    <h3>${etappe.titel} (Etappe ${etappe.nr})</h3>
    <ul>
        <li>geogr. Länge: ${etappe.lng}</li>
        <li>geogr. Breite: ${etappe.lat}</li>
        <li><a href="${etappe.wikipedia}">Link zur Wikipediaseite</a></li>
        <li><a href="https://${etappe.github}.github.io/nz">Link zur Etappenseite</a></li>
    </ul>
    `;
    //console.log(etappe);
    let navClass = "etappenLink"; 
    let mrk = L.marker([etappe.lat, etappe.lng]).addTo(map).bindPopup(popup);
    if(etappe.nr == 3) {
        mrk.openPopup();
        navClass = "etappenLink etappeAktuell"
    }

    //Etappennavigation erweitern
    let link = `<a href="https://${etappe.github}.github.io/nz" target ="Etappen" 
    class="${navClass}" title="${etappe.titel}">${etappe.nr}</a>`;
    document.querySelector("#navigation").innerHTML += link;

}


for (let huts of HUTS) {
    let popup = `
    <h3>${huts.name}</h3>
    <h4>${huts.region}</h4>
    <hr>
    <p>${huts.info}</p>
    <img src="${huts.image}" alt="Bild der Hütte">
    <hr>
    <a href="${huts.link}" target ="Neuseeland">Link zur Hütte</a> 

    `;
    //console.log(etappe);
    let statusColor;
    if (huts.open == true) {
        statusColor = "green"
    } else {statusColor = "red";}

    L.circleMarker([huts.lat, huts.lng], {
        color: statusColor
    }).addTo(map).bindPopup(popup);

}



//Maßstab
L.control.scale({
    imperial: false
}).addTo(map);

//Fullscreen
L.control.fullscreen().addTo(map);