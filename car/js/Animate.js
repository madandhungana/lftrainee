function Animate(element){
	this.el=element;
	var that=this;
	console.log(this.el);
	var intervalId;
	var player=new Player();
	player.element.setAttribute("class", "player");
	player.appendTo(document.getElementsByClassName("main")[0]);
	document.addEventListener('keydown',player.changeDir);
	var obst=[];
	this.animate = function(cssProperty, value, duration) {
	//	left.style.pointerEvents = 'none';
		//right.style.pointerEvents = 'none';
		var style = window.getComputedStyle(element);
		var initial = style.getPropertyValue(cssProperty);
		initial = parseInt(initial);
		//left=initial;
		var counter=0,count=-1;
		//var obs=
		intervalId = setInterval(function() {
			counter++;
			current=counter*value;
			
			element.style[cssProperty] = initial+current + 'px';
			if(counter%100==0){
			var position=getRandomInt(0,2);
			var obstacle=new Box();
			obstacle.element.setAttribute('class','obs');
			obstacle.setPosition(-current+600,position);
			
			obstacle.appendTo(document.getElementsByClassName("game-div")[0]);
			obst.push(obstacle);
			//console.log(obst);
			count++;
			}
		for(i=0;i<obst.length;i++)
		{
			//console.log(obst[i].bottom,current);
		var a=player.hitTest(obst[i].bottom,Math.abs(current),obst[i].x);
		if(a==true){
			clearInterval(intervalId);
		//console.log(obst);
		var gameOver=document.getElementsByClassName('game-over')[0];
		gameOver.style.display='block';
		}
		if(obst[i].bottom<=Math.abs(current)){
			obst.splice(i,1);
			var curScore=document.getElementsByClassName('currentScore');
			curScore[0].innerHTML=count;
			curScore[1].innerHTML=count;
		}
				//console.log('true');
				
		}			
		}, 5);
	}
	
	var getRandomInt=function (min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
	}
}