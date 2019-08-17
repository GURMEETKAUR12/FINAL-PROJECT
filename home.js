
var data = [
    {
     "name": "A pre-fabricated home in a shipping container",
     "location": "East Crescent ",
     "description": "$36,000; buy now on Amazon Who says you have to pay exorbitant broker fees to find the home of your dreams? You can make your dreams of homeownership come true as easily as you’d buy a bottle of dish soap, thanks to this storage-container-turned-house, available for a cool $36K. And before you sign off on a mortgage, brush up on these 30 Secrets Every First-Time Homebuyers Need to Know.",
     "image":"AB.jpg",
     "price":"$36,000",
     
     
    },
    {
      "name": "1,500 live ladybugs",
      "location": "Sheikh Zayed Road",
      "description": "Who says you can’t buy anything for under $10 anymore? In fact, Amazon shoppers can buy 1,500 crawling, flying somethings for the bargain price of a latte.",
      "image": "ladbug.jpg",
      "price":"$10",
    
    },
    {
      "name": "A peanut butter and jelly of the month club",
      "location": "Oud Metha Road",
      "description": " buy now at Amazon.If you’ve ever thought to yourself, “Spreading peanut butter and jelly on bread is too time-consuming,” Amazon has the answer. For just under $40 a month, you can enjoy gourmet peanut butter and jelly sandwiches, delivered straight to your door.",
      "image": "peanut.jpg",
      "price":"$468.96",
    
    },
]

var htmlText = '';

for ( var key in data ) {
htmlText += '<div style="box-shadow: 0 4px 8px 0 rgba(0,0,255, 0.1); text-align: center;font-family: arial;" class="div-conatiner">';
htmlText += '<h2 class="p-name"> Name: ' + data[key].name + '</h2>';
htmlText += '<img style=" max-width: 300px;" src= ' +data[key].image +'>';
htmlText += '<h3 class="p-loc"> Location: ' + data[key].location + '</h3>';
htmlText += '<h3 class="p-loc"> Price: ' + data[key].price + '</h3>';

htmlText += '<h4 class="p-desc"> Description: ' + data[key].description + '</h4>';
htmlText += '</div>';
}

$('body').append(htmlText);
    
        function getJSONMarkers() {
          const markers = [
            {
              name:  "A pre-fabricated home in a shipping container",
              location: [25.1212, 55.1535]
            },
            {
              name: "1,500 live ladybugs",
              location: [25.2084, 55.2719]
            },
            {
              name: "A peanut butter and jelly of the month club",
              location: [25.2285, 55.3273]
            }
          ];
          return markers;
        }

        function loadMap() {
          // Initialize Google Maps
          const mapOptions = {
            center:new google.maps.LatLng(25.2048, 55.2708),
            zoom: 11
          }
          const map = new google.maps.Map(document.getElementById("map"), mapOptions);

          // Load JSON Data
          const hotelMarkers = getJSONMarkers();

          // Initialize Google Markers
          for(hotel of hotelMarkers) {
            let marker = new google.maps.Marker({
              map: map,
              position: new google.maps.LatLng(hotel.location[0], hotel.location[1]),
              title: hotel.name
            })
          }
        }
  