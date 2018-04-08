	var mymap = L.map('map').setView([ 3.83203125,
          6.7031073524364783], 4);

	L.tileLayer('https://api.tiles.mapbox.com/v4/{id}/{z}/{x}/{y}.png?access_token=pk.eyJ1IjoiYW5raXRhMTMyIiwiYSI6ImNqZnBhenl6NTExMXgzM3JxNWhjaGxnczEifQ.GJ09bkYuOB5TAeP0pmsuZg', {
		maxZoom: 18,
		id: 'mapbox.streets'
	}).addTo(mymap);

	function addDataToMap(data, map){
		var dataLayer = L.geoJson(data);
		dataLayer.bindPopup(function(layer){
			return layer.feature.properties.name;
		}).addTo(map);
	}

function addCountryToMap(data, map){
L.geoJson(data, {
	style: function(feature){
		return{
			fillColor: "#46acae",
			fillOpacity: 0.7,
			stroke: true,
			color: "grey",
			weight: 2
		};
	}
}).bindPopup(function(layer){
	return layer.feature.properties.name;
}).addTo(map);

}

function addWinnerToMap(data, map){
L.geoJson(data, {
	style: function(feature){
		return{
			fillColor: "red",
			fillOpacity: 0.7,
			stroke: true,
			color: "grey",
			weight: 2
		};
	}
}).bindPopup(function(layer){
	return layer.feature.properties.name;
}).addTo(map);

}

$.getJSON('./jsons/2017_stadium.geojson', function(data){
	addDataToMap(data, mymap);
})

$.getJSON('./jsons/2017_participate.geojson', function(data){
	addCountryToMap(data, mymap);
})

$.getJSON('./jsons/2017_winner.geojson', function(data){
	addWinnerToMap(data, mymap);
})