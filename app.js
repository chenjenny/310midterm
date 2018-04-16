// document ready event
$(document).ready(function() {
	$('#query').on("keypress", function(event) {
		if (event.which == 13) {
			var offset = Math.round(Math.random() * 1000);
			var query = this.value;
			var key = "iAqAbqIuPD5ZN9uEq5v3phweMO2u9tda";
			var url = "http://api.giphy.com/v1/gifs/search?q="
						+ query
						+ "&api_key="
						+ key
						+ "&limit=20"
						+ "&offset="
						+ offset;
			
			$.getJSON(url, function(json) {
				console.log(json);
				document.getElementById('gifs').innerHTML = "";
				for (let i = 0; i < json.data.length; i++) {
					const img = json.data[i];
					if (img.images.downsized.url) {
						const imgElem = $('<img>')
							.attr('src', img.images.downsized.url);
					
						const imgContainer = $('<div>')
							.addClass('gif');
					
						imgContainer.append(imgElem);
					
						 $('#gifs').append(imgContainer);
					}
				}
			});
		}
	});
});





