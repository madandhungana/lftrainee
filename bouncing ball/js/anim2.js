function Animator(element) {
	this.el = element;
	//var x,y,xdef,ydef;
	this.x=0;
	this.y=0;
	this.xdef=0;
	this.ydef=0;
	var that = this;
	this.getRandomInt=function getRandomInt(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
	}
	this.check=function(){
		if(that.x>970||that.x<0)
			that.xdef=-that.xdef;
		if(that.y>570||that.y<0)
			that.ydef=-that.ydef;
	}
	this.anime=function(){
		that.x=that.x+that.xdef;
		that.y=that.y+that.ydef;
	}
	this.fall = function(properties, duration) {
		that.x=properties.left;
		that.y=properties.tope;
		that.xdef=properties.leftd;
		that.ydef=properties.topd;
	}
	this.setFinal=function(){
		that.el.style.left=that.x+'px';
		that.el.style.top=that.y+'px';
	}
	
	this.checkCol=function(ball2){
		var distance=Math.sqrt(Math.pow((this.x-ball2.x),2)+Math.pow((this.y-ball2.y),2));
		var sgn11=Math.sign(that.xdef);
		var sgn12=Math.sign(that.ydef);
		var sgn21=Math.sign(ball2.xdef);
		var sgn22=Math.sign(ball2.ydef);
		console.log(Math.sqrt(Math.pow(this.x,2)+Math.pow(this.y,2)),Math.sqrt(Math.pow(ball2.x,2)+Math.pow(ball2.y,2)));
		if(distance<=32){
			if(sgn11*sgn21>0&&sgn12*sgn22>0){
				if((Math.abs(that.xdef)+Math.abs(that.ydef))>=(Math.abs(ball2.xdef)+Math.abs(ball2.ydef))){
				//	console.log('xyz');
					that.xdef=-that.xdef;
					that.ydef=-that.ydef;
				}
				else{
					ball2.xdef=-ball2.xdef;
					//console.log('abc');
					ball2.ydef=-ball2.ydef;
					
				}
					
					
				//}else{
					//console.log('xyz');
				//ball2.xdef=ball2.xdef;
			//ball2.ydef=ball2.ydef;
				//}
			}
			else if((sgn11*sgn21<0&&sgn12*sgn22>0)||(sgn11*sgn21>0&&sgn12*sgn22<0)){
				console.log(sgn11,sgn21,sgn12,sgn22);
				that.xdef=sgn21*Math.abs(that.xdef);
				that.ydef=sgn22*Math.abs(that.ydef);
				ball2.xdef=sgn11*Math.abs(ball2.xdef);
				ball2.ydef=sgn12*Math.abs(ball2.ydef);
			
			}
			
			
			else{
			that.xdef=-that.xdef;
			that.ydef=-that.ydef;
			ball2.xdef=-ball2.xdef;
			ball2.ydef=-ball2.ydef;
			}
		}
		
	}
}