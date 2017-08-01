if(navigator.geolocation){
	navigator.geolocation.getCurrentPosition(function(position) {
		var lat = position.coords.latitude;
		var long = position.coords.longitude;
		$.getJSON("https://fcc-weather-api.glitch.me/api/current?lat=" + lat +  "&lon=" + long, function(json) {
			$("#myLoc").html(json.name + ", " + json.sys.country);
			$("#myTemp").html(json.main.temp + " Celsius");
			// $("#myConditions").html(json.weather[0].main + ", " + json.weather[0].description);
			$("#myConditions").html(json.weather[0].description);
			$("#icon").html("<img src=" + json.weather[0].icon + ">")
		});
		
	});
} else {
	$("#myLoc").html("Cannot Determine Location");
}