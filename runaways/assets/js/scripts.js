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
	 })
});