function initYandexMap() {
    ymaps.ready(function () {
        var myMap = new ymaps.Map('map', {
                center: [53.886785, 27.538906],
                zoom: 17
            }, {
                searchControlProvider: 'yandex#search'
            }),

            myPlacemark = new ymaps.Placemark(myMap.getCenter(), {
                hintContent: 'Московская 17, Минск, 220007, Республика Беларусь',
            }, {
                iconLayout: 'default#image',
                iconImageHref: 'img/balun.png',
                iconImageSize: [43, 65],
                iconImageOffset: [-5, -38]
            });
        //
        // myMap.setCenter(myMap.converter.localPixelsToCoordinates(
        //
        //     map.converter.coordinatesToLocalPixels(map.getCenter()).moveBy(new YMaps.Point(0, 50))
        //
        // ));

        myMap.geoObjects
            .add(myPlacemark);
        myMap.behaviors.disable('scrollZoom');
        myMap.behaviors.disable('drag');

    });
}

initYandexMap();