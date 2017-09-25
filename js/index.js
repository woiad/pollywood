$(function(){
	var aud = document.getElementById('audio');
	aud.play()
	$(".logo").click(function(){
		var aud = document.getElementById('audio')
		if(aud.paused){
			aud.play()
			$(".music").addClass('rotate')
		}else{
			aud.pause()
			$(".music").removeClass('rotate')
		}
	})
	var wid = $(window).width();
	var rem = wid/7.2;
	$("html").css({"font-size":rem+"px"});
	$(window).resize(function(){
		var wid = $(window).width();
		var rem = wid/7.2;
		$("html").css({"font-size":rem+"px"});
	})
})
