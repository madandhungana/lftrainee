function Player(){
	this.element = document.createElement("div");
	var that=this;
	that.element.style.left=125+'px';
	//var left=425;	
	var x=125;
	var y=540;
	this.appendTo = function(parentElement) {
		parentElement.appendChild(this.element);
	}

	this.addClass = function(className) {
		this.element.setAttribute("class", 
		this.element.getAttribute("class") + " " + className);
	}
	//var left=parseInt(el.style.left);
	//console.log(el.style.left);
	this.changeDir=function(e){
		console.log('left',that.element.style.left);
		if(e.keyCode=='37'&&x>25){
			x-=100;
			that.element.style.left=x+'px';
			//el.style.left=left+'px';
			//console.log('left',left);
		}
		else if(e.keyCode=='39'&&x<=125){
			x+=100;
			that.element.style.left=x+'px';
			//console.log('right');
		}
	}
	
	this.hitTest=function(y1,y2,x2){
		
				console.log(y1,y2,x,x2);
		//length=parseInt(box2.getWidthe());
		if((Math.abs(x-x2)<=50)&&(Math.abs(y1-10-y2)<=50)){
			
			return true;
		}
			
		else 
			return false; 
	}
}