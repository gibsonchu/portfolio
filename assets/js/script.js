$(document).ready(function() {
	pickFeaturedImage();
	$(window).resize(adjustSizing);
});

const pickFeaturedImage = () => {
	const images = ["curt.jpg", "sunglasses.jpg", "balls.jpg", "tahoe.jpg"]; 
	const index = Math.floor(Math.random() * Math.floor(images.length));
	$("#feature-img-container img").attr("src", "assets/img/" + images[index]);
	$("#feature-img-container img").load(adjustSizing);
}

const adjustSizing = () => {
	$(".img-info").css("width", $("#feature-img-container img").width() - 36 + "px");
}

