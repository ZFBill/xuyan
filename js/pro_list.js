$(function(){
	getParam();
//	console.log(h2)
	switch (h2){
		case 'skin_care':
			$('.pro_img').css('background-image','url(img/show_img1.png)')
			$('.nav > div').removeClass('udl')
			$('[data-href="pro_list.html?name=skin_care"]').addClass('udl')
			break;
		case'light':
			$('.pro_img').css('background-image','url(img/show_img2.png)')
			$('.nav > div').removeClass('udl')
			$('[data-href="pro_list.html?name=light"]').addClass('udl')
			break;
			break;
		default:
			break;
	}

	var count = $('.product_lists > .product_list').length
	var div = '<div class="product_list"><div>'		
	switch(count%4){
		case 2:
			$('.product_lists').append(div);
			$('.product_lists').append(div);
			break;
		case 3:
			$('.product_lists').append(div);
			break;
		default:
			break;
	}
	
	$('.product_list').hover(function(){
		$(this).find('.product_img').addClass('brightness');
		$(this).find('.product_name,.vie').addClass('pink');
		
	},function(){
		$(this).find('.product_img').removeClass('brightness');
		$(this).find('.product_name,.vie').removeClass('pink')
	})
	$('.product_list').click(function(){
		skip('pro_detail.html')
	})
	
	$('.pro_type').click(function(){
		$(".pro_type_lists").toggleClass("hidden");
		
	})
	$('.pro_type_lists > div').click(function(){
		var pro = $(this).html();
		$('.pro_types').html(pro)
	})
	
	$('.pro_sort').click(function(){
		$(".pro_sort_lists").toggleClass("hidden");
		
	})
	$('.pro_sort_lists > span').click(function(){
		var sort = $(this).html();
		$('.pro_sorts').html(sort)
	})
	
	
})
 
