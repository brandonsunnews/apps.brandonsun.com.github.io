$(function(){
	/*-------------------------------------
	PROGRESS BAR
	--------------------------------------*/
	$(window).scroll(function () {
		var scroll = $(window).scrollTop();
		var documentHeight = $(document).height();
		var windowHeight = $(window).height();
		var scrollPercent = (scroll / (documentHeight - windowHeight)) * 100;
		var position = scrollPercent;
		$("progress").attr("value", position);
	}); // End of window scroll function

	/*-------------------------------------
	AUDIO
	--------------------------------------*/

	// Actual individual audio files
	var bathtub = document.getElementById("bathtub");
	var behind = document.getElementById("behind");
	var curious = document.getElementById("curious");
	var haystack = document.getElementById("haystack");
	var wishes = document.getElementById("wishes");

	// Position of the blockquotes
	var bathtubOffset = $(".bathtub").offset();
	var behindOffset = $(".behind").offset();
	var curiousOffset = $(".curious").offset();
	var haystackOffset = $(".haystack").offset();
	var wishesOffset = $(".wishes").offset();

	// Switches icon to default, resets audio
	$(window).scroll(function(){
		scroll = $(window).scrollTop(); // Update scroll

		if (scroll >= bathtubOffset.top && bathtub.paused == true) {
			$(".bathtub").removeClass("fa-volume-off");
			$(".bathtub").addClass("fa-volume-up");
			bathtub.currentTime = 0; // Reset audio clip to the beginning
		} else if (scroll >= behindOffset.top && behind.paused == true) {
			$(".behind").removeClass("fa-volume-off");
			$(".behind").addClass("fa-volume-up");
			behind.currentTime = 0;
		} else if (scroll >= curiousOffset.top && curious.paused == true) {
			$(".curious").removeClass("fa-volume-off");
			$(".curious").addClass("fa-volume-up");
			curious.currentTime = 0;
		} else if (scroll >= haystackOffset.top && haystack.paused == true) {
			$(".haystack").removeClass("fa-volume-off");
			$(".haystack").addClass("fa-volume-up");
			haystack.currentTime = 0;
		} else if (scroll >= wishesOffset.top && wishes.paused == true) {
			$(".wishes").removeClass("fa-volume-off");
			$(".wishes").addClass("fa-volume-up");
			wishes.currentTime = 0;
		}
	});

	// Play and pause on click
	$(".bathtub").click(function(){
		if (bathtub.paused == true) {
			$(".bathtub").removeClass("fa-volume-off");
			$(".bathtub").addClass("fa-volume-up");
			bathtub.play();
		} else {
			$(".bathtub").removeClass("fa-volume-up");
			$(".bathtub").addClass("fa-volume-off");
			bathtub.pause();
		}
	});

	$(".behind").click(function(){
		if (behind.paused == true) {
			$(".behind").removeClass("fa-volume-off");
			$(".behind").addClass("fa-volume-up");
			behind.play();
		} else {
			$(".behind").removeClass("fa-volume-up");
			$(".behind").addClass("fa-volume-off");
			behind.pause();
		}
	});

	$(".curious").click(function(){
		if (curious.paused == true) {
			$(".curious").removeClass("fa-volume-off");
			$(".curious").addClass("fa-volume-up");
			curious.play();
		} else {
			$(".curious").removeClass("fa-volume-up");
			$(".curious").addClass("fa-volume-off");
			curious.pause();
		}
	});

	$(".haystack").click(function(){
		if (haystack.paused == true) {
			$(".haystack").removeClass("fa-volume-off");
			$(".haystack").addClass("fa-volume-up");
			haystack.play();
		} else {
			$(".haystack").removeClass("fa-volume-up");
			$(".haystack").addClass("fa-volume-off");
			haystack.pause();
		}
	});

	$(".wishes").click(function(){
		if (wishes.paused == true) {
			$(".wishes").removeClass("fa-volume-off");
			$(".wishes").addClass("fa-volume-up");
			wishes.play();
		} else {
			$(".wishes").removeClass("fa-volume-up");
			$(".wishes").addClass("fa-volume-off");
			wishes.pause();
		}
	});
}); // End of document ready