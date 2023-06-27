
  function callMenu() {
	$(".navbar").velocity("transition.slideLeftIn", {
	  stagger: 250
	});
  
	$(".navbar-wrapper ul li a").off("click").click(function(event){
	  event.preventDefault();
	  $(this).parent("li").addClass("active").siblings().removeClass("active");
  
	  var hrefString = $(this).attr("href");
  
	  if (hrefString == "active") {
		// Tidak ada tindakan yang diambil jika item menu sudah aktif
	  } else {
		// Fokuskan scroll ke konten yang sesuai
		var targetContent = $("#" + hrefString);
		if (targetContent.length > 0) {
		  $("html, body").animate({
			scrollTop: targetContent.offset().top
		  }, 1000);
		}
	  }
	});
  
	$(".menu-wrapper ul li a").off("click").click(function(event){
	  event.preventDefault();
	  $(this).parent("li").addClass("active").siblings().removeClass("active");
  
	  var hrefString = $(this).attr("href");
  
	  if (hrefString == "active") {
		location.reload();
	  } else {
		// Fokuskan scroll ke konten yang sesuai
		var targetContent = $("#" + hrefString);
		if (targetContent.length > 0) {
		  $("html, body").animate({
			scrollTop: targetContent.offset().top
		  }, 1000);
		}
	  }
	});
  }
  

function homePage(){
	$("#homePage .heading").velocity("transition.flipYIn", {duration:1000});
	$("#homePage .content-left").velocity("transition.slideUpIn", {duration:1000});
	$("#homePage .content-right").velocity("transition.slideDownIn", {duration:1000});
}

function portofolio(){
	$("#portofolio").velocity("transition.slideUpIn",{ duration: 100 });
			
};

function skill(){
	$(".hardskil span").velocity("transition.slideLeftIn",{stagger:250});
	$(".roadmap").velocity("transition.flipYIn",{stagger:250});
	$(".softskil li").velocity("transition.slideRightIn",{stragger:250});
}




let toggleMenu = document.querySelector('.menu-toggle');
let menuWrap = document.querySelector('.menu-wrapper');

// toggle function/
toggleMenu.addEventListener('click', function(){
    if(menuWrap.classList.contains("active")){
        menuWrap.classList.remove("active");
    } else {
        menuWrap.classList.add("active");
    }
});


//  AJAX REFRESH

