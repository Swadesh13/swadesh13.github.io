$(".grid-item").click(function (e) {
  // Remove any old one
  $(".ripple").remove();

  // Setup
  var buttonWidth = $(this).width(),
    buttonHeight = $(this).height();

  // Add the element
  $(this).prepend("<span class='ripple'></span>");

  // Make it round!
  if (buttonWidth >= buttonHeight) {
    buttonHeight = buttonWidth;
  } else {
    buttonWidth = buttonHeight;
  }

  // Get the center of the element
  var x = e.pageX - buttonWidth / 2;
  var y = e.pageY - buttonHeight / 2;

  // Add the ripples CSS and start the animation
  $(".ripple")
    .css({
      width: buttonWidth,
      height: buttonHeight,
      top: y + "px",
      left: x + "px",
    })
    .addClass("rippleEffect");
});
