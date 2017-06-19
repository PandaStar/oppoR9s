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
			var img=document.getElementById("leftout").getElementsByTagName("li");
//			console.log(img);
			var pic=document.getElementById("pic");
//			console.log(pic);
//			var =document.getElementsByTagName("li");
			var arr=["img/r9s1.png","img/r9s2.png","img/r9s3.png","img/r9s4.png"];
			
			for(var i=0;i<img.length;i++){
					img[i].index=i;
			        img[i].onmouseover=function(){
				       for(var j=0;j<img.length;j++){
					img[j].style.border="red";
//					console.log(111)
				}
				pic.src=arr[this.index];
				this.style.border="black" ;
			}
			}	
		





//var zxsc=document.getElementById("zxsc");
//  var pj=document.getElementById("pj");
//  var shouji=document.getElementById("shouji");
//  var peijian=document.getElementById("peijian");
//  
//  zxsc.onmouseover=function(){
//	pj.style.display="block";
//  }
//  
//  pj.onmouseover=function(){
//	pj.style.display="block";
//  }
//  shouji.onmouseover=function(){
//  shouji.style.display="block";
//  }
//  peijian.onmouseover=function(){
//	peijian.style.display="block";
//  }
//  pj.onmouseout=function(){
//	pj.style.display="none";
//  }
    
var to_top=document.getElementById("to_top");
			var w=document.documentElement.clientWidth || document.body.clientWidth;
			var h=document.documentElement.clientHeight || document.body.clientHeight;
			to_top.style.left=w-to_top.offsetWidth+"px";
			to_top.style.top=h-to_top.offsetHeight+"px";
			window.onscroll=function(){
				var scrolltop=document.documentElement.scrollTop || document.body.scrollTop;
				to_top.style.top=h-to_top.offsetHeight+scrolltop+"px";
			}
			to_top.onclick=function(){
				
				
				
				document.documentElement.scrollTop=document.body.scrollTop=0;
			}


window.onload=function(){
				//什么情况下用这个？？  元素上有多个事件的时候用
				//语法：js对象.addEventListener("事件名",函数名,false)
				//注意：事件名：不加on
				//函数名是不加（）
				//false作用:阻止冒泡
				function show(){
					var scrolltop=document.body.scrollTop || document.documentElement.scrollTop;
					//console.log(scrolltop);
					var slideLeft=document.getElementById("slideLeft");
					var lis=slideLeft.getElementsByTagName("li");
					
					//得到每一块的client-->可视部分的宽和高， offset--》元素的宽和高    scroll --》滚动的高和宽   screen相关的宽和高
					
					//滚动 让侧边slideLeft--》div显示或者隐藏
					/*var top=document.getElementById("floor1").offsetTop;
					var top1=document.getElementById("floor2").offsetTop;
					console.log(top);
					console.log(top1);*/
					var arr=[];
					var banner=document.getElementsByClassName("banner");
					//console.log(floor);//数组
					for (var i=0;i<banner.length;i++) {
						var top=banner[i].offsetTop;
						arr.push(top);  //把每一块div的offsetTop的值保存到数组里  保存到数组里共5块的值
					}
					arr.push(document.body.offsetHeight || document.documentElement.offsetHeight);
					console.log(arr);	  //arr有六个值，第六个值是整个body的高
					
					for(var i=0;i<lis.length;i++){
						if(scrolltop >arr[i]-500 && scrolltop<arr[i+1]-500){
							//for把其他的样式去掉
							for(var j=0;j<lis.length;j++){
								lis[j].style.background="#FFB026";
							}
							//加上当前的样式
							lis[i].style.background="#009B72";
						}
					}
					//以上监听滚动事件  让每一块和侧边的导航对应
					
					if(scrolltop>500){
						slideLeft.style.display="block";
					}else{
						slideLeft.style.display="none";
					}
					//以上是让侧边显示或者隐藏
				}
				window.addEventListener("scroll",show,false);
				
				//侧边的点击事件
				
				var slideLi=document.getElementById("slideLeft").getElementsByTagName("li");
				var arr=[];
				var banner=document.getElementsByClassName("banner");
					//console.log(floor);//数组
					for (var i=0;i<banner.length;i++) {
						var top=banner[i].offsetTop;
						arr.push(top);  //把每一块div的offsetTop的值保存到数组里  保存到数组里共5块的值
					}
				for (var i=0;i<slideLi.length;i++) {
					slideLi[i].index=i;
					slideLi[i].onclick=function(){
						for (var j=0;j<slideLi.length;j++) {
							slideLi[j].style.background="#FFB026";
						}
						this.style.background="#009B72";
						document.documentElement.scrollTop=arr[this.index];  //反向设置整个网页的scrollTop值  来源于每一块的scrollTop的值
					}
				}
			}