$("#dont").html("jjjjj");
$("#btn").click(function(){
	var items = $("input[name='c']:checked");
	alert("选中 "+items.length+" 个checkbox");
});


$(".btn1").click(function(){
	$(".test").toggle();
});