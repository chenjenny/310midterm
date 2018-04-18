// document ready event
$(document).ready(function () {

	// Noun Gif
	$('#submit').on("click", function (event) {
		
		var key = "iAqAbqIuPD5ZN9uEq5v3phweMO2u9tda";
		var nounQuery = document.getElementById("queryOne").value;
		// verb 
		var verbQuery = document.getElementById("queryOne").value;
		// adj
		var adjectiveQuery = document.getElementById("queryOne").value;

		var nounUrl = "https://api.giphy.com/v1/gifs/search?q=" +
			nounQuery +
			"&api_key=" +
			key
			//Limits the # of gif you want shown, currently 1 gif per section
			+
			"&limit=1";
		
		var verbUrl = "https://api.giphy.com/v1/gifs/search?q=" +
			nounQuery +
			"&api_key=" +
			key
			//Limits the # of gif you want shown, currently 1 gif per section
			+
			"&limit=1";
		
			var adjectiveUrl = "https://api.giphy.com/v1/gifs/search?q=" +
			nounQuery +
			"&api_key=" +
			key
			//Limits the # of gif you want shown, currently 1 gif per section
			+
			"&limit=1";
		
		$.getJSON(nounUrl, function (nounData) {
			$.getJSON(verbUrl, function (verbData) {
				$.getJSON(adjUrl, function (adjData) {
					document.getElementById('gifsOne').innerHTML = "";
					document.getElementById('gifsTwo').innerHTML = "";
					document.getElementById('gifsThree').innerHTML = "";
					
					const nounImg = $('<img>')
							.attr('src', nounData.data.images[0].downsized.url);
					const imgContainertwo = $('<div>')
							.addClass('giftwo');
					imgContainertwo.append(nounImg);
					$('#gifsTwo').append(imgContainertwo);
			
				});
			});
		});
	});
});
