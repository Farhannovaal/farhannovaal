function animasiIntro(){
    $(".greet-wrapper span").velocity("transition.slideLeftIn",{
        stagger: 150,
        complete : function (){
            $("#sosmed").velocity("transition.bounceDownIn",{
                duration :1000,
                complete : function (){
                    animasiButtonStart();
                }
            })
        }
    })
}


$(document).ready(function(){
	animasiIntro();
});

function animasiButtonStart(){
	$("#start").velocity("transition.bounceUpIn")
			   .mouseenter(function(){
			   		$(this).velocity({width:100});
			   })
			   .mouseleave(function(){
			   		$(this).velocity({width:125});
			   });
}

function animasitIntroOut(){
	$("#start").attr('disabled', true).css({"color":"black"});
	$("#start").velocity("transition.whirlOut",{
								stagger: 400,
								complete: function(){
									$(".greet-wrapper").velocity("transition.flipYOut").css({"font-size": "20px","left":"40%","top":"0%",
                                                            duration : 200,
															complete: function(){
																$("#sosmed").velocity("transition.whirlOut",{
																	duration: 1000,
																	complete: function(){
																		$("#homePage").velocity("transition.flipYIn",{
                                                                            duration :500,
                                                                            complete: function(){
                                                                                callMenu();
                                                                                $(".navbar-wrapper ul li a[href='homePage']").trigger("click");
                                                                            }
                                                                        })
																	}
																});
															}
														});
								}	
							});
}


function callMenu(){
	$(".navbar").velocity("transition.slideLeftIn",{
								stagger: 250
							 });

	$(".navbar-wrapper ul li a").off("click").click(function(event){
		event.preventDefault();
		$(this).parent("li").addClass("active").siblings().removeClass("active");

			var hrefString = $(this).attr("href");

		

		if(hrefString == "back-to-main"){
			backToIntro();
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


