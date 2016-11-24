window.onload=function() {
	var timeEle=document.querySelector("#time");
	var starP=document.querySelectorAll("#star path");
	
	function color(){
		var r=parseInt(Math.random()*100+156);
		var g=parseInt(Math.random()*255+1);
		var b=parseInt(Math.random()*255+1);
		var rgb="rgb("+r+","+g+","+b+")";
		for(var i=0;i<starP.length;i++){
			starP[i].style.fill=rgb;
		}
	}
	setInterval(color,1000);
	function timer(){
		var d=new Date();
		var h=d.getHours();
		var m=d.getMinutes();
		h=(h<10?0+h:h);
		m=(m<10?0+m:m);
		timeEle.innerHTML=h+":"+m;	
	//console.log(h+":"+m);
	}
	setInterval(timer,1000);
}