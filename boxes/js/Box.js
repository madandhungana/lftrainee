function Box() {
	this.element = document.createElement("div");
	this.x=0;
	this.y=0;
	this.dx=0;
	this.dy=0;
	var that=this;
	this.height=0;
	this.width=0;
	this.appendTo = function(parentElement) {
		parentElement.appendChild(this.element);
	}

	this.addClass = function(className) {
		this.element.setAttribute("class", 
			this.element.getAttribute("class") + " " + className);
	}

	this.removeClass = function(className) {
		
	}

	this.hitTest = function(box) {

	}
	this.setValue=function(x,y,dx,dy){
		that.x=x;
		that.y=y;
		that.dx=dx;
		that.dy=dy;
		that.element.style.left=that.x+'px';
		that.element.style.top=that.y+'px';
		
	}
	this.setSize=function(){
		that.element.style.height=50+'px';
		that.element.style.width=50+'px';
		that.height=that.element.style.height;
		that.width=that.element.style.width;
	}
	this.getWidthe=function(){
		return that.width;
	}
	
	this.check=function(){
		if((that.x>=950&&that.dx>0)||(that.x<=0&&that.dx<0))
			that.dx=-that.dx;
		if((that.y>=550&&that.dy>0)||(that.y<=0&&that.dy<0))
			that.dy=-that.dy;
	}
	
	this.animef=function(){
		
		 that.x=that.x+that.dx;
		that.y=that.y+that.dy; 
	}
	
	this.setFinal=function(){
		that.element.style.left=that.x+'px';
		that.element.style.top=that.y+'px';
	}


	}