function getRandomInt(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
}
var balls=document.getElementsByClassName('small-div');
var x=[],y=[],dirx=[], diry=[],xdef=[],ydef=[];

for(i=0;i<4;i++){
	var ran1=getRandomInt(0,970);
	var ran2=getRandomInt(0,570);
	xdef[i]=getRandomInt(-10,10);
	ydef[i]=getRandomInt(-6,6);
	x[i]=ran1;
	y[i]=ran2;
	balls[i].style.left=ran1+'px';
	balls[i].style.top=ran2+'px';
}
function fall(){
	for(i=0;i<4;i++){
	check(x[i],y[i],i);
	anime(i);
	balls[i].style.left=x[i]+'px';
	balls[i].style.top=y[i]+'px';
	
	}
}
setInterval(fall,10);
function check(a,b,i){
	console.log(a,b,i);
	if(a>970||a<0)
		xdef[i]=-xdef[i];
if(b>570||b<0)
			ydef[i]=-ydef[i];
	
}
function anime(i){
			x[i]=x[i]+xdef[i];
			y[i]=y[i]+ydef[i];
	
}

