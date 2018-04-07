	var mymap = L.map('map').setView([ 3.83203125,
          6.7031073524364783], 5);

	L.tileLayer('https://api.tiles.mapbox.com/v4/{id}/{z}/{x}/{y}.png?access_token=pk.eyJ1IjoiYW5raXRhMTMyIiwiYSI6ImNqZnBhenl6NTExMXgzM3JxNWhjaGxnczEifQ.GJ09bkYuOB5TAeP0pmsuZg', {
		maxZoom: 18,
		id: 'mapbox.streets'
	}).addTo(mymap);

	function addDataToMap(data, map){
		var dataLayer = L.geoJson(data);
		dataLayer.addTo(map);
	}

$.getJSON('./jsons/2017_stadium.geojson', function(data){
	addDataToMap(data, mymap);
})	