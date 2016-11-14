var cities = [{ID:'[BHM]',LAT:33.57,LON:-86.75,CITY:'Birmingham',STATE:'AL',JOBS:0},{ID:'[MGM]',LAT:32.30,LON:-86.40,CITY:'Montgomery',STATE:'AL',JOBS:0},{ID:'[ANC]',LAT:61.17,LON:-150.02,CITY:'Anchorage',STATE:'AK',JOBS:0},{ID:'[PHX]',LAT:33.43,LON:-112.02,CITY:'Phoenix',STATE:'AZ',JOBS:0},{ID:'[TUS]',LAT:32.12,LON:-110.93,CITY:'Tucson',STATE:'AZ',JOBS:0},{ID:'[LIT]',LAT:35.22,LON:-92.38,CITY:'Little Rock',STATE:'AR',JOBS:0},{ID:'[BFL]',LAT:35.43,LON:-119.05,CITY:'Bakersfield',STATE:'CA',JOBS:0},{ID:'[FAT]',LAT:36.77,LON:-119.72,CITY:'Fresno',STATE:'CA',JOBS:0},{ID:'[LAX]',LAT:33.93,LON:-118.40,CITY:'Los Angeles',STATE:'CA',JOBS:0},{ID:'[SAC]',LAT:38.52,LON:-121.50,CITY:'Sacramento',STATE:'CA',JOBS:0},{ID:'[SAN]',LAT:32.73,LON:-117.17,CITY:'San Diego',STATE:'CA',JOBS:0},{ID:'[SFO]',LAT:37.62,LON:-122.38,CITY:'San Francisco',STATE:'CA',JOBS:0},{ID:'[SJC]',LAT:37.37,LON:-121.92,CITY:'San Jose',STATE:'CA',JOBS:0},{ID:'[SNA]',LAT:33.67,LON:-117.88,CITY:'Santa Ana',STATE:'CA',JOBS:0},{ID:'[COS]',LAT:38.82,LON:-104.72,CITY:'Colorado Springs',STATE:'CO',JOBS:0},{ID:'[DEN]',LAT:39.75,LON:-104.87,CITY:'Denver',STATE:'CO',JOBS:0},{ID:'[BDR]',LAT:41.17,LON:-73.13,CITY:'Bridgeport',STATE:'CT',JOBS:0},{ID:'[ILG]',LAT:39.67,LON:-75.60,CITY:'Wilmington',STATE:'DE',JOBS:0},{ID:'[DCA]',LAT:38.85,LON:-77.04,CITY:'Washington/Natl',STATE:'DC',JOBS:0},{ID:'[JAX]',LAT:30.50,LON:-81.70,CITY:'Jacksonville',STATE:'FL',JOBS:0},{ID:'[MIA]',LAT:25.82,LON:-80.28,CITY:'Miami Intl',STATE:'FL',JOBS:0},{ID:'[MCO]',LAT:28.43,LON:-81.32,CITY:'Orlando',STATE:'FL',JOBS:0},{ID:'[TPA]',LAT:27.97,LON:-82.53,CITY:'Tampa Intl',STATE:'FL',JOBS:0},{ID:'[ATL]',LAT:33.65,LON:-84.42,CITY:'Atlanta',STATE:'GA',JOBS:0},{ID:'[HNL]',LAT:21.35,LON:-157.93,CITY:'Honolulu Int',STATE:'HI',JOBS:0},{ID:'[BOI]',LAT:43.57,LON:-116.22,CITY:'Boise',STATE:'ID',JOBS:0},{ID:'[CHI]',LAT:41.90,LON:-87.65,CITY:'Chicago',STATE:'IL',JOBS:0},{ID:'[FWA]',LAT:41.00,LON:-85.20,CITY:'Fort Wayne',STATE:'IN',JOBS:0},{ID:'[IND]',LAT:39.73,LON:-86.27,CITY:'Indianapolis',STATE:'IN',JOBS:0},{ID:'[DSM]',LAT:41.53,LON:-93.65,CITY:'Des Moines',STATE:'IA',JOBS:0},{ID:'[ICT]',LAT:37.65,LON:-97.43,CITY:'Wichita',STATE:'KS',JOBS:0},{ID:'[LEX]',LAT:38.05,LON:-85.00,CITY:'Lexington',STATE:'KY',JOBS:0},{ID:'[LOU]',LAT:38.23,LON:-85.67,CITY:'Louisville',STATE:'KY',JOBS:0},{ID:'[BTR]',LAT:30.53,LON:-91.15,CITY:'Baton Rouge',STATE:'LA',JOBS:0},{ID:'[NEW]',LAT:30.03,LON:-90.03,CITY:'New Orleans',STATE:'LA',JOBS:0},{ID:'[PWM]',LAT:43.65,LON:-70.32,CITY:'Portland',STATE:'ME',JOBS:0},{ID:'[BAL]',LAT:39.18,LON:-76.67,CITY:'Baltimore',STATE:'MD',JOBS:0},{ID:'[BOS]',LAT:42.37,LON:-71.03,CITY:'Boston',STATE:'MA',JOBS:0},{ID:'[DET]',LAT:42.42,LON:-83.02,CITY:'Detroit',STATE:'MI',JOBS:0},{ID:'[MSP]',LAT:44.88,LON:-93.22,CITY:'Minneapolis',STATE:'MN',JOBS:0},{ID:'[JAN]',LAT:32.32,LON:-90.08,CITY:'Jackson',STATE:'MS',JOBS:0},{ID:'[MCI]',LAT:39.32,LON:-94.72,CITY:'Kansas City',STATE:'MO',JOBS:0},{ID:'[STL]',LAT:38.75,LON:-90.37,CITY:'St Louis',STATE:'MO',JOBS:0},{ID:'[BIL]',LAT:45.80,LON:-108.53,CITY:'Billings',STATE:'MT',JOBS:0},{ID:'[LNK]',LAT:40.85,LON:-96.75,CITY:'Lincoln',STATE:'NE',JOBS:0},{ID:'[OMA]',LAT:41.30,LON:-95.90,CITY:'Omaha',STATE:'NE',JOBS:0},{ID:'[LAS]',LAT:36.08,LON:-115.17,CITY:'Las Vegas',STATE:'NV',JOBS:0},{ID:'[RNO]',LAT:39.50,LON:-119.78,CITY:'Reno',STATE:'NV',JOBS:0},{ID:'[MHT]',LAT:42.93,LON:-71.43,CITY:'Manchester',STATE:'NH',JOBS:0},{ID:'[ABQ]',LAT:35.05,LON:-106.60,CITY:'Albuquerque',STATE:'NM',JOBS:0},{ID:'[BUF]',LAT:42.93,LON:-78.73,CITY:'Buffalo',STATE:'NY',JOBS:0},{ID:'[NYC]',LAT:40.77,LON:-73.98,CITY:'New York',STATE:'NY',JOBS:0},{ID:'[ROC]',LAT:43.12,LON:-77.67,CITY:'Rochester',STATE:'NY',JOBS:0},{ID:'[CLT]',LAT:35.22,LON:-80.93,CITY:'Charlotte',STATE:'NC',JOBS:0},{ID:'[GSO]',LAT:36.08,LON:-79.95,CITY:'Greensboro',STATE:'NC',JOBS:0},{ID:'[RDU]',LAT:35.87,LON:-78.78,CITY:'Raleigh',STATE:'NC',JOBS:0},{ID:'[FAR]',LAT:46.90,LON:-96.80,CITY:'Fargo',STATE:'ND',JOBS:0},{ID:'[CVG]',LAT:39.05,LON:-84.67,CITY:'Cincinnati',STATE:'OH',JOBS:0},{ID:'[CLE]',LAT:41.42,LON:-81.87,CITY:'Cleveland',STATE:'OH',JOBS:0},{ID:'[CMH]',LAT:40.00,LON:-82.88,CITY:'Columbus',STATE:'OH',JOBS:0},{ID:'[TOL]',LAT:41.60,LON:-83.80,CITY:'Toledo',STATE:'OH',JOBS:0},{ID:'[OKC]',LAT:35.40,LON:-97.60,CITY:'Oklahoma Cty',STATE:'OK',JOBS:0},{ID:'[TUL]',LAT:36.20,LON:-95.90,CITY:'Tulsa',STATE:'OK',JOBS:0},{ID:'[PDX]',LAT:45.60,LON:-122.60,CITY:'Portland',STATE:'OR',JOBS:0},{ID:'[PHL]',LAT:39.88,LON:-75.25,CITY:'Philadelphia',STATE:'PA',JOBS:0},{ID:'[PIT]',LAT:40.50,LON:-80.22,CITY:'Pittsburgh',STATE:'PA',JOBS:0},{ID:'[PVD]',LAT:41.73,LON:-71.43,CITY:'Providence',STATE:'RI',JOBS:0},{ID:'[CAE]',LAT:33.95,LON:-81.12,CITY:'Columbia',STATE:'SC',JOBS:0},{ID:'[FSD]',LAT:43.58,LON:-96.73,CITY:'Sioux Falls',STATE:'SD',JOBS:0},{ID:'[MEM]',LAT:35.05,LON:-90.00,CITY:'Memphis Intl',STATE:'TN',JOBS:0},{ID:'[BNA]',LAT:36.12,LON:-86.68,CITY:'Nashville',STATE:'TN',JOBS:0},{ID:'[AUS]',LAT:30.30,LON:-97.70,CITY:'Austin',STATE:'TX',JOBS:0},{ID:'[CRP]',LAT:27.77,LON:-97.50,CITY:'Corpus Christi',STATE:'TX',JOBS:0},{ID:'[DFW]',LAT:32.90,LON:-97.03,CITY:'Dallas',STATE:'TX',JOBS:0},{ID:'[ELP]',LAT:31.80,LON:-106.40,CITY:'El Paso',STATE:'TX',JOBS:0},{ID:'[IAH]',LAT:29.97,LON:-95.35,CITY:'Houston',STATE:'TX',JOBS:0},{ID:'[LRD]',LAT:27.53,LON:-99.47,CITY:'Laredo',STATE:'TX',JOBS:0},{ID:'[LBB]',LAT:33.65,LON:-101.82,CITY:'Lubbock',STATE:'TX',JOBS:0},{ID:'[SAT]',LAT:29.53,LON:-98.47,CITY:'San Antonio',STATE:'TX',JOBS:0},{ID:'[SLC]',LAT:40.78,LON:-111.97,CITY:'Salt Lake City',STATE:'UT',JOBS:0},{ID:'[BTV]',LAT:44.47,LON:-73.15,CITY:'Burlington',STATE:'VT',JOBS:0},{ID:'[NGU]',LAT:36.93,LON:-76.28,CITY:'Norfolk',STATE:'VA',JOBS:0},{ID:'[RIC]',LAT:37.50,LON:-77.33,CITY:'Richmond',STATE:'VA',JOBS:0},{ID:'[SEA]',LAT:47.45,LON:-122.30,CITY:'Seattle',STATE:'WA',JOBS:0},{ID:'[GEG]',LAT:47.63,LON:-117.53,CITY:'Spokane',STATE:'WA',JOBS:0},{ID:'[CRW]',LAT:38.37,LON:-81.60,CITY:'Charleston',STATE:'WV',JOBS:0},{ID:'[MSN]',LAT:43.13,LON:-89.33,CITY:'Madison',STATE:'WI',JOBS:0},{ID:'[MKE]',LAT:42.95,LON:-87.90,CITY:'Milwaukee',STATE:'WI',JOBS:0},{ID:'[CYS]',LAT:41.15,LON:-104.82,CITY:'Cheyenne',STATE:'WY',JOBS:0},{ID:'[P60]',LAT:44.55,LON:-110.42,CITY:'Yellowstone',STATE:'WY',JOBS:0}];
var map;
var cityCircleArray = [];
var totalNumberOfJobs = 0;

