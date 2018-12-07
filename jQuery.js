$(document).ready(function () {
	"use strict";

//  effect after button click	
	
	$('#btt').click(function () {

		$("html,body").animate({ // applying effect only to html and body
			scrollTop: 0 // scroll till top of the page
		}, 600);
	});

//  style for button

	$('#btt').mouseenter(function () {

		$(this).css("background-color", "coral", "color", "white");
		$(this).css("color", "white");
		$(this).css("border", "2px solid coral"); // color and boreder changed
	});

	$('#btt').mouseleave(function () {

		$(this).css("background-color", "white");
		$(this).css("color", "black");
		$(this).css("border", "2px solid black"); // color and border restored
	});

	
	// animation for home page
	
	$('#page1').mouseenter(function(){
		
		$('.homewall').css("background-image","url(homeimages/project_image.jpg)");
		
	});
	$('#page2').mouseenter(function(){
		
		$('.homewall').css("background-image","url(homeimages/youtube_image.jpg)");
		
	});
	$('#page3').mouseenter(function(){
		
		$('.homewall').css("background-image","url(homeimages/hc_image.jpg)");
		
	});
	$('#page4').mouseenter(function(){
		
		$('.homewall').css("background-image","url(homeimages/about_image.jpg)");
		
	});
	$('#sitename').mouseenter(function(){
		
		$('.homewall').css("background-image","url(homeimages/home_image.jpg)");
		
	});
	
	
//	animation for images: change the backgroung image url
	
	$('#shreyaimg').mouseenter(function () {

		$(this).css("background-image", "url(projects/DSC_0086copycopy.jpg)");
	});
	$('#shreyaimg').mouseleave(function () {

		$(this).css("background-image", "url(projects/DSC_0086.jpg)");
	});
	$('#asteroid').mouseenter(function () {

		$(this).css("background-image", "url(projects/1copy.jpg)");
	});
	$('#asteroid').mouseleave(function () {

		$(this).css("background-image", "url(projects/1.png)");
	});
	$('#jwp').mouseenter(function () {

		$(this).css("background-image", "url(projects/JhonWickcopy.jpg)");
	});
	$('#jwp').mouseleave(function () {

		$(this).css("background-image", "url(projects/JhonWick.png)");
	});
	$('#dgbc').mouseenter(function () {

		$(this).css("background-image", "url(projects/bcsample3copy.jpg)");
	});
	$('#dgbc').mouseleave(function () {

		$(this).css("background-image", "url(projects/bcsample3.jpg)");
	});
	$('#areobc').mouseenter(function () {

		$(this).css("background-image", "url(projects/bcsampleaeriocopy.jpg)");
	});
	$('#areobc').mouseleave(function () {

		$(this).css("background-image", "url(projects/bcsampleaerio.jpg)");
	});
	$('#can').mouseenter(function () {

		$(this).css("background-image", "url(projects/4copy.jpg)");
	});
	$('#can').mouseleave(function () {

		$(this).css("background-image", "url(projects/4.png)");
	});
	$('#alh').mouseenter(function () {

		$(this).css("background-image", "url(projects/alienwareMockupscopy.jpg)");
	});
	$('#alh').mouseleave(function () {

		$(this).css("background-image", "url(projects/alienwareMockups.jpg)");
	});
	$('#abc').mouseenter(function () {

		$(this).css("background-image", "url(projects/5copy.jpg)");
	});
	$('#abc').mouseleave(function () {

		$(this).css("background-image", "url(projects/5.png)");
	});
	$('#travelphoto').mouseenter(function () {

		$(this).css("background-image", "url(projects/IMG_5993copy.jpg)");
	});
	$('#travelphoto').mouseleave(function () {

		$(this).css("background-image", "url(projects/IMG_5993.jpg)");
	});
	$('#nyc').mouseenter(function () {

		$(this).css("background-image", "url(projects/3copy.jpg)");
	});
	$('#nyc').mouseleave(function () {

		$(this).css("background-image", "url(projects/3.png)");
	});
	$('#awl').mouseenter(function () {

		$(this).css("background-image", "url(projects/2copy.jpg)");
	});
	$('#awl').mouseleave(function () {

		$(this).css("background-image", "url(projects/2.png)");
	});
	$('#sod_site').mouseenter(function () {

		$(this).css("background-image", "url(projects/6copy.jpg)");
	});
	$('#sod_site').mouseleave(function () {

		$(this).css("background-image", "url(projects/6.png)");
	});
	

});







// JavaScript Document
