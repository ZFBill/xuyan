$(function() {
	var _scoll = 0;
	

	//	左箭头滚动

	$('.left_arr').click(function() {
		if (_scoll <= 0) {
			return
		} else{
			_scoll--;
			$('.product_scoll').animate({
				left:"+=17.4vw"
			},600,function(){
				
			}) 
			
		}

	})
	
	//	右箭头滚动

	$('.right_arr').click(function() {
		if (_scoll >= 2) {
			return
		} else{
			_scoll++;
			$('.product_scoll').animate({
				left:"-=17.4vw"
			},600,function(){
				
			}) 
			
		}

	})
	

	//	---------

	$('.product_show > div').hover(function(){
		$('.remove').removeClass('pink_hover')
	})
	
	
	$('.product_list').hover(function(){
		$(this).find('.product_img').addClass('brightness');
		$(this).find('.product_name,.vie').addClass('pink');
		
	},function(){
		$(this).find('.product_img').removeClass('brightness');
		$(this).find('.product_name,.vie').removeClass('pink')
	})

	$('.big_more').hover(function(){
		$(this).addClass('pink').find('.big_arrow').animate({
			marginLeft:"1rem"
		},300,function(){
		})
		
	},function(){
		$(this).removeClass('pink').find('.big_arrow').animate({
			marginLeft:"0"
		},300,function(){
			
		})
	})


	$('.more_detail').hover(function(){
		$(this).removeClass("bg_pink").addClass("bg_white pink").find(".banner_arr").addClass("bg_pink white")
	},function(){
		$(this).removeClass("pink").addClass("bg_pink").find(".banner_arr").removeClass("bg_pink white")
	})
	
	$('.product_img,.big_more').click(function(){
		skip('pro_detail.html')
	})
	$('.info_img,.info_more').click(function(){
		skip('pro_list.html')
	})
	$('.more_detail').click(function(){
		skip('alices.html')
	})
})



