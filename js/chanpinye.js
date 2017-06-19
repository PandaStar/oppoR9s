
//手机商城//
var zxsc=document.getElementById("zxsc");
    var pj=document.getElementById("pj");
    var shouji=document.getElementById("shouji");
    var peijian=document.getElementById("peijian");
    
    zxsc.onmouseover=function(){
	pj.style.display="block";
    }
    
    pj.onmouseover=function(){
	pj.style.display="block";
    }
    shouji.onmouseover=function(){
    shouji.style.display="block";
    }
    peijian.onmouseover=function(){
	peijian.style.display="block";
    }
    pj.onmouseout=function(){
	pj.style.display="none";
    }
//floor9 开始//
    var wx=document.getElementById("wx");
    var Imgs=document.getElementById("imgs");

    wx.onmouseover=function(){
	Imgs.style.display="block";
    }
    wx.onmouseout=function(){
	Imgs.style.display="none";
    }
  //floor9 end//
  
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
		
		//回到顶部
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