function Bullet() {
	this.element = document.createElement("div");
	this.bottom;
	var that = this;
	this.x = 0;
	
	this.appendTo = function(parentElement) {
		parentElement.appendChild(this.element);
	}

	this.addClass = function(className) {
		this.element.setAttribute("class", 
		this.element.getAttribute("class") + " " + className);
	}
	
	this.setPosition = function(height,left) {
		that.element.style.bottom = height + 'px';
		that.bottom = parseInt(that.element.style.bottom);
		that.element.style.left = left + 'px';
		that.x = left;
	}

	this.move = function(){
		that.bottom += 4;
		that.element.style.bottom = that.bottom + 'px';
	}
}