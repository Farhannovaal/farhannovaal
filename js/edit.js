
function animasiIntro() {
	
	$(".greet-wrapper span").velocity("transition.slideLeftIn", {
	  stagger: 150,
	
	  complete: function() {
		$("#sosmed").velocity("transition.bounceDownIn", {
		  duration: 1000,
		  complete: function() {
			animasiButtonStart();
		  }
		});
	  }
	});
  }
  
  // ketika dokumen sudah siap, jalankan fungsi animasiIntro
  $(document).ready(function() {
	animasiIntro();
  });
  
  // fungsi untuk animasi button start
  function animasiButtonStart() {

	$("#start").velocity("transition.bounceUpIn")
	 
	  .mouseenter(function() {
		$(this).velocity({ width: 100 });
	  })
	  .mouseleave(function() {
		$(this).velocity({ width: 125 });
	  });
  }
  
  // fungsi untuk animasi keluar dari halaman intro
  function animasitIntroOut() {
	
	$("#start").attr('disabled', true).css({ "color": "black" });
	// menggunakan jQuery, animasikan elemen dengan id start menggunakan velocity.js dengan efek whirlOut dan opsi stagger sebesar 400
	$("#start").velocity("transition.whirlOut", {
	  stagger: 400,
	  // ketika animasi selesai, animasikan elemen dengan kelas greet-wrapper menggunakan velocity.js dengan efek whirlOut dan durasi 200ms
	  complete: function() {
		$(".greet-wrapper").velocity("transition.whirlOut", {
		  duration: 200,
		  // ketika animasi selesai, animasikan elemen dengan id sosmed menggunakan velocity.js dengan efek whirlOut dan durasi 1000ms
		  complete: function() {
			$("#sosmed").velocity("transition.whirlOut", {
			  duration: 1000,
			  // ketika animasi selesai, animasikan elemen dengan id homePage menggunakan velocity.js dengan efek flipYIn dan durasi 500ms
			  complete: function() {
				$("#homePage").velocity("transition.flipYIn", {
				  duration: 500,
				  // ketika animasi selesai, jalankan fungsi callMenu dan klik link menu homePage
				  complete: function() {
					callMenu();
					$(".navbar-wrapper ul li a[href='homePage']").trigger("click");
				  }
				});
			  }
			});
		  }
		});
	  }
	});
  }
  
  // fungsi untuk memanggil menu
  function callMenu() {
	
	$(".navbar").velocity("transition.slideLeftIn", {
	  stagger: 250
	});
  

	$(".navbar-wrapper ul li a").off("click").click(function(event){
		event.preventDefault();
		$(this).parent("li").addClass("active").siblings().removeClass("active");

			var hrefString = $(this).attr("href");
		

		if(hrefString == "active"){
			
		}else{		
			if (!$("#" + hrefString).is(':visible')) {
				$(".container-content").fadeOut(1000);
				setTimeout(function(){ 
					$("#" + hrefString).show();
					window[hrefString]();
				}, 1000);			
			}
		}	
        
	});

	$(".menu-wrapper ul li a").off("click").click(function(event){
		event.preventDefault();
		$(this).parent("li").addClass("active").siblings().removeClass("active");

			var hrefString = $(this).attr("href");
		

		if(hrefString == "active"){
			location.reload();;
		}else{		
			if (!$("#" + hrefString).is(':visible')) {
				$(".container-content").fadeOut(1000);
				setTimeout(function(){ 
					$("#" + hrefString).show();
					window[hrefString]();
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

