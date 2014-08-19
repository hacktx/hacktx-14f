function initialize() {
    // Create an array of styles.
    var styles = [
        {
          stylers: [
                { hue: "#00ffe6" },
                { saturation: -20 }
            ]
        },
        {
            featureType: "road",
            elementType: "geometry",
            stylers: [
                { lightness: 100 },
                { visibility: "simplified" }
            ]
        },
        {
            featureType: "road",
            elementType: "labels",
            stylers: [
                { visibility: "off" }
            ]
        }
    ];

    // Create a new StyledMapType object, passing it the array of styles,
    // as well as the name to be displayed on the map type control.
    var styledMap = new google.maps.StyledMapType(
        styles,
        {name: "Styled Map"}
    );

    var sacLatLng = new google.maps.LatLng(30.284903, -97.736208);

    // Create a map object, and include the MapTypeId to add
    // to the map type control.
    var mapOptions = {
        zoom: 15,
        // Coordinates found manually
        center: sacLatLng,
        mapTypeControlOptions: {
            mapTypeIds: [google.maps.MapTypeId.ROADMAP, 'map_style']
        },
        disableDefaultUI: true,
        scaleControl: false,
        zoomControl: false,
        panControl: false,
    };
    var map = new google.maps.Map(
        document.getElementById('hacktx-map'),
        mapOptions
    );

    // TOOD(matthewe|2014-08-18): Adds a marker for the SAC, this should maybe
    // be a custom marker or not need one? Probably a cool custom marker
    var marker = new google.maps.Marker({
        position: sacLatLng,
        map: map,
        title: 'Hello World!'
  });
    //Associate the styled map with the MapTypeId and set it to display.
    map.mapTypes.set('map_style', styledMap);
    map.setMapTypeId('map_style');
}

google.maps.event.addDomListener(window, 'load', initialize);
