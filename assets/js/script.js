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
		let images = ["assets/img/index/1.jpg","assets/img/index/2.jpg","assets/img/index/3.jpg",
		"assets/img/index/4.jpg","assets/img/index/5.jpg","assets/img/index/6.jpg",
		"assets/img/index/7.jpg","assets/img/index/8.jpg","assets/img/index/9.jpg",
		"assets/img/index/10.jpg","assets/img/index/11.jpg","assets/img/index/12.jpg",
		"assets/img/index/13.jpg","assets/img/index/14.jpg","assets/img/index/15.jpg",
		"assets/img/index/16.jpg","assets/img/index/17.jpg","assets/img/index/18.jpg",
		"assets/img/index/19.jpg","assets/img/index/20.jpg",]; 
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

