$(document).ready(function(){

/////// SLIDER /////// 	
var slider= $(".slider");	
//var slideItems= $(".slider").html();
//var dynamic= $("<div></div>").addClass("slide container").html(slideItems);
var slideContainer= $(".slideContainer")

slider.on("mouseover", function(){
	slide_items();
	
});

	
	
function slide_items(){
	//dynamic.appendTo(slider);
	slideContainer.animate({
		"marginLeft": "600px"
	},5000);
	slideContainer.animate({
		"marginLeft": "-600px"
	}, 7000);
}
	
var leftArr= $("#left");
var rightArr= $("#right"); 
	
leftArr.on("click", function(){
//	var marginLeft= slideContainer.css("margin-left")
	slideContainer.stop(true,false);
	console.log(parseInt(slideContainer.css('margin-left')));
	if(parseInt(slideContainer.css('margin-left'))<700){
		slideContainer.animate({
			"marginLeft": "+=250px"
		}, 100);
	}
	setTimeout(function(){
		slide_items();
	},2000);
});
rightArr.on("click", function(){
	slideContainer.stop(true,false);
	console.log(slideContainer.css('margin-left'));
	if(parseInt(slideContainer.css('margin-left'))>-630){
		slideContainer.animate({
			"marginLeft": "-=250px"
		}, 100);
	}
	setTimeout(function(){
		slide_items();
	},2000);
	
});
 
	var bar1= $("#bar1");
	var meter1= $("#meter1");
	bar1.on("mouseover", function(){
		meter1.animate({
			"width": "90%"
		}, 2000);
	});
	
	var bar2= $("#bar2");
	var meter2= $("#meter2");
	bar2.on("mouseover", function(){
		meter2.animate({
			"width": "70%"
		}, 2000);
	});
	
	var bar3= $("#bar3");
	var meter3= $("#meter3");
	bar3.on("mouseover", function(){
		meter3.animate({
			"width": "75%"
		}, 2000);
	});
	
	var bar4= $("#bar4");
	var meter4= $("#meter4");
	bar4.on("mouseover", function(){
		meter4.animate({
			"width": "85%"
		}, 2000);
	});
	var slideIndex=0;
	carousel();
	function carousel(){
		
		var slides= document.querySelectorAll(".slide2item");
		
		for(var i=0; i< slides.length; i++){
			slides[i].style.display="none";
		}
		slideIndex++;
		if(slideIndex>slides.length){
			slideIndex=1
		}
		slides[slideIndex-1].style.display="flex";
		setTimeout(carousel, 3000);
	}
	
////////////////// Gallery filter //////////////////////
	var btns= document.querySelector(".buttons").children;
	var allBtn= btns[0];
	var webBtn= btns[1];
	var appBtn= btns[2];
	var icons= btns[3];
	
	var allImg= document.querySelectorAll(".galleryItem");
	
	webBtn.addEventListener("click", function(){
		console.log("ok");
		for(var i=0; i< allImg.length; i++){
			var tags= allImg[i].dataset.tag;
			if(tags.includes("web")== false){
				allImg[i].style.display="none";
			}else if(tags.includes("web")== true){
				allImg[i].style.display="flex";
			}
			
		}
	});
	
	appBtn.addEventListener("click", function(){
		
		for(var i=0; i< allImg.length; i++){
			var tags= allImg[i].dataset.tag;
			if(tags.includes("app")== false){
				allImg[i].style.display="none";
			}else if(tags.includes("app")== true){
				allImg[i].style.display="flex";
			}
		}
	});
	
	icons.addEventListener("click", function(){
		
		for(var i=0; i< allImg.length; i++){
			var tags= allImg[i].dataset.tag;
			if(tags.includes("icons")== false){
				allImg[i].style.display="none";
			}else if(tags.includes("icons")== true){
				allImg[i].style.display="flex";
			}
		}
	});
	
	allBtn.addEventListener("click", function(){
		for(var i=0; i<allImg.length; i++){
			var tags= allImg[i].dataset.tag;
			if(tags.includes("all")==true){
				allImg[i].style.display="flex";
			}
		}	
	});
	
	////////// Form verification ////////////////////////////
	var input1= $("#input1");
	var input2= $("#input2");
	var sendBtn= $("#send");
	var textarea= $("#message")
	
	sendBtn.on("click", function(event){
		event.preventDefault();
		if(input1.val().length<3){
			alert("Name field need to contain at least 3 characters!")
		}else if(input2.val().includes("@")==false){
			alert("Email adress has to contain @")
		}else if(textarea.val().length <= 1){
			alert("You need to leave message");
		}
	});
//////////////////////// BURGER MENU ///////////////////////
	function testMatchMedia() {
        var mq = window.matchMedia("(max-width: 780px)");
        mq.addListener(WidthChange);
        WidthChange(mq);
    }

    function WidthChange(mediaQuery) {
        if (mediaQuery.matches) {
            _showBtn();
            _hideNav();
            console.log('yes');
        } else {
            _hideBtn();
            _showNav();
            $('.menu').removeClass('column');
            $('.menu').find("li").removeClass('border');
            console.log('no');
        }
    }

    function _hideNav() {
        $('.menu').addClass('hidden');
    }

    function _showNav() {
        $('.menu').removeClass('hidden');
    }

    function _hideBtn() {
        $('#burgerMenu').addClass('hidden');
		$("nav").css("margin", "20px 0")
		
    }
    
    function _showBtn() {
        $('#burgerMenu').removeClass('hidden');
    }

    function _btnMenuInit() {
        $('#burgerMenu').click(function() {
            $('.menu').toggleClass('block');
            $('.menu').toggleClass('hidden');
            $('.menu').toggleClass('column');
            $('.menu').find("li").toggleClass('border');
			$("nav").css("margin", "50px 0");
        });
    }


$(function() {

    _btnMenuInit();
    testMatchMedia();

});
	
//////////////// STICKY MENU ///////////////////////////
	$(document).ready(function() {
   var stickyNavTop = $('nav').offset().top;

   var stickyNav = function(){
   var scrollTop = $(window).scrollTop();

   if (scrollTop > stickyNavTop) { 
      $('nav').addClass('sticky');
   } else {
      $('nav').removeClass('sticky');
    }
   };

   stickyNav();

   $(window).scroll(function() {
      stickyNav();
   });
});

///////////////// odsyłacze od buttonów ////////////////
	var icon1= $("#icon1");
	var icon2= $("#icon2");
	var icon3= $("#icon3");
	var icon4= $("#icon4");
	var icon5= $("#icon5");
	var icon6= $("#icon6");
	
	icon1.click(function(){
		$("html, body").animate({
			scrollTop: $(".section2").offset().top}, 2000);
	});
	
	icon2.click(function(){
		$("html, body").animate({
			scrollTop: $(".section3").offset().top}, 2000);
	});
 	
	icon3.click(function(){
		$("html, body").animate({
			scrollTop: $(".section5").offset().top}, 2000);
	});
	
	icon4.click(function(){
		$("html, body").animate({
			scrollTop: $(".section8").offset().top}, 2000);
	});
	
	icon5.click(function(){
		$("html, body").animate({
			scrollTop: $(".section7").offset().top}, 2000);
	});
	
	icon6.click(function(){
		$("html, body").animate({
			scrollTop: $(".inputs").offset().top}, 2000);
	});
	//////////////// odsyłacze z nawigazji ////////////////
	
	
	var home= $(".menu").find("li:nth-child(1)");
	var about= $(".menu").find("li:nth-child(2)");
	var team= $(".menu").find("li:nth-child(3)");
	var services= $(".menu").find("li:nth-child(4)");
	var portfolio= $(".menu").find("li:nth-child(5)");
	var blog= $(".menu").find("li:nth-child(6)");
	var contact= $(".menu").find("li:nth-child(7)");
	
	home.click(function(){
	  $("html, body").animate({
		scrollTop: $(".vestibulum").offset().top}, 00);
	});
	
	about.click(function(){
		$("html, body").animate({
			scrollTop: $(".section2").offset().top}, 100);
	});
	
	team.click(function(){
		$("html, body").animate({
			scrollTop: $(".section3").offset().top}, 100);
	});
	
	services.click(function(){
		$("html, body").animate({
			scrollTop: $(".section5").offset().top}, 100);
	});
	
	portfolio.click(function(){
		$("html, body").animate({
			scrollTop: $(".section8").offset().top}, 100);
	});
	
	blog.click(function(){
		$("html, body").animate({
			scrollTop: $(".section7").offset().top}, 100);
	});

	contact.click(function(){
		$("html, body").animate({
			scrollTop: $(".inputs").offset().top}, 100);
	});
});
