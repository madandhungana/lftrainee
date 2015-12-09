function Player(){
	
	this.element = document.createElement("div");
	var that=this;
	this.element.style.left=125+'px';
	
	this.x=125;
	this.y=540;
	
	this.appendTo = function(parentElement) {
		parentElement.appendChild(this.element);
	}

	this.addClass = function(className) {
		this.element.setAttribute("class", 
		this.element.getAttribute("class") + " " + className);
	}
		
	this.hitTest = function(obstacle){
		//console.log(obstacle.tope,that.y);
		if((Math.abs(that.x - obstacle.x) <= 50)&&(Math.abs(obstacle.tope - that.y) <= 50)){
			return true;
		}
		else 
			return false; 
	}
}