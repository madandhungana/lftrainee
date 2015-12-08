var imgWidth = 900;
var active = 1;
var slider = document.getElementsByClassName("sliderLong")[0];
var sliderLong = slider.children[0];
var slides = slider.children;
var rightbtn=document.getElementById('right-btn');
var leftbtn=document.getElementById('left-btn');
leftbtn.style.display='none';
// console.log(slides.length);
var move=0;
var move2=-1800;
function slide() {
	if(active==2){
		rightbtn.style.display='none';
		leftbtn.style.display='';
	}	
else if(active==3){
	leftbtn.style.display='none';
	rightbtn.style.display='';
		
}	else{
	rightbtn.style.display='';
	leftbtn.style.display='';
}
	if(active==3){
		clearInterval(a);
		function slide2(){
			active++;
			move=move+30;
			var ml = move + "px";
			if(move==0){
				active=1;
				clearInterval(b);
				setTimeout(setIn,1000);
			}
			sliderLong.style.marginLeft = ml;
		}
		b=setInterval(slide2,5);
	}
	else if(move!=0&&move%900==0){
		active++;
		clearInterval(a);
		b=setTimeout(setIn,1000);
		move=move-30;
		var ml = move+30 + "px";
		sliderLong.style.marginLeft = ml;
			if(move==-1800){
				move=0;
			}
	}else{
		move=move-30;
		var ml = move+30 + "px";
		sliderLong.style.marginLeft = ml;
	}
}
b=setTimeout(setIn,1000);
function setIn(){
	a=setInterval(slide,5);
}

function leftClicked(){
	active--;
		clearTimeout(b);
	clearInterval(a);
	var ml = move+930 + "px";
	move=move+900;
	sliderLong.style.marginLeft = ml;
	
	setTimeout(setIn,1000);
	
}
function rightClicked(){
	console.log(active);
	var ml = move-900 + "px";
	if(active==1)
		move=move-900;
	if(active==2)
			active++;
	sliderLong.style.marginLeft = ml;
}