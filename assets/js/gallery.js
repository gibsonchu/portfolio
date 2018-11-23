$(document).ready(function() {
	for (let info in PHOTOS_INFO) {
		info = PHOTOS_INFO[info];
		$("#carousel").append('<img src="' + info.imgSrc + '">');
	}

	$("#carousel img").click(function() {
		selectFeaturedImage(this);
	})
})

const selectFeaturedImage = (image) => {
	let index = $("#carousel img").index(image);
	let info = PHOTOS_INFO[index]
	$("#feature-img-container img").attr("src", $(image).attr("src"));
	$("#feature-img-container .img-title").text(info.title);
	$("#feature-img-container .img-date").text(info.date);
	$("#feature-img-container .img-caption").text(info.caption);
	$("#feature-img-container .img-camera").text(info.camera);
}