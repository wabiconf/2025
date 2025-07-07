---
---

{% include js/conference.js %}


window.conference.awaitReady().then(() => {
    const map = window.conference.map.getMap();

    if (typeof map !== 'undefined') {
        let cambria = L.marker([ 38.993391267851806, -76.93235165234404 ], {
            icon: L.divIcon({
                className: '',
                html: '<span class="fas fa-hotel"></span> Main Station',
                iconSize: [120, 56]
            })
        }).addTo(map);
        let marriott = L.marker([ 38.98663315625827, -76.95453432761065], {
            icon: L.divIcon({
                className: '',
                html: '<span class="fas fa-hotel"></span> Main Station',
                iconSize: [120, 56]
            })
        }).addTo(map);
        let the_hotel = L.marker([ 38.987325845573764, -76.93574769709168 ], {
            icon: L.divIcon({
                className: '',
                html: '<span class="fas fa-hotel"></span> Main Station',
                iconSize: [120, 56]
            })
        }).addTo(map);
    }
});
