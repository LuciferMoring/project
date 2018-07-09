var sub_nav = document.getElementsByClassName('sub_nav')[0];
var allkinds = document.getElementsByClassName('allkinds')[0];
var third_nav = document.getElementsByClassName('third_nav')[0];
var left_nav = document.getElementsByClassName('left_nav');
function nav(){
	third_nav.style.display='none';
	sub_nav.style.display = 'none';
	allkinds.onmouseover=function(){
		sub_nav.style.display = 'block';
	}
	allkinds.onmouseout=function(){
		sub_nav.style.display = 'none';
		sub_nav.onmouseover=function(){
			sub_nav.style.display = 'block';
		}
		sub_nav.onmouseout=function(){
			sub_nav.style.display = 'none';
		}
	}
	for(var i=0;i<left_nav.length;i++){
		left_nav[i].onmouseover=function(){
			this.querySelector('.third_nav').style.display='block';
		}
		left_nav[i].onmouseout=function(){
			this.querySelector('.third_nav').style.display='none';
		}
	}
}
nav();
