---
---

{% include js/conference.js %}


window.conference.awaitReady().then(() => {
    const map = window.conference.map.getMap();

    if (typeof map !== 'undefined') {
        let the_hotel = L.marker([ 38.98703, -76.93524 ], {
            icon: L.divIcon({
                className: '',
                html: '<span class="fas fa-hotel"></span> The Hotel',
                iconSize: [120, 56]
            })
        }).addTo(map);
        let marriott = L.marker([ 38.985992, -76.954089 ], {
            icon: L.divIcon({
                className: '',
                html: '<span class="fas fa-hotel"></span> Marriott',
                iconSize: [120, 56]
            })
        }).addTo(map);
        let cambria = L.marker([ 38.993051, -76.932460 ], {
            icon: L.divIcon({
                className: '',
                html: '<span class="fas fa-hotel"></span> Cambria Hotel',
                iconSize: [120, 56]
            })
        }).addTo(map);
    }
});
