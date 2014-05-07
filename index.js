/*
	index.js - for index.html
*/
/*
	make an id/class to the DOM element that holds the current comic page, 
	then refer to it in here and change on a mouselistener to a button/link
*/
window.onload = function() { 
	//alert( "welcome")
	$("#comic")
		.on("click", function() {
			// alert("You clicked it.");
			$("#page").attr({src: "./comic/2.png"});
	})
		
}