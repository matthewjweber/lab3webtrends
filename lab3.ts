let map : any;
let coolLocations : any[] = [];
let mapMarkers : MapMarker[] = [];


interface LatLong {
    lat : number,
    lng : number
    
}

interface GoogleMapsConfig{
    center: LatLong,
    zoom : number
}

class MapMarker {
        Address : string;
        latlong : LatLong;

public constructor(address : string, latlong : LatLong){
    this.Address = address;
    this.latlong = latlong;
    }


}

let Toronto : LatLong = {lat: 43, lng: -79.38}
let initMapConfig = {center: Toronto, zoom: 8};

$.ajax({
    url: './locations.json',
    dataType: 'json',
    success: function(data){
        //console.log(data);

        for(let cl of data){
            coolLocations.push(cl);
        }
      //  console.log(coolLocations.pop());
       // console.log(coolLocations.length);
        //console.log(data.length);
    }
});
//AIzaSyCfbNvQtFHpbsm7ioH7ncefCkWDvrf7USs 

function initMap(){
    map = new google.maps.Map(
        document.getElementById("map"),
        {
            center: Toronto,
            zoom:8
        }
    );

    for (let cl of coolLocations) {
        let newMapMarker : MapMarker = new MapMarker(cl.address, cl.l);
        mapMarkers.push(newMapMarker);
    }

 let markersindex : number = 0;

 function setLatitudeLongitude() : void
    {
        mapMarkers[markersindex] = {Address = getLatLng(mapMarkers[markersindex].Address), ;
        Toronto = {lat: 43, lng: -79.38}
        console.log(mapMarkers[markersindex]);
        setTimeout(()=>{ console.log(mapMarkers[markersindex])}, 1000)
    }

    console.log(mapMarkers);

    addMarker(Toronto);
    getLatLng("9 prince st, georgetown, ontario")

    function getLatLng(address : string)
    {
        let geocoder : object = new google.maps.Geocoder();

        geocoder.geocode({'address' : address}, function(){
            if (status === 'OK'){
                console.log('Latitude: ' + result[0].geometry.location.lat());
                console.log('Long:' + result[0].geometry.location.lng());
                return {lat: result[0].geometry.location.lat(), long:result[0].geometry.location.lng()};
            } else {
                setInterval( getLatLng(address), 1000);
            }
        });
    }

    function addMarker(coord: LatLong) : void{
        //will place map marker based on coordinates
        let newMarker = new google.maps.Marker({
            position: coord,
            map: map,
            title: 'A cool place to be'
        });
    }
    //var geocoder = new google.maps.Geocoder();

    
  

}



