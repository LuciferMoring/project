function Bigmirror (){
	this.pro_img = document.getElementsByClassName('pro_img')[0];
	this.shadow = this.pro_img.getElementsByClassName('shadow')[0];
	this.big_img = document.getElementsByClassName('big_img')[0];
	this.pro_left = document.getElementsByClassName("pro_left")[0];
	this.main = document.getElementsByClassName('main')[0];
	this.imgBig = this.big_img.getElementsByTagName('img')[0];
	this.tab_img = this.pro_left.getElementsByClassName('tab_img')[0]
	this.tabImgs = this.tab_img.getElementsByTagName('img');
	this.pro_img_img = this.pro_img.getElementsByTagName('img')[0];
	this.imgBoxmouseover();
	this.shadowmouseover();
	this.tabImg();
}
Bigmirror.prototype.imgBoxmouseover=function(){
	var _this=this;
	this.pro_left.onmouseover=function(){
		_this.shadow.style.display="block";
	}
	this.pro_left.onmouseout=function(){
		_this.shadow.style.display="none";
		_this.big_img.style.display="none";
	}
}
Bigmirror.prototype.shadowmouseover=function(){
	var _this=this;
	this.pro_left.onmousemove=function(e){
		_this.big_img.style.display="block";
		e = e || window.event;
		var l = e.clientX - _this.main.offsetLeft - _this.shadow.offsetWidth/2;
		var t = e.pageY - _this.pro_left.offsetTop - _this.shadow.offsetHeight/2;
		var maxL = _this.pro_left.clientWidth - _this.shadow.offsetWidth;
		var maxT = _this.pro_left.clientHeight - _this.shadow.offsetHeight;
		if(l > maxL){
			l = maxL;
		}else if (l < 0 ){
			l = 0;
		}
		if(t > maxT){
			t =maxT;
		}else if(t < 0){
			t = 0;
		}
		_this.shadow.style.left = l + 'px';
		_this.shadow.style.top = t + 'px';
		_this.imgBig.style.left = -2*l + 'px';
		_this.imgBig.style.top = -2*t + 'px';
	}
}
Bigmirror.prototype.tabImg=function(){
	var _this=this;
//	console.log(this.pro_img);//大盒子
//	console.log(this.tab_img);//小盒子
//	console.log(this.pro_img_img)//大图
//	console.log(this.tabImgs)//小图
	this.tab_img.onclick=function(e){
		e = e || window.event;
		var target = e.target ||e.srcElement;
		if(target.nodeName=='IMG'){
			var imgSrc = target.src;
			_this.pro_img_img.src = imgSrc.replace('small','big');
			_this.imgBig.src = imgSrc.replace('small','big');
		}
	}
}

