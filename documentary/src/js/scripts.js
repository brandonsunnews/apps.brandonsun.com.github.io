$(function(){function o(){document.getElementById("video--header").controls=!1}function e(){$(window).width()<=480?$(".btn-top span").fadeOut():$(".btn-top span").fadeIn()}function t(){$(".credits").fadeOut(250),$(".share").fadeOut(250),$(".black").fadeOut(500),$(".cross").fadeOut(500)}$('a[href*="#"]:not([href="#"])').click(function(){if(location.pathname.replace(/^\//,"")==this.pathname.replace(/^\//,"")&&location.hostname==this.hostname){var o=$(this.hash);if(o=o.length?o:$("[name="+this.hash.slice(1)+"]"),o.length)return $("html, body").animate({scrollTop:o.offset().top},1e3),!1}}),o(),e(),$(window).on("resize",function(){e()}),$(".btn-share").on("click",function(){function o(){$("body").css("overflow-y","hidden")}$(".black").fadeIn(),$(".share").fadeIn(),$(".cross").fadeIn(1e3),o()}),$(".share-icon").on("mouseover",function(){$(this).find(".icon-share").css("color","#111"),$(this).find(".share__name").css("color","#111")}),$(".share-icon").on("mouseout",function(){$(this).find(".icon-share").css("color","#fff"),$(this).find(".share__name").css("color","#ffdc00")}),$(".btn-credits").on("click",function(){function o(){$("body").css("overflow-y","hidden")}$(".black").fadeIn(),$(".credits").fadeIn(),$(".credits").addClass("scrolling"),$(".cross").fadeIn(1e3),setTimeout(function(){t()},27e3),o()}),$(document).keydown(function(o){function e(){$("body").css("overflow-y","auto")}27==o.which&&(t(),e())}),$(".cross").on("click",function(){function o(){$("body").css("overflow-y","auto")}t(),o()}),$(".swipebox").swipebox(),$(window).on("scroll",function(){var o=$(window).scrollTop(),e=$(".section--elmer").offset().top,t=$(".section--les").offset().top,s=$(".section--jack").offset().top,c=$(".section--casson").offset().top,n=$(".section--john").offset().top,a=$(".section--bruno").offset().top;o>=e?($(".carousel").fadeIn(),$(".btn-top").fadeIn(),$(".last").css("padding-bottom","100px")):($(".carousel").fadeOut(),$(".btn-top").fadeOut(),$(".last").css("padding-bottom","0px")),o>=e&&t>o?($(".carousel__image").attr("src","src/img/circle-elmer.jpg"),$(".carousel__title").html("Precursor to D-Day"),$(".carousel__name").html("Elmer Cole")):o>=t&&s>o?($(".carousel__image").attr("src","src/img/circle-les.jpg"),$(".carousel__title").html("D-Day Plus Seven"),$(".carousel__name").html("Les Downing")):o>=s&&c>o?($(".carousel__image").attr("src","src/img/circle-jack.jpg"),$(".carousel__title").html("Luck of the Draw"),$(".carousel__name").html("Jack Houston")):o>=c&&n>o?($(".carousel__image").attr("src","src/img/circle-casson.jpg"),$(".carousel__title").html("Dangerous Work"),$(".carousel__name").html("Geoffrey Casson")):o>=n&&a>o?($(".carousel__image").attr("src","src/img/circle-roseveare.jpg"),$(".carousel__title").html("A Fateful Return"),$(".carousel__name").html("John Roseveare")):o>=a&&($(".carousel__image").attr("src","src/img/circle-bruno.jpg"),$(".carousel__title").html("Worthy of Honour"),$(".carousel__name").html("Bruno Burnichon"))})});