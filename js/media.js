$(function() {
	
	$('.col_check').hover(function() {
		$(this).addClass('bg_pink white').removeClass('border')
	}, function() {
		$(this).removeClass('bg_pink white').addClass('border')
	})

	$('.col_check').click(function(){
		skip('art_detail.html')
	})

})


