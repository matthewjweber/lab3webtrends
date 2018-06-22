"use strict";
var map;
var coolLocations = [];
var mapMarkers = [];
var MapMarker = /** @class */ (function () {
    function MapMarker(address, latlong) {
        this.Address = address;
        this.latlong = latlong;
    }
    return MapMarker;
}());
var Toronto = { lat: 43, lng: -79.38 };
var initMapConfig = { center: Toronto, zoom: 8 };
$.ajax({
    url: './locations.json',
    dataType: 'json',
    success: function (data) {
        //console.log(data);
        for (var _i = 0, data_1 = data; _i < data_1.length; _i++) {
            var cl = data_1[_i];
            coolLocations.push(cl);
        }
        //  console.log(coolLocations.pop());
        // console.log(coolLocations.length);
        //console.log(data.length);
    }
});
//AIzaSyCfbNvQtFHpbsm7ioH7ncefCkWDvrf7USs 
function initMap() {
    map = new google.maps.Map(document.getElementById("map"), {
        center: Toronto,
        zoom: 8
    });
    for (var _i = 0, coolLocations_1 = coolLocations; _i < coolLocations_1.length; _i++) {
        var cl = coolLocations_1[_i];
        var newMapMarker = new MapMarker(cl.address, cl.l);
        mapMarkers.push(newMapMarker);
    }
    var markersindex = 0;
    function setLatitudeLongitude() {
        mapMarkers[markersindex] = { Address: Address,
            Toronto: Toronto,
            console: .log(mapMarkers[markersindex]),
            setTimeout: function () { } }();
        {
            console.log(mapMarkers[markersindex]);
        }
        1000;
    }
    console.log(mapMarkers);
    addMarker(Toronto);
    getLatLng("9 prince st, georgetown, ontario");
    function getLatLng(address) {
        var geocoder = new google.maps.Geocoder();
        geocoder.geocode({ 'address': address }, function () {
            if (status === 'OK') {
                console.log('Latitude: ' + result[0].geometry.location.lat());
                console.log('Long:' + result[0].geometry.location.lng());
                return { lat: result[0].geometry.location.lat(), long: result[0].geometry.location.lng() };
            }
            else {
                setInterval(getLatLng(address), 1000);
            }
        });
    }
    function addMarker(coord) {
        //will place map marker based on coordinates
        var newMarker = new google.maps.Marker({
            position: coord,
            map: map,
            title: 'A cool place to be'
        });
    }
    //var geocoder = new google.maps.Geocoder();
}
