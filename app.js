// document ready event
$(document).ready(function () {

	// Noun Gif
	$('#submit').on("click", function (event) {
		
		var key = "iAqAbqIuPD5ZN9uEq5v3phweMO2u9tda";
		var nounQuery = document.getElementById("queryOne").value;
		// verb 
		var verbQuery = document.getElementById("queryTwo").value;
		// adj
		var adjQuery = document.getElementById("queryThree").value;

		var nounUrl = "https://api.giphy.com/v1/gifs/random?tag=" +
			nounQuery +
			"&api_key=" +
			key
			//Limits the # of gif you want shown, currently 1 gif per section
			+
			"&limit=1";
		
		var verbUrl = "https://api.giphy.com/v1/gifs/random?tag" +
			verbQuery +
			"&api_key=" +
			key
			//Limits the # of gif you want shown, currently 1 gif per section
			+
			"&limit=1";
		
			var adjUrl = "https://api.giphy.com/v1/gifs/random?tag=" +
			adjQuery +
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
					console.log(nounData)
					const nounImg = $('<img>')
							.attr('src', nounData.data.images.downsized.url);
					const imgContainerOne = $('<div>')
							.addClass('gifone');
					imgContainerOne.append(nounImg);
					$('#gifsOne').append(imgContainerOne);

					const verbImg = $('<img>')
							.attr('src', verbData.data.images.downsized.url);
					const imgContainerTwo = $('<div>')
							.addClass('giftwo');
					imgContainerTwo.append(verbImg);
					$('#gifsTwo').append(imgContainerTwo);

					const adjImg = $('<img>')
							.attr('src', adjData.data.images.downsized.url);
					const imgContainerThree = $('<div>')
							.addClass('gifthree');
					imgContainerThree.append(adjImg);
					$('#gifsThree').append(imgContainerThree);
			
				});
			});
		});
	});
});


var audio = document.getElementById("tracks"); 
	function playAudio() {
			audio.play();
		}

	








