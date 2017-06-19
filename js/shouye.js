
window.onload = function() {
	var slide = document.getElementById("slide");
	var dian = document.getElementById("dian");
	var lis = dian.getElementsByTagName("li");

	var uls = document.getElementById("uls");
	var Imgs = uls.getElementsByTagName("li");
	var dir=document.getElementById("dir");
	var I = dir.getElementsByTagName("img");
	var move = 0;
	//鼠标移上去
	var interval;
	


	for (var i = 0; i < lis.length; i++) {
		lis[i].index = i;
		lis[i].onmouseover = function() {
			for (var j = 0; j < lis.length; j++) {
				lis[j].className = "";
				Imgs[j].className = "";
			}
			this.className = "active";
			Imgs[this.index].className = "show";
		}
	}

	function hide() {
		for (var j = 0; j < lis.length; j++) {
			lis[j].className = "";
			Imgs[j].className = "";
		}
	}
	//自动播放
	function moveR() {
		for (var j = 0; j < lis.length; j++) {
			lis[j].className = "";
			Imgs[j].className = "";
		}
		move++;
		if (move > lis.length - 1) {
			move = 0;
		}
		lis[move].className = "active";
		Imgs[move].className = "show";
	}

	interval = setInterval(moveR, 1800); //定时器
	slide.onmouseover = function() {
		clearInterval(interval);
	}
	slide.onmouseout = function() {
		interval = setInterval(moveR, 1800);
	}
	I[0].onclick = function() {
		for (var j = 0; j < lis.length; j++) {
			lis[j].className = "";
			Imgs[j].className = "";
		}
		move--;
		if (move < 0) {
			move = lis.length - 1;
		}
		lis[move].className = "active";
		Imgs[move].className = "show";
	}
	I[1].onclick = moveR;
}

	 var zxsc=document.getElementById("zxsc");
	 var outlist=document.getElementById("outlist");
	 zxsc.oumouseover=function(){
	 	outlist.style.display="block";
	 }
		outlist.onmouseover=function(){
		outlist.style.display="block";
    	}
//  var zxsc=document.getElementById("zxsc");
//  var pj=document.getElementById("pj");
//  var shouji=document.getElementById("shouji");
//  var peijian=document.getElementById("peijian");
//  
//  
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
  


    //floor6 开始//
    var floor6tp1=document.getElementById("floor6tp1");
    var yuan1=document.getElementById("yuan1");
	var liwu=document.getElementById("liwu");
	liwu.src="img/截图 2016-09-13 17.30.37.png";
     floor6tp1.onmouseover=function(){
	 yuan1.style.backgroundColor="#FFFFFF";
	 liwu.src="img/11.png";
    }
    floor6tp1.onmouseout=function(){
	yuan1.style.backgroundColor="#2aad6f";
	liwu.src="img/截图 2016-09-13 17.30.37.png";
    }
    
    var floor6tp2=document.getElementById("floor6tp2");
    var yuan2=document.getElementById("yuan2");
	var erji=document.getElementById("erji");
	 erji.src="img/耳机_线.png";
     floor6tp2.onmouseover=function(){
	 yuan2.style.backgroundColor="#FFFFFF";
	 erji.src="img/耳机_线(2).png";
    }
    floor6tp2.onmouseout=function(){
	yuan2.style.backgroundColor="#2aad6f";
	erji.src="img/耳机_线.png";
    }
    
    
    
    var floor6tp3=document.getElementById("floor6tp3");
    var yuan3=document.getElementById("yuan3");
	var tiyandian=document.getElementById("tiyandian");
	 tiyandian.src="img/截图 2016-09-13 17.45.14.png";
     floor6tp3.onmouseover=function(){
	 yuan3.style.backgroundColor="#FFFFFF";
	 tiyandian.src="img/1111.png";
    }
    floor6tp3.onmouseout=function(){
	yuan3.style.backgroundColor="#2aad6f";
	tiyandian.src="img/截图 2016-09-13 17.45.14.png";
    }
    
    
   var floor6tp4=document.getElementById("floor6tp4");
    var yuan4=document.getElementById("yuan4");
	var xiangji=document.getElementById("xiangji");
	 xiangji.src="img/截图 2016-09-13 17.39.21.png";
     floor6tp4.onmouseover=function(){
	 yuan4.style.backgroundColor="#FFFFFF";
	 xiangji.src="img/111.png";
    }
    floor6tp4.onmouseout=function(){
	yuan4.style.backgroundColor="#2aad6f";
	xiangji.src="img/截图 2016-09-13 17.39.21.png";
    }
    

    //floor6 end//
    


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
		//二级导航
	var zxsc=document.getElementById("zxsc");
	var outlist=document.getElementById("outlist");

		
		 zxsc.onmouseover=function(){
			outlist.style.display="block";
 		 }
  	zxsc.onmouseout=function(){
			outlist.style.display="none";
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