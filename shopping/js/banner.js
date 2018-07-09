var banner=(function(){
	var $banner = $('.banner');
	var $tips = $('.tips');
	var $banner_img =$('.banner_img');
	var timer=null;
	var index=0;
	return {
		init: function(){
			banner.tipsEvent();
			banner.autoPlay();
		},
		showImg:function(ind){
			$tips.children('li').eq(ind).addClass('active').siblings().removeClass('active');
			$banner_img.children('img').eq(ind).fadeIn().siblings().fadeOut();
		},
		tipsEvent:function(){
			$tips.children('li').on('click',function(){
//				var index = $(this).index();
				banner.showImg(index);
				
			})
		},
		autoPlay:function(){
			clearInterval(timer);
			timer = setInterval(function(){
				banner.showImg(index);
				index++;
				if(index == 3){
					index=0;
				}
			},2000)
			
		}

	}	
})()
banner.init();

