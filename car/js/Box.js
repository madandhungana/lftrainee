function Box() {
	this.element = document.createElement("div");
	this.tope;
	var that=this;
	this.x=0;
	this.appendTo = function(parentElement) {
		parentElement.appendChild(this.element);
	}

	this.addClass = function(className) {
		this.element.setAttribute("class", 
		this.element.getAttribute("class") + " " + className);
	}
	
	this.setPosition = function(height, left){
		that.element.style.top = height + 'px';
		that.tope = parseInt(that.element.style.top);
		that.element.style.left = left + 'px';
		that.x = left;
	}
	
	this.move = function(){
		that.tope += 4;
		that.element.style.top = that.tope + 'px';
	}
	
	this.hitTest = function(obstacle){
		//console.log(obstacle.bottom,that.tope);
		if((Math.abs(that.x - obstacle.x) <= 50) && (Math.abs(obstacle.bottom + that.tope) >= 550)){
			return true;
		}
		else 
		return false; 
	}
}
