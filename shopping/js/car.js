var str='';
var car_goods_num= document.getElementById('car_goods_num');
var xhr = new XMLHttpRequest();
xhr.open('GET','./index.json',true);
xhr.send(null);
xhr.onreadystatechange=function(){
	if(xhr.readyState==4 && xhr.status==200){
		var json = xhr.responseText;
	    json = JSON.parse(json);
		var gp =localStorage.getItem('_price');
		var gn =localStorage.getItem('_number');
		var gId =localStorage.getItem('_id');
		var gt =localStorage.getItem('_title');
		var gmp =localStorage.getItem('_mPrice');
		var gsrc =localStorage.getItem('_imgSrc');
		str=`<tr>
			<td>商品名称</td>
			<td>市场价</td>
			<td>本店价</td>
			<td>购买数量</td>
			<td>小计</td>
			<td>操作</td>
		</tr>
		<tr>
			<td>
				<a href="#"><img src="${gsrc}" alt="" /></a>
				<p><a href="#">${gt}</a></p>
			</td>
			<td>${gmp}</td>
			<td>${gp}</td>
			<td id="gwc_goods_num"><input id="car_goods_num" class="gwc_goods_number" type="text" value='1' /></td>
			<td>${gp}</td>
			<td><a href="#">删除</a></td>
		</tr>`;
		car_table.innerHTML=str;
	}
}
