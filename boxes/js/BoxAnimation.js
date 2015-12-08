function BoxAnimation() {
	var boxes = [];
	var noOfBoxes = 15;
	var parent = document.getElementsByTagName("body")[0];
	var box,length,x,y,angle,speed;
	
	this.init = function() {
		for (var i=0; i<noOfBoxes; i++) {
			createBox();
			setAttr(i);
			//animate();
			boxes[i].animef();
		}
	}
	
	this.animate=function(){
		function fall(){
			for(var i=0;i<noOfBoxes;i++){
				boxes[i].check();
				for(var j=i+1;j<noOfBoxes;j++){
					var hit=hitTest(boxes[i].x,boxes[i].y,boxes[j]);
					
					if(hit==true){
					console.log(Math.abs(boxes[i].x-boxes[j].x));
						zeroCond(boxes[i],boxes[j]);
						/* boxes[i].dx*=-1;
						boxes[i].dy*=-1;
						boxes[j].dx*=-1;
						boxes[j].dy*=-1; */
					//	zeroCond(boxes[i],boxes[j]);
						
					}
					
				}
				
				boxes[i].animef();
				boxes[i].setFinal();
			}
		}
		setInterval(fall,1);
	}

	var createBox = function() {
		box = new Box();
		box.addClass("small-box");
		box.setSize();
		box.appendTo(parent);
		//console.log(box.style.width);
	}
	
	
	var setAttr=function(i){
		var ran1,ran2;
		if(i==0){
			ran1=1;
			ran2=549;
		}else{
		ran1=getRandomInt(0,950);
		ran2=getRandomInt(0,550);	
		}
		
		xdef=0;
		ydef=0;
		var flag;
		
		do{
			flag=0;
			for(var j=0;j<i;j++){
				a=hitTest(ran1,ran2,boxes[j]);
				if(a==true){
					//debugger;
					//console.log('ljdf');
					flag=1;
					ran1=getRandomInt(0,950);
					ran2=getRandomInt(0,550);
					break;
				}
			}
		}while(flag==1);
		
		box.setValue(ran1,ran2,xdef,ydef);
		boxes.push(box);
	}
	
	
	var getRandomInt=function (min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
	}
	
	
	var hitTest=function(ran1,ran2,box2){
		
				
		length=parseInt(box2.getWidthe());
		if((Math.abs(ran1-box2.x)<=length)&&(Math.abs(ran2-box2.y)<=length)){
			
			return true;
		}
			
		else 
			return false;
	}
	var zeroCond=function(box1,box2){
		if(box1.dx==0&&box1.dy==0){
			box1.dx=box2.dx;
			box1.dy=box2.dy;
			box2.dx=-box2.dx;
			box2.dy=-box2.dy;
			console.log('who');
		}
			
		else if(box2.dx==0&&box2.dy==0){
			box2.dx=box1.dx;
			box2.dy=box1.dy;
			box1.dx=-box1.dx;
			box1.dy=-box1.dy;
			
		}
		else if(((box1.x<box2.x)&&(box1.dx<box2.dx))||((box1.x>box2.x)&&(box1.dx>box2.dx))||((box1.y<box2.y)&&(box1.dy<box2.dy))||((box1.y>box2.y)&&(box1.dy>box2.dy))){
			
		}
		else{
			if(Math.sign(box1.dx)==Math.sign(box2.dx)){
				box1.dy=-box1.dy;
				box2.dy=-box2.dy;
				
			}else if(Math.sign(box1.dy)==Math.sign(box2.dy)){
				box1.dx=-box1.dx;
				box2.dx=-box2.dx;
			}
			else{
				box1.dx=-box1.dx;
				box2.dx=-box2.dx;
				box1.dy=-box1.dy;
				box2.dy=-box2.dy;
			}
			
		}
	}
	this.start=function(){
		var attr=document.getElementsByClassName('inputs');
		angle=attr[1].value;
		speed=attr[0].value;
		console.log(angle,speed);
		if(angle>45){
			boxes[0].dx=0.1*speed/(Math.tan(angle*Math.PI/180));
			boxes[0].dy=-0.1*speed;
		}
		else{
				boxes[0].dy=-(Math.tan(angle*Math.PI/180))*0.1*speed;
			boxes[0].dx=speed*0.1;
		
		}	
		//boxes[0].dy=1;
	}
	this.setPosition=function(a,b){
		x=a;
		y=b;
		//console.log(x,y);
		var angler=Math.atan((600-y)/x);
		angle=(angler*180/Math.PI);
		var attr=document.getElementsByClassName('inputs');
		attr[1].value=angle;
	}
	this.setSpeed=function(a){
		speed=a;
	var attr=document.getElementsByClassName('inputs');
		attr[0].value=speed;
	}
}