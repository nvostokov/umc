let map = L.map('map').setView([64.53150132366057, 40.5765988828006], 14);
    L.tileLayer('https://tile.openstreetmap.org/{z}/{x}/{y}.png', {
        maxZoom: 19,
        attribution: '© OpenStreetMap',
    }).addTo(map);

let LeafIcon = L.Icon.extend({
    options: {
        iconSize:     [40, 50],
        iconAnchor:   [30, 50],
        popupAnchor:  [-10, -50]
    }
});

let contactIcon = new LeafIcon({iconUrl: '../img/logo_cart.png'});

let trIcon = new LeafIcon({iconUrl: '../img/transparent.svg'})

let umc = L.marker([64.5342756797821, 40.579292467658206], {icon: contactIcon}).bindPopup('Учебно-методический центр, пр-т Московский, 17').addTo(map);

let aocc = L.marker([64.52766514059904, 40.57339685849538], {icon: contactIcon}).bindPopup('АОСС, пр-т Ленинградский, 10').addTo(map);



function markerMitTr(pos,txt) {
  let markerMitTr = L.marker(pos, {icon:trIcon})
            .addTo(map);
  markerMitTr.bindPopup(txt);
  markerMitTr.openPopup();
  map.panTo(new L.LatLng(pos[0],pos[1]));
}
