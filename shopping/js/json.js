var str='';
var str2 ='';
var str3='';
var goods_margin = document.getElementsByClassName('goods_margin');
var xhr = new XMLHttpRequest();
xhr.open('get','../index.json',true);
xhr.send(null);
xhr.onreadystatechange=function(){
	if(xhr.readyState == 4 && xhr.status == 200){
		var json = xhr.responseText;
		json = JSON.parse(json);
		for(var i=0;i<4;i++){
			str+=`<div class="goods_list">
							<a href="wangqiupai.html" target="_blank"><img src="${json[i].img}" alt="" /></a>
							<ul>
								<li><a href="wangqiupai.html" delprice="_blank">${json[i].title}</a></li>
								<li>本店售价(注册享惊喜会员价):</li>
								<li class="delprice">${json[i].delprice}</li>
								<li><b>${json[i].nowprice}</b></li>
							</ul>
					</div>`;
		}
		for(var j=4;j<9;j++){
			str2+=`<div class="goods_list">
							<a href="#"><img src="${json[j].img}" alt="" /></a>
							<ul>
								<li><a href="#">${json[j].title}</a></li>
								<li>本店售价(注册享惊喜会员价):</li>
								<li class="delprice">${json[j].delprice}</li>
								<li><b>${json[j].nowprice}</b></li>
							</ul>
					</div>`;
						
		}
		for(var j=9;j<14;j++){
			str3+=`<div class="goods_list">
							<a href="#"><img src="${json[j].img}" alt="" /></a>
							<ul>
								<li><a href="#">${json[j].title}</a></li>
								<li>本店售价(注册享惊喜会员价):</li>
								<li class="delprice">${json[j].delprice}</li>
								<li><b>${json[j].nowprice}</b></li>
							</ul>
					</div>`;
						
		}
		goods_margin[0].innerHTML=str;
		goods_margin[1].innerHTML=str2;
		goods_margin[2].innerHTML=str3;
		
	}
}
