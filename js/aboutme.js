$(document).ready(function(){
	
	 $(window).scroll(function () {  
            if ($(".navbar").offset().top > 50) { //\向上移动50后触发
				$(".navbar-fixed-top").addClass("top-nav"); 
            }else {$(".navbar-fixed-top").removeClass("top-nav"); 
				   $(".testID").removeClass("navStyle");}  
        });
	
		 $(window).scroll(function () {  
            if ($(".bg").offset().top > 200) { //\向上移动50后触发
				$(".bg").addClass("bg_fix"); 
            }else {$(".bg").removeClass("bg_fix");}  
        });
		
	$(window).scroll(function () {  
            if ($(".bg").offset().top >200) { //\向上移动50后触发
				$("#hello").addClass("bg_fix"); 
            }else {$("#hello").removeClass("bg_fix");}  
        });
	
});