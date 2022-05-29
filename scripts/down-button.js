// Code for the down button in the front page

$(window).scroll(function () {
	if ($(this).scrollTop() > 300) {
		$(".bounce").hide(1000);
	} else {
		$(".bounce").show(1000);
	}
});

$(document).ready(function () {
	$("#about-me-link,#bounce").each(function () {
		$(this).on("click", function (event) {
			event.preventDefault();
			var hash = this.hash;
			$("html, body").animate(
				{
					scrollTop: $(hash).offset().top,
				},
				800,
				function () {
					window.location.hash = hash;
				}
			);
		});
	});
});

// for the my-navbar
$(document).ready(function () {
	var scroll_pos = 0;
	$(document).scroll(function () {
		scroll_pos = $(this).scrollTop();
		if (scroll_pos > $(".page").height() - $(".my-navbar").height()) {
			$("#my-navbar").css("background-color", "rgba(0, 0, 0, 1)");
		} else {
			$("#my-navbar").css("background-color", "rgba(255, 255, 255, 0.1)");
		}
	});
	$(document).scroll();
});
