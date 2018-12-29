//放大镜js
function Zoom(imgbox, hoverbox, l, t, x, y, h_w, h_h, showbox) {
	var moveX = x - l - (h_w / 2);
	//鼠标区域距离
	var moveY = y - t - (h_h / 2);
	//鼠标区域距离
	if(moveX < 0) {
		moveX = 0
	}
	if(moveY < 0) {
		moveY = 0
	}
	if(moveX > imgbox.width() - h_w) {
		moveX = imgbox.width() - h_w
	}
	if(moveY > imgbox.height() - h_h) {
		moveY = imgbox.height() - h_h
	}
	//判断鼠标使其不跑出图片框
	var zoomX = showbox.width() / imgbox.width()
	//求图片比例
	var zoomY = showbox.height() / imgbox.height()

	showbox.css({
		left: -(moveX * zoomX),
		top: -(moveY * zoomY)
	})
	hoverbox.css({
		left: moveX,
		top: moveY
	})
	//确定位置

}

function Zoomhover(imgbox, hoverbox, showbox) {
	var l = imgbox.offset().left;
	var t = imgbox.offset().top;
	var w = hoverbox.width();
	var h = hoverbox.height();
	var time;
	$(".probox img,.hoverbox").mouseover(function(e) {
		var x = e.pageX;
		var y = e.pageY;
		$(".hoverbox,.showbox").show();
		hoverbox.css("opacity", "0.3")
		time = setTimeout(function() {
			Zoom(imgbox, hoverbox, l, t, x, y, w, h, showbox)
		}, 1)
	}).mousemove(function(e) {
		var x = e.pageX;
		var y = e.pageY;
		time = setTimeout(function() {
			Zoom(imgbox, hoverbox, l, t, x, y, w, h, showbox)
		}, 1)
	}).mouseout(function() {
		showbox.parent().hide()
		hoverbox.hide();
	})
}
$(function() {
	Zoomhover($(".probox img"), $(".hoverbox"), $(".showbox img"));
})

//放大镜js结束

$(function() {
	$('.des_arr').click(function() {
		$(this).toggleClass('rotate')
		$(".des_art").toggleClass("hidden");
	})
	$('.ins_arr').click(function() {
		$(this).toggleClass('rotate')
		$(".ins_art").toggleClass("hidden");
	})
	
	$('.product_list').hover(function(){
		$(this).find('.product_img').addClass('brightness');
		$(this).find('.product_name,.vie').addClass('pink');
		
	},function(){
		$(this).find('.product_img').removeClass('brightness');
		$(this).find('.product_name,.vie').removeClass('pink')
	})
	$('.to_house').click(function(){
		skip('alices.html')
	})
	$('.product_list').click(function(){
		skip('pro_detail.html')
	})
	$('.check_all').click(function(){
		skip('pro_list.html')
	})
})