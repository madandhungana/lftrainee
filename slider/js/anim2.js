/* var ml=0;
var imgWidth = 900;
var active = 1;
var slider = document.getElementsByClassName("sliderLong")[0];
var sliderLong = slider.children[0];
var slides = slider.children; */


function Animator(element) {
	this.el = element;
	var that = this;
	var intervalId;
	console.log(element.children);
	var left=0;
	var cssProp;
	this.animate = function(cssProperty, value, duration) {
	//	left.style.pointerEvents = 'none';
		//right.style.pointerEvents = 'none';
		var style = window.getComputedStyle(element);
		var initial = style.getPropertyValue(cssProperty);
		initial = parseInt(initial);
		//left=initial;
		var step = value / (duration / 50);
		
		var counter = 0;
		cssProp=cssProperty;
		intervalId = setInterval(function() {
			counter++;
			var current = step * counter;
			element.style[cssProperty] = current+initial + 'px';
			left=element.style[cssProperty];
			if (counter >= duration/50){
			//	left.style.pointerEvents = '';
				//right.style.pointerEvents = '';
				clearInterval(intervalId);
			}
				
		}, 60);
	}
	this.finish=function(val){
		clearInterval(intervalId);
		var num=parseInt(parseInt(element.style[cssProp])/900);
		element.style[cssProp]=(num)*900+val+'px';
		
	}
}

/* function slide(){
	console.log("ljskdlf");
	active = active == slides.length ? active = 1 : ++active;
	
	var ml = (900 * (active-1) * -1) ;
	var sam=ml+900;	
	

	var id=setInterval(function() {
	sam-=10;
	sliderLong.style.marginLeft = sam;
	if(sam<=ml)
	{
	//console.log("sam",sam);
	clearInterval(id);
	}
	}, 10);
}
setInterval(slide,300);
 */