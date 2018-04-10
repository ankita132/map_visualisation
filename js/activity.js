$(document).ready(function(){
	$('.data').on('click', function(){
		$('#map').fadeOut('fast');
		$('.form-data').fadeIn('fast');
	});
	$('.year').on('click', function(){
		$('#map').fadeIn('fast');
		$('.form-data').fadeOut('fast');
	});
		
	$('#inputyear').on('change', function() {
   		var year = $(this).val();
   		if(year == "2017"){
		$.getJSON('./jsons/2017_participate.geojson', function(data){
			for(var i = 0; i< data.features.length; i++){   
			   $('#inputcountry').append('<option value="">' + data.features[i].properties.name + '</option>');
			}
			});
		$.getJSON('./jsons/2017_winner.geojson', function(data){
			for(var i = 0; i< data.features.length; i++){   
			   $('#inputcountry').append('<option value="">' + data.features[i].properties.name + '</option>');
			}
			});
		$.getJSON('./jsons/2017_stadium.geojson', function(data){
			for(var i = 0; i< data.features.length; i++){   
			   $('#inputstadium').append('<option value="">' + data.features[i].properties.name + '</option>');
			}
			});
	}

	if(year == "2015"){
		$.getJSON('./jsons/2015_participate.geojson', function(data){
			for(var i = 0; i< data.features.length; i++){   
			   $('#inputcountry').append('<option value="">' + data.features[i].properties.name + '</option>');
			}
			});
		$.getJSON('./jsons/2015_winner.geojson', function(data){
			for(var i = 0; i< data.features.length; i++){   
			   $('#inputcountry').append('<option value="">' + data.features[i].properties.name + '</option>');
			}
			});
		$.getJSON('./jsons/2015_stadium.geojson', function(data){
			for(var i = 0; i< data.features.length; i++){   
			   $('#inputstadium').append('<option value="">' + data.features[i].properties.name + '</option>');
			}
			});
	}
	});
	
});