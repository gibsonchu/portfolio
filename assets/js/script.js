$(document).ready(function() {
	pickFeaturedImage();
	$(window).resize(adjustSizing);
	$("#feature-img-container, #lightbox-overlay").click(toggleLightboxView);
});

// TODO: Edit logic so that featured images on index.html will not necessarily be from a hard-coded array.
const pickFeaturedImage = () => {
	if (document.getElementById("carousel")) {
		$("#feature-img-container img").attr("src", $("#carousel img").first().attr("src"));
	} else {
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
	$(".img-info").css("width", $("#feature-img-container img").width() - 36 + "px");
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


