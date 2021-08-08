var currentTime = new Date().getHours();
console.log(currentTime);
function timeCheck() {
    if (currentTime > 18 || currentTime < 6) {
      document.documentElement.classList.add('night');
    }
}
timeCheck();

function callEveryHour() {
    setInterval(timeCheck(), 1000 * 60 * 60);
}

document.addEventListener("DOMContentLoaded", function(event) { 
gsap.registerPlugin(CSSRulePlugin, ScrollTrigger);

	let tween = gsap.to("#house", {scale:"2", transformOrigin:"center center"}),
	    st = ScrollTrigger.create({
	    	trigger: "footer",
	        start: "top -50px",
        	end: "+=100",
	        pin: false, 
	        ease: "power1.inOut",
	        toggleActions: "restart none none reverse",
	        end: "3000",
	        animation: tween
	      });

	console.log(st.animation); // tween
});

$(document).ready(function() {
  
  var currentImage = 0;
  var number = Math.floor((Math.random() * 5) + 0);
  var images = $('#viewport img').get();
  var totalImages = images.length;
  var firstImage = $('#viewport img:first');
  console.log("Rotation: ", number);
  var altText = $(firstImage).attr("alt");
  console.log(altText);
  firstImage.addClass("fadedIn");
  $('#caption').html(altText);

  function increaseImage() {
    ++currentImage;
    if(currentImage > (totalImages - 1)) {
      currentImage = 0;
    }
  }
  function decreaseImage() {
    --currentImage;
    if(currentImage < 0) {
      currentImage = (totalImages - 1);
    }
  }

  function rotateImage() {
      function randomNumber(min, max) {
        return Math.random() * (max - min) + min;
      }
    var number = randomNumber(-5, 5);
    $("#viewport div p img").css("transform", "rotate(" + number + "deg)");
  }

  $('#buttonLeft').on('click', function(){
    $(images[currentImage]).stop().removeClass('fadedIn');
    console.log($(images[currentImage]));
    decreaseImage();
    // rotateImage();
      console.log(currentImage, " Number ", number);
    $(images[currentImage]).stop().addClass('fadedIn');
    altText = $(images[currentImage]).attr("alt");
    $('#caption').html(altText);
  }); 
  $('#buttonRight').on('click', function(){
    $(images[currentImage]).stop().removeClass('fadedIn');
    console.log($(images[currentImage]));
    increaseImage();
    rotateImage();
      console.log(currentImage, " Number ", number);
    $(images[currentImage]).stop().addClass('fadedIn');
    altText = $(images[currentImage]).attr("alt");
    $('#caption').html(altText);
  });

    var currentImage = 0;
  var number = Math.floor((Math.random() * 5) + 0);
  var images = $('#viewport2 img').get();
  var totalImages = images.length;
  var firstImage = $('#viewport2 img:first');
  console.log("Rotation: ", number);
  var altText = $(firstImage).attr("alt");
  console.log(altText);
  firstImage.addClass("fadedIn");
  $('#caption2').html(altText);

  function increaseImage() {
    ++currentImage;
    if(currentImage > (totalImages - 1)) {
      currentImage = 0;
    }
  }
  function decreaseImage() {
    --currentImage;
    if(currentImage < 0) {
      currentImage = (totalImages - 1);
    }
  }

  function rotateImage() {
      function randomNumber(min, max) {
        return Math.random() * (max - min) + min;
      }
    var number = randomNumber(-5, 5);
    $("#viewport div p img").css("transform", "rotate(" + number + "deg)");
  }

  $('#buttonLeft2').on('click', function(){
    $(images[currentImage]).stop().removeClass('fadedIn');
    console.log($(images[currentImage]));
    decreaseImage();
    rotateImage();
      console.log(currentImage, " Number ", number);
    $(images[currentImage]).stop().addClass('fadedIn');
    altText = $(images[currentImage]).attr("alt");
    $('#caption').html(altText);
  }); 
  $('#buttonRight2').on('click', function(){
    $(images[currentImage]).stop().removeClass('fadedIn');
    console.log($(images[currentImage]));
    increaseImage();
    rotateImage();
      console.log(currentImage, " Number ", number);
    $(images[currentImage]).stop().addClass('fadedIn');
    altText = $(images[currentImage]).attr("alt");
    $('#caption2').html(altText);
  });

  var $hamburger = $(".hamburger");
  $hamburger.on("click", function(e) {
    $hamburger.toggleClass("is-active");
    $("nav").toggleClass("is-active");
  });

});