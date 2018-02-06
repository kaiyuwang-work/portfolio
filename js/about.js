// JavaScript Document
$(document).ready(function(){
	
 $(window).scroll(function () {  
            if ($(".navbar").offset().top > 50) { //\向上移动50后触发
				$(".navbar-fixed-top").addClass("top-nav"); 
            }else {$(".navbar-fixed-top").removeClass("top-nav"); 
				   $(".testID").removeClass("navStyle");}  
        });
	
	
});