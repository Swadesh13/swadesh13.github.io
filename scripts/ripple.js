$(".my-grid-item").click(function (e) {
	// Remove any old one
	$(".my-ripple").remove();

	// Setup
	var buttonWidth = $(this).width(),
		buttonHeight = $(this).height();

	// Add the element
	$(this).prepend("<span class='my-ripple'></span>");

	// Make it round!
	if (buttonWidth >= buttonHeight) {
		buttonHeight = buttonWidth;
	} else {
		buttonWidth = buttonHeight;
	}

	// Get the center of the element
	var x = e.pageX - buttonWidth / 2;
	var y = e.pageY - buttonHeight / 2;

	// Add the my-ripples CSS and start the animation
	$(".my-ripple")
		.css({
			width: buttonWidth,
			height: buttonHeight,
			top: y + "px",
			left: x + "px",
		})
		.addClass("my-rippleEffect");
});
