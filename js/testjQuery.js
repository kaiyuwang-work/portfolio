$(document).ready(function(){

$('#name').find('h1').eq(0).html("tesssssssssst");
$('#tt').find('h1').html("doooooogz");
$("#tt").find("h1").animate(　{
　　　　　　left : "+=50", //不断右移
　　　　　　opacity : 0.25 //指定透明度
　　　　},
　　　　2000 // 持续时间
　　//,function() { alert('done!'); } 
);
$("#tt").find("h1").eq(0).html("say something");
$("#logo:hidden");
//$("#logo").fadeIn("slow");
//$("#logo").click(function(){"use strict";
//	$("#logo").animate({opacity:0.5},500); 	
//});


$(".level1>a").addClass("current").next().hide().parent().siblings().children("a").next().hide();

$(".level1>a").mouseover(function(){
	$(this).addClass("current").next().show().parent().siblings().children("a").removeClass("current").next().hide();
	return false;
});
	
	
});