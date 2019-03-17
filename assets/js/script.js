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
		"assets/img/index/19.jpg","assets/img/index/20.jpg","assets/img/index/21.jpg",
		"assets/img/index/22.jpg","assets/img/index/23.jpg","assets/img/index/24.jpg",
		"assets/img/index/25.jpg","assets/img/index/26.jpg","assets/img/index/27.jpg",
		"assets/img/index/28.jpg","assets/img/index/29.jpg","assets/img/index/30.jpg",
		"assets/img/index/31.jpg","assets/img/index/32.jpg","assets/img/index/33.jpg",
		"assets/img/index/34.jpg","assets/img/index/35.jpg","assets/img/index/36.jpg",
		"assets/img/index/37.jpg","assets/img/index/38.jpg","assets/img/index/39.jpg",
		"assets/img/index/40.jpg"]; 
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

