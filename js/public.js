$(function(){
	$('body').addClass('gray')
	var arr=['index.html','brand_video.html?video=video','index.html','pro_list.html?name=medical_beauty','pro_list.html?name=skin_care','pro_list.html?name=light','alices.html','media.html']
	var divs = $('.nav > div');
	
	for (var i = 0; i < divs.length; i++) {
		
		
		$(divs[i]).attr('data-href',arr[i])
	}
	divs.click(function(){
		skip($(this).attr('data-href'))
	})
//	onresize=intiSize;
//	intiSize();
	getSize()
	$(window).resize(function() {
		getSize()
	})
	$('.navs').hover(function() {
			
			$('.hover_page').removeClass('hidden')

		}, function() {
			$('.hover_page').addClass('hidden')
		}

	)
	

	
	$('#product_code').focus(function(){
		$('.search_now').addClass('button_hover pink')
	})
	$('#product_code').blur(function(){
		$('.search_now').removeClass('button_hover pink')
	})
	$('.search_now').hover(function(){
		$(this).addClass('button_hover pink')
	},function(){
		$('.search_now').removeClass('button_hover pink')
	})
	$('.brand_intro>div:nth-child(2)>div').click(function(){
		skip('pro_list.html?name=skin_care')
	})
	$('.brand_intro>div:nth-child(3)>div').click(function(){
		skip('pro_list.html?name=light')
	})
	
	
//	探索艾丽丝
	
	$('.hover_content>li:nth-child(1),.hover_content>li:nth-child(2),.brand_intro>div:nth-child(2)>div:nth-child(1),.brand_intro>div:nth-child(1)>div:nth-child(3)').click(function(){
		skip('brand_video.html?video=img')
	})
	$('.hover_content>li:nth-child(3),.brand_intro>div:nth-child(1)>div:nth-child(4)').click(function(){
		
		skip('brand_video.html?video=video')
	})
	
//	检测是否pc端
	var isPc=true;
		$(document).ready(function() {
			var userAgentInfo = navigator.userAgent; //获取游览器请求的用户代理头的值
			var Agents = ["Android", "iPhone",
				"SymbianOS", "Windows Phone",
				"iPad", "iPod"
			]; //定义移动设备数组
			for(var v = 0; v < Agents.length; v++) {
				//判断是否是移动设备
				if(userAgentInfo.indexOf(Agents[v]) > 0) {
					isPc = false;
					break;
				}
			}
			if(isPc) {
				
			} else {
				$('body').unbind('mouseenter').unbind('mouseleave');
				$('.new_check ').html('查看详情 ▶');
				$('.hover_page').html('')
			}
		})

	
	
})
function getSize() {
	var h = $('.logo_img').height();
	var w = 1.2 * h;
	$('.logo_img').css('width', w)
}

function skip(href){
	window.location.href= href;
}

function getParam(){
	h1 = window.location.href.split("?")[1];
	console.log(h1)
    h2 = h1.split("=")[1];
	return h2 
}
//function intiSize(){
//  //获取当前浏览器窗口宽度(这里的实质就是body宽度)
//  var win_w=document.body.offsetWidth;
//  //定义变量
//  var fontSize;
//  if(win_w>1300){
//      fontSize=16;
//      
//  }else{
//      //如果浏览器窗口宽度(这里的实质就是body宽度)值小于320，取320
//     
//     
//      fontSize=12
//  }
//  //设置根元素的大小
//  document.getElementsByTagName('html')[0].style.fontSize=fontSize+'px';
//}