function initMap() {
	map = new google.maps.Map(document.getElementById('map'), {
  	zoom: 5,
  	center: new google.maps.LatLng(38.5282,-98.5795),
  	mapTypeId: 'terrain'
});

map.addListener('click', function(ev) {
   map.setZoom(8);
   //map.setCenter(marker.getPosition());
});
}

$( "#searchResult" ).click(function() {
	clearPreviousResults();
	// search for jobs that match criteria
	jobSearch($('#where').val(),$('#what').val());
});

function clearPreviousResults() {
	// remove previous circles
	for (var i=0; i<cityCircleArray.length;i++) cityCircleArray[i].setMap(null);
	// reset variables
	cityCircleArray = [];
	totalNumberOfJobs = 0;
}

function jobSearch(location, data) {
	var user_browser = navigator.userAgent;
	var country;
	$.get("http://ip-api.com/json/", function (response) {
	      country = response.country;
	  }, "jsonp");
	var loopCount = 0;
	for (var s=0; s < 1000; s += 25) {
	  var request = { 
	    publisher: '5932790545393726',
	    v: '2',
	    format: 'json',
	    q: data,
	    l: '',
	    //l: location,
	    radius: 50,
	    sort: 'date',
	    highlight: 1,
	    filter: 1,
	    start: s,
	    limit: '25',
	    latlong: 1,
	    co: country,
	    userip: '',
	    useragent: '',
	    };

	  $.ajax({
	    url: "http://api.indeed.com/ads/apisearch",
	    data: request,
	    dataType: "jsonp",//use jsonp to avoid cross origin issues
	    type: "GET",
	  })
	  .done(function(data){ //this waits for the ajax to return with a succesful promise object
	    loopCount++; // used to count how many requests to Indeed have happened - assumes each request only returns 25 records
	    // Loop through the data results 
	    $.each(data.results, function(i, item) {
	     // for each city in cities, use the Haversine formula to see if the city from Indeed.com is 
	     // within 50 miles and if so, add 1 to the job count for that city
	     	var milesFromCityCenter = 50;
	        for (var x = 0; x < cities.length; x++) {
	          var d = findDistance(cities[x].LAT, item.latitude, cities[x].LON, item.longitude);
	          if (d <= milesFromCityCenter) {
	            totalNumberOfJobs += 1;
	            cities[x].JOBS += 1;
	          }
	        }
	    });  // end of .each
	  //After all requests have been made to get all jobs, noow display circles
	  if (loopCount == 40) {
	    // Construct the circle for each city in cities
	    // Note: We scale the area of the circle based on the percentage of jobs.
	    for (var cityIndex = 0; cityIndex < cities.length; cityIndex += 1) {
	      // Add the circle for this city to the map.
	      cities[cityIndex].JOBS;
	      if (cities[cityIndex].JOBS > 0) {
	        jobPercent = cities[cityIndex].JOBS/totalNumberOfJobs*100;
	        var radSize = 10000;
	        radSize = Math.min(60000, Math.max(10000, 40000*Math.cbrt(jobPercent)));
	        var cityCircle = new google.maps.Circle({
	          strokeColor: '#FF0000',
	          strokeOpacity: 0.8,
	          strokeWeight: 2,
	          fillColor: '#FF0000',
	          fillOpacity: 0.35,
	          map: map,
	          center: new google.maps.LatLng(cities[cityIndex].LAT,cities[cityIndex].LON),
	          radius: radSize
	        });
	        cityCircleArray.push(cityCircle);
	      } // end if JOBS > 0
	    } // end cities loop

	    // Add event handlers to each city object in cities array
	    var infoWindow;
	    for (var cityIndex in cityCircleArray) {
	      google.maps.event.addListener(cityCircleArray[cityIndex], 'click', function(ev) {
	        var displayCity = "";
	        smallestDistance = 100000;
	        // find the city closest to where the user clicked
	        for (var x=0; x<cities.length; x++) {
	          var d = findDistance(cities[x].LAT, ev.latLng.lat(), cities[x].LON, ev.latLng.lng()); 
	          if (d <= smallestDistance) {
	            smallestDistance = d;
	            displayCity = cities[x].CITY;
	          }
	        }      
	        // open Indeed.com web page with city as location and data as job criteria
	        window.open('http://www.indeed.com/jobs?q='+data.query+'&l='+displayCity);   
	      }); // end event.addListener for click
	      google.maps.event.addListener(cityCircleArray[cityIndex], 'mouseover', function(ev) {
	        var displayCity = "";
	        var displayJobs = 0;
	        smallestDistance = 100000;
	        // find the city closest to where the user clicked
	        for (var x=0; x<cities.length; x++) {
			  var d = findDistance(cities[x].LAT, ev.latLng.lat(), cities[x].LON, ev.latLng.lng());
	          if (d <= smallestDistance) {
	            smallestDistance = d;
	            displayCity = cities[x].CITY;
	            displayJobs = cities[x].JOBS;
	          }
	        }      

	        infoWindow = new google.maps.InfoWindow({
	          content: "<div>Number of jobs in "+displayCity+" is "+displayJobs+".</div>",
	          maxWidth: 500
	        });
	        infoWindow.setPosition(ev.latLng);
	        // map.setZoom(8);
	        infoWindow.open(map);
	      });  // end event.addListener mouseover 
	      google.maps.event.addListener(cityCircleArray[cityIndex], 'mouseout', function(ev) {
	        infoWindow.close(map);
	      });  // end event.addListener mouseover 
	    } 
	  } // end if loopCount == 400
	  }) // end .done
	  .fail(function(jqXHR, error){ //this waits for the ajax to return with an error promise object
	    console.log('I errored')
	  });
	} // end for loop to get 10000 jobs
} // end jobSearch

//findDistance calculates the distance between 2 latitudes and longitudes using the Haversine formula
function findDistance(lat1, lat2, lon1, lon2) {
    var R = 3961;  // Radius of the Earth in miles
    function toRad(deg) {
      return deg * (Math.PI/180)
    }
	var x1 = lat2-lat1;
	var dLat = toRad(x1);  
	var x2 = lon2-lon1;
	var dLon = toRad(x2);  
	var a = Math.sin(dLat/2) * Math.sin(dLat/2) + 
	                Math.cos(toRad(lat1)) * Math.cos(toRad(lat2)) * 
	                Math.sin(dLon/2) * Math.sin(dLon/2);  
	var c = 2 * Math.atan2(Math.sqrt(a), Math.sqrt(1-a)); 
	var d = R * c;  // distance in miles
	return d;
}

