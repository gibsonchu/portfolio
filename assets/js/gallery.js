$(document).ready(function() {
	for (let info in PHOTOS_INFO) {
		info = PHOTOS_INFO[info];
		$("#carousel").append('<img src="' + info.imgSrc + '">');
	}

	selectFeaturedImage(0);
	
	$("#carousel img").click(function() {
		selectFeaturedImage($("#carousel img").index(this));
	})

	$('body').on('keydown', function(e) {
		if (e.which == 39) {
			viewNextPhoto();
		} else if (e.which == 37) {
			viewPrevPhoto();
		}
	});

	$(".carousel-control").click(function() {
		if ($(this).hasClass("prev")) {
			viewPrevPhoto();
		} else {
			viewNextPhoto();
		}
	});

	$(".img-info").hover(function() {
		$("#feature-img-container img").css("opacity", "0.5");
	}, function() {
		$("#feature-img-container img").css("opacity", "1");
	})
})

const selectFeaturedImage = (index) => {
	$(".selected").removeClass("selected");
	let image = $("#carousel img:eq(" + index + ")");
	let info = PHOTOS_INFO[index];
	$("#feature-img-container img").attr("src", $(image).attr("src"));
	$("#feature-img-container .img-title").text(info.title);
	$("#feature-img-container .img-date").text(info.date);
	$("#feature-img-container .img-caption").text(info.caption);
	$("#feature-img-container .img-camera").text(info.camera);
	$(image).addClass("selected");
	window.localStorage.setItem("imageIndex", index);
}

const viewNextPhoto = () => {
	let newIndex = parseInt(window.localStorage.getItem("imageIndex")) + 1;
	if (newIndex >= $("#carousel img").size()) {
		newIndex = 0;
	}
	selectFeaturedImage(newIndex);
}

const viewPrevPhoto = () => {
	let newIndex = parseInt(window.localStorage.getItem("imageIndex")) - 1;
	if (newIndex < 0) {
		newIndex = $("#carousel img").size() - 1;
	}
	selectFeaturedImage(newIndex);
}