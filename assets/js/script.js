$(document).ready(function() {
	pickFeaturedImage();
	$(window).resize(adjustSizing);
	$("#feature-img-container img, .img-info, #lightbox-overlay").click(toggleLightboxView);
	$("#nav-toggle").click(toggleMobileNav);
});

// TODO: Edit logic so that featured images on index.html will not necessarily be from a hard-coded array.
const pickFeaturedImage = () => {
	if (document.getElementById("carousel")) {
		$("#feature-img-container img").attr("src", $("#carousel img").first().attr("src"));
	} else if (!document.getElementById("about-content")) {
		let images = ["assets/img/curt.jpg", "assets/img/sunglasses.jpg", "assets/img/balls.jpg", "assets/img/tahoe.jpg"]; 
		const index = Math.floor(Math.random() * Math.floor(images.length));
		$("#feature-img-container img").attr("src", images[index]);	
	}

	$("#feature-img-container img").load(function() {
		adjustSizing();
		$(".img-info").fadeIn();
	});
}

const adjustSizing = () => {
	if (!document.getElementById("about-content")) {
		$(".img-info").css("width", $("#feature-img-container img").width() - 36 + "px");
	}
}

const toggleLightboxView = () => {
	if ($("body").hasClass("lightbox")) {
		$("body").removeClass("lightbox");
		$("#lightbox-overlay").fadeOut();
		$("#feature-img-container img").removeClass("lightbox");
		adjustSizing();
	} else if (document.getElementById("lightbox-overlay")) {
		$("body").addClass("lightbox");
		$("#lightbox-overlay").fadeIn();
		$("#feature-img-container img").addClass("lightbox");
	}
}

const toggleMobileNav = () => {
	if ($("nav").hasClass("open")) {
		$("#nav-toggle").html("<div class='ham'></div><div class='ham'></div><div class='ham'></div>");
	} else {
		$("#nav-toggle").html("X");
	}
	$("nav").toggleClass("open");
	$("nav").toggleClass("close");
}

