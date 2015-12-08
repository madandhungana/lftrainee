function Box() {
	this.element = document.createElement("div");
	this.bottom;
	var that=this;
	this.x=0;
	this.appendTo = function(parentElement) {
		parentElement.appendChild(this.element);
	}

	this.addClass = function(className) {
		this.element.setAttribute("class", 
		this.element.getAttribute("class") + " " + className);
	}
this.setPosition=function(height,left){
	that.element.style.bottom=height+'px';
	that.bottom=parseInt(that.element.style.bottom);
	that.element.style.left=100*(left)+25+'px';
	that.x=100*left+25;
//	console.log(that.element.style.bottom);
}
	}
