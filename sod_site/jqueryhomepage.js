$(document).ready(function () {
	"use strict";

	$(".dd").hide();
	//hides all elements with class "dd"

	$(".dropdown").hover(function () {
		$(".dd").toggle();
	});
	//when hover over dropdown class to toggle dd class
	var imageName = ["images/sod-design-nmims-2018-1.jpg", "images/sod-design-nmims-2018-2.jpg", "images/sod-design-nmims-2018-3.jpg", "images/sod-design-nmims-2018-4.jpg", "images/sod-design-nmims-2018-5.jpg", "images/sod-design-nmims-2018-6.jpg"];
	//	images added in an array
	var num = 0;
	//variable intiated "num"
	$("#slide").click(function () {
		$("#slide").attr("src", imageName[num]);
		//attribute "src" of image changed
		num++;

		if (num > 5) {
			num = 0;
		}
	});

	$(".content").mouseenter(function () {

		$("h1").css("border-bottom", "12px");
	});
	//mouse enters the element with class "content" give 12px bottom border
	$(".content").mouseleave(function () {

		$("h1").css("text-decoration", "none");
	});
	//remove border
	$(".para").mouseenter(function () {
		$(".para").css("border-color", "red");
	});
	//change border color t red
	$(".para").mouseleave(function () {
		$(".para").css("border-color", "white");
	});
	//	change border color to white
});
