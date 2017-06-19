

var sousuo=document.getElementById("sousuo");
    var ss=document.getElementById("ss");
        var a=true;
		function change(){
			ss.style.display="none";
			if(a==true){
				ss.style.display="block";
				a=false;
			}else{
				ss.style.display="none";
				a=true;
			}		
		}



var Tbody=document.querySelector("tbody");
			var delet=document.querySelector("#delet");
			var byDelet=document.querySelector("#byDelet");
			var clearAll=document.querySelector("#clearAll");
			
			var total=document.querySelector("#total"); //获取总数量span
			var price=document.querySelector("#price");  //获取总价span
			//删除选中
			clearAll.onclick=function(){
				var chklist=document.querySelectorAll("tbody input[type='checkbox']:checked");
				for (var i=0;i<chklist.length;i++) {
					Tbody.removeChild(chklist[i].parentNode.parentNode);
				}
			}
			//全选
			delet.onclick=function(){
				//得到所有的checkbox
				//checkbox  有一个属性   复选框.checked=true;    选中的状态
				var chklist1=document.querySelectorAll("tbody input[type='checkbox']");
				console.log(chklist1);
				for (var i=0;i<chklist1.length;i++) {
					chklist1[i].checked=true;
				}
			}
			//反选
			byDelet.onclick=function(){
				var chklist1=document.querySelectorAll("tbody input[type='checkbox']");
				for (var i=0;i<chklist1.length;i++) {
					chklist1[i].checked=!chklist1[i].checked;
				}
			}
			//======= +  -  删除当前行 功能  ============
			//+事件改变input的value值
			//-事件改变的是input的value值
			//e --》event对象  window-->最大对象  (共6个)
			
			var tr=document.querySelectorAll("tbody tr");
			//console.log(tr);
			
			for (var i=0;i<tr.length;i++) {
				tr[i].onclick=function(e){
					e=e || window.event;
					var el=e.target;  //获取事件对象的元素
					var cls=el.className;  //获取到事件对象的className
					//先获取要操作的input
					var input=this.getElementsByTagName("input")[1];  //数量的输入框
					//console.log(input);
					var val=parseInt(input.value);  //number数据类型  强制转换
					var Span=this.getElementsByTagName("span")[5];
					console.log(Span);
					
					
					switch(cls){  //判断获取到是加  还是减的className
						/*className==reduce*/
						case "reduce":
							input.value=val-1;
							break;
						
						/*className==add*/
						case "add":
						   input.value=val+1;
						   break;
						   
						case "delete":
							Tbody.removeChild(Span.parentNode.parentNode);
						
					}
					
					Total();
				}//点击结束
				
				
			}
			//用来写总数量
					function Total(){
						var inputs=document.querySelectorAll("tbody input[type='text']");
						//console.log(inputs);
						var t=0;
						for (var i=0;i<inputs.length;i++) {
							t+=parseInt(inputs[i].value);
						}
						total.innerHTML=t;
						
					}
					Total();





				
				
				
