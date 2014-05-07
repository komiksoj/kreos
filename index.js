/*
	index.js - for index.html
*/
window.onload = function() {
	var page = 1;
	$("#comic").find("img")
		.on("click", function() {
			page = page + 1;
			if (page == 3)
				page = 1;
			$("img").attr({src: "./comic/" + page + ".png"});
	})
		
}