$(document).ready(function() {
	pickFeaturedImage();
	$("#feature-img-container img, #lightbox-overlay").click(toggleLightboxView);
	$("#nav-toggle").click(toggleMobileNav);
	$(".home #feature-img-container img").click(pickFeaturedImage);
});

// TODO: Edit logic so that featured images on index.html will not necessarily be from a hard-coded array.
const pickFeaturedImage = () => {
	if (document.getElementById("carousel")) {
		$("#feature-img-container img").attr("src", $("#carousel img").first().attr("src"));
	} else if (!document.getElementById("about-content")) {
		let images = ["assets/img/7J5A0477.jpg", "assets/img/7J5A0484.jpg", "assets/img/7J5A1122.jpg", "assets/img/7J5A1218.jpg", 
		"assets/img/7J5A1588.jpg", "assets/img/7J5A1654.jpg", "assets/img/7J5A1889.jpg", "assets/img/7J5A2060.jpg", "assets/img/7J5A2172.jpg",
		"assets/img/7J5A2179.jpg", "assets/img/7J5A2758.jpg", "assets/img/7J5A1110.jpg", "assets/img/7J5A1697.jpg",
		"assets/img/7J5A2778.jpg", "assets/img/7J5A2780.jpg", "assets/img/7J5A2856.jpg", "assets/img/7J5A2947.jpg", "assets/img/7J5A2679.jpg",
		"assets/img/7J5A9463.jpg", "assets/img/DSCF7723.jpg", "assets/img/DSCF7944.jpg", "assets/img/DSCF8016.jpg", "assets/img/GIB_2457.jpg",
		"assets/img/GIBS2577.jpg", "assets/img/GIBS2604.jpg", "assets/img/GIBS2709.jpg", "assets/img/GIBS6242.jpg", "assets/img/GIBS2381.jpg"]; 
		const index = Math.floor(Math.random() * Math.floor(images.length));
		$("#feature-img-container img").attr("src", images[index]);	
	}
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

const toggleMobileNav = () => {
	if ($("nav").hasClass("open")) {
		$("#nav-toggle").html("<div class='ham'></div><div class='ham'></div><div class='ham'></div>");
	} else {
		$("#nav-toggle").html("X");
	}
	$("nav").toggleClass("open");
	$("nav").toggleClass("close");
}

