$(document).ready(function() {
	pickFeaturedImage();
	$(window).resize(adjustSizing);
	$("#feature-img-container, #lightbox-overlay").click(toggleLightboxView);

	$("#carousel img").click(function() {
		selectFeaturedImage(this);
	})
});

const pickFeaturedImage = () => {
	const images = ["curt.jpg", "sunglasses.jpg", "balls.jpg", "tahoe.jpg"]; 
	const index = Math.floor(Math.random() * Math.floor(images.length));
	$("#feature-img-container img").attr("src", "assets/img/" + images[index]);
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
	} else if (document.getElementById("lightbox-overlay")) {
		$("body").addClass("lightbox");
		$("#lightbox-overlay").fadeIn();
		$("#feature-img-container img").addClass("lightbox");
	}
}

const selectFeaturedImage = (image) => {
	$("#feature-img-container img").attr("src", $(image).attr("src"));
}
