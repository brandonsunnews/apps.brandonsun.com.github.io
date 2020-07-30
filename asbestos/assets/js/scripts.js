$(function () {

  /* -------------------------------------
   GLOBAL VARIABLES
   --------------------------------------*/
  var nav = 80;
  var splash = 750 + nav;
  var NUM_CHAPTERS = 7;
  var bottom = {};

  /* -------------------------------------
   GET THE CURRENT CHAPTER
   --------------------------------------*/
  function getCurrentChapter() {
    var scroll = $(window).scrollTop();
    var currentChapter = 0;
    while (currentChapter < NUM_CHAPTERS && scroll >= Math.floor($(".chapter-"+(currentChapter+1)).offset().top - nav)) {
      currentChapter++;
    }
    return currentChapter;
  }

  /* -------------------------------------
   SET THE CURRENT TITLE
   --------------------------------------*/
  function updateTitle(currentChapter) {
    var title = 'Breaking faith';
    if (currentChapter == 0) {
      title = 'Breaking faith';
    } else {
      title = 'Chapter ' + currentChapter ;
    }
    $(".title").html(title);
  }

  /* -------------------------------------
   PROGRESS BAR
   --------------------------------------*/
  $(window).scroll(function () {
    var scroll = $(window).scrollTop();
    var documentHeight = $(document).height();
    var windowHeight = $(window).height();
    var scrollPercent = (scroll / (documentHeight - windowHeight)) * 100;
    var position = scrollPercent;
    $("progress").attr("value", position);
    updateTitle(getCurrentChapter());

	/* -------------------------------------
	 ADD CLASS DISABLED
	 --------------------------------------*/
    var currentChapter = getCurrentChapter();
    if (currentChapter >= 7) {
      $(".forward").addClass("disabled");
    } else {
      $(".forward").removeClass("disabled");
    }
  });

  /* -------------------------------------
   ARROW CAROUSEL
   --------------------------------------*/
  $(".backward").click(function () {
    var currentChapter = getCurrentChapter();
    if (currentChapter > 1) {
      currentChapter--;
      $("body").animate({
        scrollTop: ($(".chapter-" + currentChapter).offset().top - nav),
        complete: function() {
          updateTitle(currentChapter);
        }
      }, 1000);
    } else {
    	// Scroll to top when on Chapter #1
    	$("html, body").animate({ scrollTop: 0 }, "slow");
    }
  });

  $(".forward").click(function () {
    var currentChapter = getCurrentChapter();
    if (currentChapter < NUM_CHAPTERS) {
      currentChapter++;
    }

    $("body").animate({
      scrollTop: ($(".chapter-" + currentChapter).offset().top - nav),
      complete: function() {
        updateTitle(currentChapter);
      }
    }, 1000);
  });

   /*-------------------------------------
   REPLACE TABLE WITH IMAGE
   --------------------------------------*/
    //  if ($(window).width() < 860) {
    //     $(".chartOne").hide();
    //     $(".chartImage").removeClass("hidden");
    //  }
    // else {
    //    $(".chartImage").addClass("hidden");
    //    $(".chartOne").show();
    // }
   });
