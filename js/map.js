	var mymap = L.map('map').setView([ 3.83203125,
          6.7031073524364783], 3);

function data_17(){

	mymap.eachLayer(function (layer) {
    mymap.removeLayer(layer);
	});

	L.tileLayer('https://api.tiles.mapbox.com/v4/{id}/{z}/{x}/{y}.png?access_token=pk.eyJ1IjoiYW5raXRhMTMyIiwiYSI6ImNqZnBhenl6NTExMXgzM3JxNWhjaGxnczEifQ.GJ09bkYuOB5TAeP0pmsuZg', {
		maxZoom: 18,
		id: 'mapbox.streets'
	}).addTo(mymap);

	function addDataToMap(data, map){
		var dataLayer = L.geoJson(data);
		dataLayer.bindPopup(function(layer){
			var myPopup = L.DomUtil.create('div', 'infoWindow');
			myPopup.innerHTML = '<h1 class="head_sta">'+layer.feature.properties.name+'</h1><h2 class="small_sta">'+layer.feature.properties.stadium+'<p class="tiny_sta">'+layer.feature.properties.define+'</p><p><button type="button" class="btn btn-warning" data-toggle="modal" data-target="#myModal2" id="'+layer.feature.properties.stadium+'">View Experience</button></p>';
			$('.btn-warning', myPopup).on('click', function(e){
	    var name = $(this).closest(".btn-warning").attr("id");
			var year = $('.year').attr("id");
			console.log(year);
			var sent = name.toString();
			console.log(sent);
	    $.ajax({
	         data: {
	           "functionname": "fetch",
	           "name" : sent
	       },
	         type: "POST",
	         url: "./control.php",
	         success: function(response){
						 response = $.parseJSON(response);
						 $('#myModal2').find(".modal-body").html("");
						 for (var i =0; i<response.length; i++){
							 $('#myModal2').find('.modal-body').append('<p>'+response[i].name+': <i>"'+response[i].experience +'"</i></p>');
						 }
	         },
	         error:function(error){
	          console.log(error);
	        }
	});
	        e.preventDefault();
	});
		return myPopup;
		}).addTo(map);
	}

function addCountryToMap(data, map){
L.geoJson(data, {
	style: function(feature){
		return{
			fillColor: "#932aba",
			fillOpacity: 0.7,
			stroke: true,
			color: "grey",
			weight: 2
		};
	}
}).bindPopup(function(layer){
	var myPopup = L.DomUtil.create('div', 'infoWindow');
	myPopup.innerHTML = '<h1 class="head_sta">Participating Nation: <b>'+layer.feature.properties.name+'</b></h1><p><button type="button" class="btn btn-warning" data-toggle="modal" data-target="#myModal2" id="'+layer.feature.properties.name+'">view Experience</button></p>';
	$('.btn-warning', myPopup).on('click', function(e){
	var name = $(this).closest(".btn-warning").attr("id");
	var sent = name.toString();
	console.log(sent);
	$.ajax({
			 data: {
				 "functionname": "fetch",
				 "name" : sent
		 },
			 type: "POST",
			 url: "./control.php",
			 success: function(response){
				 response = $.parseJSON(response);
				 $('#myModal2').find(".modal-body").html("");
				 for (var i =0; i<response.length; i++){
					 $('#myModal2').find('.modal-body').append('<p>'+response[i].name+': <i>"'+response[i].experience +'"</i></p>');
				 }
			 },
			 error:function(error){
				console.log(error);
			}
		 });
			e.preventDefault();
});
return myPopup;
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
	var myPopup = L.DomUtil.create('div', 'infoWindow');
	myPopup.innerHTML = '<h1 class="head_sta">Winning Nation: <b>'+layer.feature.properties.name+'</b></h1><p><button type="button" class="btn btn-warning" data-toggle="modal" data-target="#myModal2" id="'+layer.feature.properties.name+'">View Experience</button></p>';
	$('.btn-warning', myPopup).on('click', function(e){
	var name = $(this).closest(".btn-warning").attr("id");
	var sent = name.toString();
	console.log(sent);
	$.ajax({
			 data: {
				 "functionname": "fetch",
				 "name" : sent
		 },
			 type: "POST",
			 url: "./control.php",
			 success: function(response){
				 response = $.parseJSON(response);
				 $('#myModal2').find(".modal-body").html("");
				 for (var i =0; i<response.length; i++){
					 $('#myModal2').find('.modal-body').append('<p>'+response[i].name+': <i>"'+response[i].experience +'"</i></p>');
				 }
			 },
			 error:function(error){
				console.log(error);
			}
		 });
			e.preventDefault();
});
return myPopup;
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

}

function data_15(){

	mymap.eachLayer(function (layer) {
    mymap.removeLayer(layer);
});
	L.tileLayer('https://api.tiles.mapbox.com/v4/{id}/{z}/{x}/{y}.png?access_token=pk.eyJ1IjoiYW5raXRhMTMyIiwiYSI6ImNqZnBhenl6NTExMXgzM3JxNWhjaGxnczEifQ.GJ09bkYuOB5TAeP0pmsuZg', {
		maxZoom: 18,
		id: 'mapbox.streets'
	}).addTo(mymap);

	function addDataToMap(data, map){
		var dataLayer = L.geoJson(data);
		dataLayer.bindPopup(function(layer){
			var myPopup = L.DomUtil.create('div', 'infoWindow');
			myPopup.innerHTML = '<h1 class="head_sta">'+layer.feature.properties.name+'</h1><h2 class="small_sta">'+layer.feature.properties.stadium+'<p class="tiny_sta">'+layer.feature.properties.define+'</p><p><button type="button" class="btn btn-warning" data-toggle="modal" data-target="#myModal2" id="'+layer.feature.properties.stadium+'">View Experience</button></p>';
			$('.btn-warning', myPopup).on('click', function(e){
			var name = $(this).closest(".btn-warning").attr("id");
			var sent = name.toString();
			console.log(sent);
			$.ajax({
					 data: {
						 "functionname": "fetch",
						 "name" : sent
				 },
					 type: "POST",
					 url: "./control.php",
					 success: function(response){
						 response = $.parseJSON(response);
						 $('#myModal2').find(".modal-body").html("");
						 for (var i =0; i<response.length; i++){
							 $('#myModal2').find('.modal-body').append('<p>'+response[i].name+': <i>"'+response[i].experience +'"</i></p>');
						 }
					 },
					 error:function(error){
						console.log(error);
					}
				 });
					e.preventDefault();
		});
		return myPopup;
		}).addTo(map);
	}

function addCountryToMap(data, map){
L.geoJson(data, {
	style: function(feature){
		return{
			fillColor: "#932aba",
			fillOpacity: 0.7,
			stroke: true,
			color: "grey",
			weight: 2
		};
	}
}).bindPopup(function(layer){
	var myPopup = L.DomUtil.create('div', 'infoWindow');
	myPopup.innerHTML = '<h1 class="head_sta">Participating Nation: <b>'+layer.feature.properties.name+'</b></h1><p><button type="button" class="btn btn-warning" data-toggle="modal" data-target="#myModal2" id="'+layer.feature.properties.name+'">view Experience</button></p>';
	$('.btn-warning', myPopup).on('click', function(e){
	var name = $(this).closest(".btn-warning").attr("id");
	var sent = name.toString();
	console.log(sent);
	$.ajax({
			 data: {
				 "functionname": "fetch",
				 "name" : sent
		 },
			 type: "POST",
			 url: "./control.php",
			 success: function(response){
				 response = $.parseJSON(response);
				 $('#myModal2').find(".modal-body").html("");
				 for (var i =0; i<response.length; i++){
					 $('#myModal2').find('.modal-body').append('<p>'+response[i].name+': <i>"'+response[i].experience +'"</i></p>');
				 }
			 },
			 error:function(error){
				console.log(error);
			}
		 });
			e.preventDefault();
});
return myPopup;
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
	var myPopup = L.DomUtil.create('div', 'infoWindow');
	myPopup.innerHTML = '<h1 class="head_sta">Winning Nation: <b>'+layer.feature.properties.name+'</b></h1><p><button type="button" class="btn btn-warning" data-toggle="modal" data-target="#myModal2" id="'+layer.feature.properties.name+'">View Experience</button></p>';
	$('.btn-warning', myPopup).on('click', function(e){
	var name = $(this).closest(".btn-warning").attr("id");
	var sent = name.toString();
	console.log(sent);
	$.ajax({
			 data: {
				 "functionname": "fetch",
				 "name" : sent
		 },
			 type: "POST",
			 url: "./control.php",
			 success: function(response){
				 response = $.parseJSON(response);
				 $('#myModal2').find(".modal-body").html("");
				 for (var i =0; i<response.length; i++){
					 $('#myModal2').find('.modal-body').append('<p>'+response[i].name+': <i>"'+response[i].experience +'"</i></p>');
				 }
			 },
			 error:function(error){
				console.log(error);
			}
		 });
			e.preventDefault();
});
return myPopup;
}).addTo(map);

}

$.getJSON('./jsons/2015_stadium.geojson', function(data){
	addDataToMap(data, mymap);
})

$.getJSON('./jsons/2015_participate.geojson', function(data){
	addCountryToMap(data, mymap);
})

$.getJSON('./jsons/2015_winner.geojson', function(data){
	addWinnerToMap(data, mymap);
})
}

function data_13(){

	mymap.eachLayer(function (layer) {
    mymap.removeLayer(layer);
	});

	L.tileLayer('https://api.tiles.mapbox.com/v4/{id}/{z}/{x}/{y}.png?access_token=pk.eyJ1IjoiYW5raXRhMTMyIiwiYSI6ImNqZnBhenl6NTExMXgzM3JxNWhjaGxnczEifQ.GJ09bkYuOB5TAeP0pmsuZg', {
		maxZoom: 18,
		id: 'mapbox.streets'
	}).addTo(mymap);

	function addDataToMap(data, map){
		var dataLayer = L.geoJson(data);
		dataLayer.bindPopup(function(layer){
			var myPopup = L.DomUtil.create('div', 'infoWindow');
			myPopup.innerHTML = '<h1 class="head_sta">'+layer.feature.properties.name+'</h1><h2 class="small_sta">'+layer.feature.properties.stadium+'<p class="tiny_sta">'+layer.feature.properties.define+'</p><p><button type="button" class="btn btn-warning" data-toggle="modal" data-target="#myModal2" id="'+layer.feature.properties.stadium+'">View Experience</button></p>';
			$('.btn-warning', myPopup).on('click', function(e){
	    var name = $(this).closest(".btn-warning").attr("id");
			var year = $('.year').attr("id");
			console.log(year);
			var sent = name.toString();
			console.log(sent);
	    $.ajax({
	         data: {
	           "functionname": "fetch",
	           "name" : sent
	       },
	         type: "POST",
	         url: "./control.php",
	         success: function(response){
						 response = $.parseJSON(response);
						 $('#myModal2').find(".modal-body").html("");
						 for (var i =0; i<response.length; i++){
							 $('#myModal2').find('.modal-body').append('<p>'+response[i].name+': <i>"'+response[i].experience +'"</i></p>');
						 }
	         },
	         error:function(error){
	          console.log(error);
	        }
	       });
	        e.preventDefault();
	  });
		return myPopup;
		}).addTo(map);
	}

function addCountryToMap(data, map){
L.geoJson(data, {
	style: function(feature){
		return{
			fillColor: "#932aba",
			fillOpacity: 0.7,
			stroke: true,
			color: "grey",
			weight: 2
		};
	}
}).bindPopup(function(layer){
	var myPopup = L.DomUtil.create('div', 'infoWindow');
	myPopup.innerHTML = '<h1 class="head_sta">Participating Nation: <b>'+layer.feature.properties.name+'</b></h1><p><button type="button" class="btn btn-warning" data-toggle="modal" data-target="#myModal2" id="'+layer.feature.properties.name+'">view Experience</button></p>';
	$('.btn-warning', myPopup).on('click', function(e){
	var name = $(this).closest(".btn-warning").attr("id");
	var sent = name.toString();
	console.log(sent);
	$.ajax({
			 data: {
				 "functionname": "fetch",
				 "name" : sent
		 },
			 type: "POST",
			 url: "./control.php",
			 success: function(response){
				 response = $.parseJSON(response);
				 $('#myModal2').find(".modal-body").html("");
				 for (var i =0; i<response.length; i++){
					 $('#myModal2').find('.modal-body').append('<p>'+response[i].name+': <i>"'+response[i].experience +'"</i></p>');
				 }
			 },
			 error:function(error){
				console.log(error);
			}
		 });
			e.preventDefault();
});
return myPopup;
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
	var myPopup = L.DomUtil.create('div', 'infoWindow');
	myPopup.innerHTML = '<h1 class="head_sta">Winning Nation: <b>'+layer.feature.properties.name+'</b></h1><p><button type="button" class="btn btn-warning" data-toggle="modal" data-target="#myModal2" id="'+layer.feature.properties.name+'">View Experience</button></p>';
	$('.btn-warning', myPopup).on('click', function(e){
	var name = $(this).closest(".btn-warning").attr("id");
	var sent = name.toString();
	console.log(sent);
	$.ajax({
			 data: {
				 "functionname": "fetch",
				 "name" : sent
		 },
			 type: "POST",
			 url: "./control.php",
			 success: function(response){
				 response = $.parseJSON(response);
				 $('#myModal2').find(".modal-body").html("");
				 for (var i =0; i<response.length; i++){
					 $('#myModal2').find('.modal-body').append('<p>'+response[i].name+': <i>"'+response[i].experience +'"</i></p>');
				 }
			 },
			 error:function(error){
				console.log(error);
			}
		 });
			e.preventDefault();
});
return myPopup;
}).addTo(map);

}

$.getJSON('./jsons/2013_stadium.geojson', function(data){
	addDataToMap(data, mymap);
})

$.getJSON('./jsons/2013_participate.geojson', function(data){
	addCountryToMap(data, mymap);
})

$.getJSON('./jsons/2013_winner.geojson', function(data){
	addWinnerToMap(data, mymap);
})

}

function data_12(){

	mymap.eachLayer(function (layer) {
    mymap.removeLayer(layer);
	});

	L.tileLayer('https://api.tiles.mapbox.com/v4/{id}/{z}/{x}/{y}.png?access_token=pk.eyJ1IjoiYW5raXRhMTMyIiwiYSI6ImNqZnBhenl6NTExMXgzM3JxNWhjaGxnczEifQ.GJ09bkYuOB5TAeP0pmsuZg', {
		maxZoom: 18,
		id: 'mapbox.streets'
	}).addTo(mymap);

	function addDataToMap(data, map){
		var dataLayer = L.geoJson(data);
		dataLayer.bindPopup(function(layer){
			var myPopup = L.DomUtil.create('div', 'infoWindow');
			myPopup.innerHTML = '<h1 class="head_sta">'+layer.feature.properties.name+'</h1><h2 class="small_sta">'+layer.feature.properties.stadium+'<p class="tiny_sta">'+layer.feature.properties.define+'</p><p><button type="button" class="btn btn-warning" data-toggle="modal" data-target="#myModal2" id="'+layer.feature.properties.stadium+'">View Experience</button></p>';
			$('.btn-warning', myPopup).on('click', function(e){
	    var name = $(this).closest(".btn-warning").attr("id");
			var year = $('.year').attr("id");
			console.log(year);
			var sent = name.toString();
			console.log(sent);
	    $.ajax({
	         data: {
	           "functionname": "fetch",
	           "name" : sent
	       },
	         type: "POST",
	         url: "./control.php",
	         success: function(response){
						 response = $.parseJSON(response);
						 $('#myModal2').find(".modal-body").html("");
						 for (var i =0; i<response.length; i++){
							 $('#myModal2').find('.modal-body').append('<p>'+response[i].name+': <i>"'+response[i].experience +'"</i></p>');
						 }
	         },
	         error:function(error){
	          console.log(error);
	        }
	       });
	        e.preventDefault();
	  });
		return myPopup;
		}).addTo(map);
	}

function addCountryToMap(data, map){
L.geoJson(data, {
	style: function(feature){
		return{
			fillColor: "#932aba",
			fillOpacity: 0.7,
			stroke: true,
			color: "grey",
			weight: 2
		};
	}
}).bindPopup(function(layer){
	var myPopup = L.DomUtil.create('div', 'infoWindow');
	myPopup.innerHTML = '<h1 class="head_sta">Participating Nation: <b>'+layer.feature.properties.name+'</b></h1><p><button type="button" class="btn btn-warning" data-toggle="modal" data-target="#myModal2" id="'+layer.feature.properties.name+'">view Experience</button></p>';
	$('.btn-warning', myPopup).on('click', function(e){
	var name = $(this).closest(".btn-warning").attr("id");
	var sent = name.toString();
	console.log(sent);
	$.ajax({
			 data: {
				 "functionname": "fetch",
				 "name" : sent
		 },
			 type: "POST",
			 url: "./control.php",
			 success: function(response){
				 response = $.parseJSON(response);
				 $('#myModal2').find(".modal-body").html("");
				 for (var i =0; i<response.length; i++){
					 $('#myModal2').find('.modal-body').append('<p>'+response[i].name+': <i>"'+response[i].experience +'"</i></p>');
				 }
			 },
			 error:function(error){
				console.log(error);
			}
		 });
			e.preventDefault();
});
return myPopup;
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
	var myPopup = L.DomUtil.create('div', 'infoWindow');
	myPopup.innerHTML = '<h1 class="head_sta">Winning Nation: <b>'+layer.feature.properties.name+'</b></h1><p><button type="button" class="btn btn-warning" data-toggle="modal" data-target="#myModal2" id="'+layer.feature.properties.name+'">View Experience</button></p>';
	$('.btn-warning', myPopup).on('click', function(e){
	var name = $(this).closest(".btn-warning").attr("id");
	var sent = name.toString();
	console.log(sent);
	$.ajax({
			 data: {
				 "functionname": "fetch",
				 "name" : sent
		 },
			 type: "POST",
			 url: "./control.php",
			 success: function(response){
				 response = $.parseJSON(response);
				 $('#myModal2').find(".modal-body").html("");
				 for (var i =0; i<response.length; i++){
					 $('#myModal2').find('.modal-body').append('<p>'+response[i].name+': <i>"'+response[i].experience +'"</i></p>');
				 }
			 },
			 error:function(error){
				console.log(error);
			}
		 });
			e.preventDefault();
});
return myPopup;
}).addTo(map);

}

$.getJSON('./jsons/2012_stadium.geojson', function(data){
	addDataToMap(data, mymap);
})

$.getJSON('./jsons/2012_participate.geojson', function(data){
	addCountryToMap(data, mymap);
})

$.getJSON('./jsons/2012_winner.geojson', function(data){
	addWinnerToMap(data, mymap);
})

}

$(document).ready(function(){
	data_17();
});

$('#2017').click(function(){
	data_17();
});

$('#2015').click(function(){
	data_15();
});

$('#2013').click(function(){
	data_13();
});

$('#2012').click(function(){
	data_12();
});
