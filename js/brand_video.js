$(function(){
	var count = $('.videos > div').length;
	var div = '<div style="width: 31.25%;margin-top: 3.125vw;"></div>'
	if(count%3 == 2){
		$('.videos').append(div)
	}
	
	$('.new_check').hover(function(){
		$(this).addClass('bg_pink white').css('border','0')
	},function(){
		$(this).removeClass('bg_pink white').css('border','1px solid rgb(229,229,229)')
	})
	
	$('.video_win').hover(function(){
		$(this).find('.video_hover').removeClass('hidden')
	},function(){
		$(this).find('.video_hover').addClass('hidden')
	})
	
	
	$('.video_win').click(function(){
		$('.video_play').removeClass('hidden')
	})
	
	$('.close').click(function(){
		$('.video_play').addClass('hidden')
	})
	$('.see_more').click(function(){
		skip('media.html')
	})
	
	getParam();
	if(h2 =="img"){
		$('.video_win').unbind("click")
		$('.video_win').off('mouseenter').unbind('mouseleave');
		$('.brand_video').text('艾丽丝品牌 /  MissAlice ')
	}
	
})
