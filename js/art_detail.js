$(function(){
	$('.new_check').hover(function(){
		$(this).addClass('bg_pink white').css('border','0')
	},function(){
		$(this).removeClass('bg_pink white').css('border','1px solid rgb(229,229,229)')
	})
	$('.col_check,.more_info').click(function(){
		skip('media.html')
	})
	$('.new_check').click(function(){
		skip('art_detail.html')
	})
	
})
