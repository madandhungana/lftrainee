function CarGame(element){
	this.el = element;
	var that = this, intervalId, obstacles = [], bullets = [], position, score = 0;
	
	var curScore = document.getElementsByClassName('currentScore');
	var container = document.getElementsByClassName('game-div')[0];
	var container2 = document.getElementsByClassName('main')[0];
	
	var player = new Player();
	player.element.setAttribute("class", "player");
	player.appendTo(document.getElementsByClassName("main")[0]);
	
	this.start = function(cssProperty, value, duration) {
		document.addEventListener('keydown',changeDir);
		
		var style = window.getComputedStyle(element);
		var initial = style.getPropertyValue(cssProperty);
		initial = parseInt(initial);
		
		var counter = 0;
		
		intervalId = setInterval(function() {
			counter++;
			current = counter*value;
			element.style[cssProperty] = initial+current + 'px';
			
			if(counter % 50 == 0){
				createObstacle();
			
			}

			moveBullets();
			moveObstacles();
				
		}, 10);
	}
	
	var getRandomInt = function (min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
	}
	
	function changeDir(e){
		if(e.keyCode == '37' && player.x > 25){
			player.x -= 100;
			player.element.style.left = player.x + 'px';
		}
		
		else if(e.keyCode == '39'&&player.x <= 125){
			player.x += 100;
			player.element.style.left = player.x + 'px';
			
		}
		
		else if(e.keyCode == '32'){
			createBullet();
		}
	}
	
	var createObstacle = function(){
			position = getRandomInt(0,2);
			
			var obstacle = new Box();
			obstacle.element.setAttribute('class','obs');
			obstacle.setPosition(-5,position * 100 + 25);
			obstacle.appendTo(container2);
			obstacles.push(obstacle);
	}
	
	var createBullet = function(){
		var sBullet = new Bullet();
		sBullet.element.setAttribute('class','bullet');
		sBullet.setPosition( 60 , player.x);
		sBullet.appendTo(document.getElementsByClassName("main")[0]);
		bullets.push(sBullet);
	}
	
	var moveBullets = function(){
	
		for(var j = 0; j < bullets.length; j++){
			bullets[j].move();
			
			if(bullets[j].bottom >= 600){
				container2.removeChild(bullets[j].element);
				bullets.splice(j,1);
			}
		}
	}
	
	var moveObstacles = function(){
		for(i = 0; i < obstacles.length; i++){
			obstacles[i].move();
				
			var hit = player.hitTest(obstacles[i]);
				
			if(hit){
					
				for(var i = 0; i < obstacles.length; i++){
					container2.removeChild(obstacles[i].element);	
				}
					
				for(var j = 0; j < bullets.length; j++){
					container2.removeChild(bullets[j].element);	
				}
					
				bullets = [];
					
				gameEnd();
				break;
			}
				
			if(obstacles[i].tope >= 600){
				score++;
				
				container2.removeChild(obstacles[i].element);
				obstacles.splice(i, 1);
									
				curScore[0].innerHTML = score;
				curScore[1].innerHTML = score;
			}
				
			for(var j = 0; j < bullets.length; j++){
				var hit2 = obstacles[i].hitTest(bullets[j]);

				if(hit2){
					score++;
					
					curScore[0].innerHTML = score;
					curScore[1].innerHTML = score;
						
					container2.removeChild(obstacles[i].element);
					container2.removeChild(bullets[j].element);
						
					obstacles.splice(i, 1);
					bullets.splice(j, 1);
					break;
				}
			}
		}		
	}
	
	var gameEnd = function(){
		clearInterval(intervalId);
		player.element.remove();
		
		document.removeEventListener('keydown',changeDir);
		
		var gameOver = document.getElementsByClassName('game-over')[0];
		gameOver.style.display = 'block';
	}
}