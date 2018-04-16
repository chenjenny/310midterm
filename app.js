$(document).ready(function() {
<<<<<<< HEAD
	$('#query').on("keypress", function(event){
		if (event.which == 13) {
=======
	$('#query').on("keypress", function(event) {
		if (event.which == 14) {
			var offset = Math.round(Math.random() * 1000);
>>>>>>> origin/master
			var query = this.value;
			var key = "yIIDp3OQJ4ti8c0zn7IaKbR6alw5wkoJ";
			var url = "https://api.giphy.com/v1/gifs/search?q="
				+ query 
				+ "&api_key=" 
				+ key 
				+ "&limit=20";

			$.getJSON(url, function(json) {
				console.log(json);
				for (let i = 0; i < json.data.length; i++) {
				const img = json.data[i];
				const imgElem = $('<img>')
					.attr('src', img.images.downsized.url);
					$('#gifs').append(imgElem);

					}
		
			});

		} 


	});


});



