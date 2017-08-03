if (navigator.geolocation) {
	navigator.geolocation.getCurrentPosition(function(position) {
		var lat = position.coords.latitude;
		var long = position.coords.longitude;
		var wCode = "";
		var temp = "";
		//default units from api are metric
		var tUnit = "C"
		$.getJSON(
			"https://fcc-weather-api.glitch.me/api/current?lat=" + lat + "&lon=" + long,
			function(json) {
				$("#myLoc").html(json.name + ", " + json.sys.country);
				var temp = json.main.temp;
				$("#myTemp").text(temp + " C");
				
				// Change the temperature units
				$("#myTemp").on('click', function() {
					//if C >>> F 
					if(tUnit === "C") { 
						temp = parseFloat(temp) * 1.8 + 32;
						tUnit = "F";
					} else { 
						temp = (parseFloat(temp) - 32) / 1.8;
						tUnit = "C";
					}
					// Render the html
					$("#myTemp").text(temp.toFixed(2) + " " + tUnit);

				});
				// $("#myConditions").html(json.weather[0].main + ", " + json.weather[0].description);
				$("#myConditions").html(json.weather[0].description);
				//get weather condition string to make compairison for custom icons
				iCond = json.weather[0].id;

				// Fall back on default icons if no match is found
				if (getWeatherIcon(iCond) === -1) {
					$("#icon").html("<img src=" + json.weather[0].icon + ">");
				} else {
					// Use my included icon pack
					$("#icon").html(getWeatherIcon(iCond));
				}
			}
		);
	});
} else {
	$("#myLoc").html("Cannot Determine Location");
}



function getWeatherIcon(wc) {
	var wCode = parseInt(wc);

	// Thunderstorm
	if (wCode >= 200 && wCode <= 290) {
		return "<div class='icon thunder-storm'>\
  					<div class='cloud'></div>\
  					<div class='lightning'>\
   				    	<div class='bolt'></div>\
    					<div class='bolt'></div>\
  					</div>\
				</div>";
	} else if ((wCode >= 300 && wCode <= 399) || (wCode >= 500 && wCode <= 599)) {
		// Rain
		return "<div class='icon rainy'>\
  					<div class='cloud'></div>\
  					<div class='rain'></div>\
				</div>";
	} else if (wCode >= 600 && wCode <= 699) {
		// Snow
		return '<div class="icon flurries">\
				    <div class="cloud"></div>\
				    <div class="snow">\
				        <div class="flake"></div>\
				        <div class="flake"></div>\
				  </div>\
				</div>';
	} else if (wCode === 800) {
		// Clear
		return '<div class="icon sunny">\
				    <div class="sun">\
				   	     <div class="rays"></div>\
				    </div>\
				</div>';
	} else if (wCode > 800 && wCode < 810) {
		// Cloudy
		return '<div class="icon cloudy">\
				    <div class="cloud"></div>\
				    <div class="cloud"></div>\
				</div>';
	} else
		// Fall back on default icon
		return -1;
}
