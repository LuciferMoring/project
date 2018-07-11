var xhr = new XMLHttpRequest();
var str = '';
var shot_intr = document.getElementsByClassName('shot_intr')[0]
var intr = document.getElementsByClassName('intr')[0]
xhr.open('GET','./index.json',true);
xhr.send(null);
xhr.onreadystatechange=function(){
	if(xhr.readyState==4 && xhr.status==200){
		var json = xhr.responseText;
		json = JSON.parse(json);
		var _url =location.href;
//		console.log(json)//json是一个数组对象
		var arr=_url.split('?')
		for(var i=0;i<arr.length;i++){
			var detailsId = arr[i].split('=')[1];//获取每个URL后面添加的ID值
		}
			str = `
			<div class="main">
				<div class="pro_left">
					<div class="pro_img">
						<div class="shadow"></div>
						<img src="${json[detailsId].imgmiddle}" alt="" />
					</div>
					<ul class="tab_img">
						<div><span class="iconfont icon_font">&#xe67c;</span><li><img src="${json[detailsId].imgsmall}" alt="" /></li></div>
						<div><span class="iconfont icon_font">&#xe67c;</span><li><img src="${json[detailsId].imgsmall}" alt="" /></li></div>
					</ul>
					<div class="big_img">
						<img src="${json[detailsId].imgbig}" alt="" />
					</div>
				</div>
				
				<div class="pro_right">
					<div class="pro_title">
						<h2>${json[detailsId].title}</h2>
						<a href="#">上一个</a>
					</div>
					<div class="goods_logo">
						<p>${json[detailsId].num}</p>
						<p>${json[detailsId].logo}</p>
						<p>商品点击次数：WRT7295102</p>	
						<p>用户评价：<img src="img/stars5.gif" alt="" /></p>	
					</div>
					<div class="price">
						<p class="goods_price">本店售价（注册享惊喜会员价）：<span>￥1680.00元</span></p>
						<p class="up_price">市场价格:<span>￥3580.00元</span></p>
						<p class="share"><a href="#">分享</a>|<a href="#">暂存</a></p>
					</div>
					<p class="jifen">购买此商品可使用：<span>0 积分</span></p>
					<form class="goodsform" action="">
						<h3>手柄粗细:</h3>
						<div class="goods_type"><input type="radio" /><span>2号手柄（4 1/4） [ ￥0.00元] </span></div>
						<div class="buy_number"><span class="buyNum">购买数量&nbsp;:</span><input id="howmany" type="text" /><b>商品总价:</b><i>￥</i><strong>1680.00</strong><em>元</em><span class="notice">此商品为免运费商品，计算配送金额时将不计入配送费用</span></div>
						<div class="sub"><button type="button"></button></div>
					</form>
				</div>
			</div>`;
		shot_intr.innerHTML=str;
		new Bigmirror();
		
	}
}
