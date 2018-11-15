$(function(){
	// var a = document.getElementsByClassName("section-link");
	$(".sidebar-nav ul li").live("click",function(){
		var words = $(this).find("span").html();
		if(words == " ▼"){
			$(this).find("span").html(" ▲")
		}else{
			$(this).find("span").html(" ▼")
		}
		var nextTagName = $(this).next().prop("tagName");
		if(nextTagName == "UL"){
			$(this).next().toggle();			
		}
	})
})