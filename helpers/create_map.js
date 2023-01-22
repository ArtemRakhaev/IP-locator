// This function creates map and mark on Kremlin
export function createMap() {
    let myMap = new ymaps.Map("map", {
            center: [55.76, 37.64],
            zoom: 10,
            controls: []
    });

    myMap.geoObjects
        .add(new ymaps.Placemark([55.751462, 37.618790], {
            balloonContent: '',
            iconCaption: ''
        }, {
            preset: 'islands#blueCircleDotIconWithCaption',
            iconCaptionMaxWidth: '50'
        }));
}
