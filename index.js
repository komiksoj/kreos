/*
	index.js - for index.html
*/
window.onload = function() {
	var page = 1;
	$("#comic").find("img")
		.on("click", function() {
			page++;
			if (page == 3)
				page = 1;
			pageChange(page);
	})

	$("body")
		.keyup (function(event) {
			if (event.which == 39) {
				page++;
				if (page == 3)
					page = 1;
				pageChange(page);
			}
			if (event.which == 37) {
				page--;
				if (page == 0)
					page = 2;
				pageChange(page);
			}
	})

	function pageChange(page) {
		$("img:first").attr({src: "./comic/" + page + ".png"});
	}
}

