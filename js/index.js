$(function(){
	

	getSize()
	$(window).resize(function(){
			getSize()
		}
	)
	$('.nav > div').hover(function(){
		$(this).addClass('udl')
	},function(){
		$(this).removeClass('udl')
	}
		
	)
})	
	
	

	


function getSize(){
	var h = $('.logo_img').height();
	var w = 1.2*h;
	$('.logo_img').css('width',w)
}
