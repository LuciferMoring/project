//var banner=(function(){
//	var $banner = $('.banner');
//	var $tips = $('.tips');
//	var $banner_img =$('.banner_img');
//	var timer=null;
//	var index=0;
//	return {
//		init: function(){
//			banner.tipsEvent();
//			banner.autoPlay();
//		},
//		showImg:function(ind){
//			$tips.children('li').eq(ind).addClass('active').siblings().removeClass('active');
//			$banner_img.children('img').eq(ind).fadeIn().siblings().fadeOut();
//		},
//		tipsEvent:function(){
//			$tips.children('li').on('click',function(){
////				var index = $(this).index();
//				banner.showImg(index);
//				
//			})
//		},
//		autoPlay:function(){
//			clearInterval(timer);
//			timer = setInterval(function(){
//				banner.showImg(index);
//				index++;
//				if(index == 3){
//					index=0;
//				}
//			},2000)
//			
//		}
//
//	}	
//})()
//banner.init();

function Banner(){
	this.banner = document.getElementsByClassName('banner')[0];
	this.banner_img = this.banner.getElementsByClassName('banner_img')[0];
	this.imgBox = this.banner_img.getElementsByTagName('img');
	this.tips = this.banner.getElementsByClassName('tips')[0];
	this.liBox = this.tips.getElementsByTagName('li');
}
Banner.prototype.swap=function(){
	var _this=this;
	var index=0;
	var timer=null;
	function init(ind){
		for(var i =0;i<_this.liBox.length;i++){
			_this.liBox[i].className='';	
			_this.imgBox[i].style.display="none";
		}
		_this.liBox[ind].className='active';
		_this.imgBox[ind].style.display="block";
	}
	this.tips.onclick=function(e){
		e = e || window.event;
		var target = e.target || e.srcElement;
		if(target.nodeName=="LI"){
			autoPlay(target.innerHTML-1);
			init(target.innerHTML-1);
		}
	}
	function autoPlay(index){
		clearInterval(timer);
		timer =setInterval(function(){
			index++;
			if(index == _this.liBox.length){
				index=0;
			}
			init(index);
		},1000)
	}
	autoPlay(index);
}
var bannerBox = new Banner();
bannerBox.swap();
