let myFont, myClock, myPop,myKeys, myBell, myFoil, myMouth, myEmail, myCry, myKiss, myChing, myYes, wide, tall;
let babies, burgers, deads, googles, lipsticks, mails, nikes, rings, stars, troll;
let clockTick;
let pos = 0;
let titleText = 'This is what happens every 10 seconds';
let direction = 0;
let count = 0;
var tileCountX = 1;
var tileCountY = 1;
let time, foil;
var drawMode = 1;
let song;
let starCount = 0;

function preload() {
	soundFormats('ogg', 'wav', 'mp3');
	myFont = loadFont('Quicksand-Regular.otf');
	myClock = loadSound('clock.wav');
	myPop = loadSound('pop.wav');
	myKeys = loadSound('typing.wav');
	myBell = loadSound('bell.wav');
	myFoil = loadSound('foil.wav');
	myMouth = loadSound('eat.wav');
	myEmail = loadSound('email.wav');
	myCry = loadSound('crying.wav');
	myKiss = loadSound('kiss.ogg');
	myChing = loadSound('ching.mp3');
	myYes = loadSound('yes.wav');
	song = loadSound('song.wav');
	troll = loadImage('Troll.jpg');
	foil = loadImage('foil.jpg');
}
function setup() {
	createCanvas(screen.width,screen.height);
	//sets the font and the size and the alignment of all of the text
	textFont(myFont);
	textSize(width/20);
	textAlign(CENTER, CENTER);
	rectMode(CENTER);
	//slows down the rate of the animations
	frameRate(30);
	time = millis();
	//this sets the volume of the ticking sound and plays it in a loop
	myClock.setVolume(5);
	myClock.loop(); 
	song.setVolume(1.0);
	
	//this code creates a group for each animation
	babies = new Group();
	burgers = new Group();
	deads = new Group();
	googles = new Group();
	lipsticks = new Group();
	mails = new Group();
	nikes = new Group();
	rings = new Group();
	stars = new Group();
	//this loads the clock animation
	clockTick = loadAnimation('clock1.png', 'clock8.png');
	
	//this adds the animations into sprites and to the groups
	for (var i =0; i< 30; i++) {
		//creates a sprite for the babies
		var newBaby = createSprite(random(width/3,2*(width/3)), random(200,height/3));
		newBaby.addAnimation('dancing', 'baby1.png', 'baby4.png');
		newBaby.visible = false;
		babies.add(newBaby);
		//creates a sprite for the burgers
		var newBurger = createSprite(random(width/3,2*(width/3)), random(200,height/3));
		newBurger.addAnimation('dancing', 'burger1.png', 'burger9.png');
		newBurger.visible = false;
		newBurger.setCollider('circle');
		burgers.add(newBurger);
		//creates a sprite for the graves
		var newGrave = createSprite(random(width/3,2*(width/3)), random(200,height/3));
		newGrave.addAnimation('dancing', 'dead1.png', 'dead6.png');
		newGrave.visible = false;
		deads.add(newGrave);
		//creates a sprite for the google logo
		var newGoogle = createSprite(random(width/3,2*(width/3)), random(200,height/3));
		newGoogle.addAnimation('dancing', 'google1.png', 'google5.png');
		newGoogle.visible = false;
		googles.add(newGoogle);
		//creates a sprite for the lipsticks
		var newLipstick = createSprite(random(width/3,2*(width/3)), random(200,height/3));
		newLipstick.addAnimation('dancing', 'lipstick1.png', 'lipstick5.png');
		newLipstick.visible = false;
		lipsticks.add(newLipstick);
		//creates a sprite for the mail
		var newMail = createSprite(random(width/3,2*(width/3)), random(200,height/3));
		newMail.addAnimation('dancing', 'mail1.png', 'mail2.png');
		newMail.visible = false;
		mails.add(newMail);
		//creates a sprite for the nikes
		var newNike = createSprite(random(width/3,2*(width/3)), random(200,height/3));
		newNike.addAnimation('dancing', 'nike1.png', 'nike5.png');
		newNike.visible = false;
		nikes.add(newNike);
		//creates a sprite for the rings
		var newRing = createSprite(random(width/3,2*(width/3)), random(200,height/3));
		newRing.addAnimation('dancing','ring1.png', 'ring2.png');
		newRing.visible = false;
		rings.add(newRing);
		//creates a sprite for the stars
		var newStar = createSprite(random(width/3,2*(width/3)), random(200,height/3));
		newStar.addAnimation('dancing', 'star1.png', 'star4.png');
		newStar.visible = false;
		stars.add(newStar);
	}
}
//this displays the Baby sprites when its their time, and sets a collider so that they dont overlap
//the code makes them fall by incrementing the y position and switching once they reacht the bottom.
//the code also maps the y position to the rotation of the sprites
function showBabies(group) {
	for (var a = 0; a< group.length; a++) {
			var b = group[a];
			b.visible = true;
			b.position.y += random(1,10);
			if (b.position.y == height-200) {
				b.position.y -= random(1,10);
			}
			let turn = map(b.position.y, 0,height/2, 0,360);
			b.rotation = turn;
			b.setCollider('circle',0,0,100);
	}
	//this makes the items in the group bounce against each other.
	group.bounce(group);
	myMove(group);
}
//this displays the Email sprites when its their time, and sets a collider so that they dont overlap
//the code also pushes the sprites toward the four corners of the screen with an attraction point
function showEmails(group){
	for (var a = 0; a< group.length; a++) {
			var b = group[a];
			b.visible = true;
			b.scale = random(0.1,1.5);
			if (b.position.x < width/2 && b.position.y < height/2) {
				b.position.x += 1;
				//b.attractionPoint(0.2, 0,0);
			} else if (b.position.x > width/2 && b.position.y > height/2) {
				b.position.x -= 1;
				//b.attractionPoint(0.2, width,height);
			} else if (b.position.x > width/2 &&  b.position.y < height/2) {
				b.position.x -= 1;
				//b.attractionPoint(0.2, width,0);				 
			} else {
				b.position.x += 1;
				//b.attractionPoint(0.2, 0,height);		
			}
			b.setCollider('circle',0,0,100);
	}
	group.bounce(group);
	myMove(group);
}
//this displays the Engagement rings sprites when its their time, and sets a collider so that they dont overlap
//the code controls the position by pushing the sprites away from the middle.
function showRings(group) {
	for (var a = 0; a< group.length; a++) {
			var b = group[a];
			b.visible = true;
			b.friction = random(0.5);
			if (b.position.x < width/2) {
				b.position.x -= random(1,10);
			} else {
				b.position.x += random(1,10);
			}
			b.setSpeed(2,random(2,1));
			b.setCollider('circle',0,0,100);
	}
	group.bounce(group);
	myMove(group);
}
//this displays the Graves when its their time, and sets a collider so that they dont overlap
//the code also direction of the sprites making them rise with some friction and removing them when they reach the top.
//the code also controls scale by maping it to the y position, they get smaller as they rise
function showGraves(group) {
	for (var a = 0; a< group.length-1; a++) {
			var b = group[a];
			b.visible = true;
			b.friction = random(0.5);
			b.position.y -= random(1,5);
			//b.immovable = true;
			if (b.position.y < 100) {
				b.remove();
			}
			let shrink = map(b.position.y, 0,height,0.1,1);
			b.scale = shrink;
			//b.setSpeed(2,random(2,1));
			b.setCollider('circle',0,0,100);
	}
	group.bounce(group);
	myMove(group);
}
//this displays the Google sprites when its their time, and sets a collider so that they dont overlap
//the code also sets an attraction point to the mouse position and randomly changes the scale. 
function showGoogle(group) {
	for (var a = 0; a< 10; a++) {
			var b = group[a];
			b.visible = true;
		//this slows down the force acting on it.
			b.friction = random(0.1);
		//this makes the google text move around in the center of the screen
		b.attractionPoint(3, mouseX,mouseY);
		b.scale = random(0.5, 1);
		b.maxSpeed = 5;
			//b.setSpeed(2,random(2,1));
			b.setCollider('circle',0,0,100);
	}
	group.bounce(group);
	myMove(group);
}
//this displays the Nike signs when its their time, and sets a collider so that they dont overlap
//the code also controls the position of the sprites so they dont stack too high or too wide
function showNike(group) {
	for (var a = 0; a< 20; a++) {
			var b = group[a];
			b.visible = true;
			b.position.y += random(1,10);
			//b.setSpeed(2,0);
			if (b.position.y == height-50) {
				b.position.y -= random(1,10);
				//b.setSpeed(2,0);
			}
			if (b.position.x > width-50){
				b.position.x -= random(1,10);
			} else if (b.position.x < 50){
				b.position.x += random(1,10);
			}
			b.setCollider('circle',0,0,100);
	}
	group.bounce(group);
	myMove(group);
}
//this displays the lipstick when its their time, and sets a collider so that they dont overlap
//the code also controls the y position of the sprites, attracting them to the middle of the screen.
function showLipstick(group) {
	for (var a = 0; a< 12; a++) {
			var b = group[a];
			b.visible = true;
		if (b.position.x > width-50) {
			b.position.x -=10;
		} else if (b.position.x <50) {
			b.position.x +=10;
		}
		if (b.position.y < height/2) {
			b.position.y += 5;
		} else if (b.position.y < height/2){
				b.position.y -= 5;
		} else {
				b.position.y = height/2;
		}
		b.setCollider('circle',0,0,100);
	}
	group.bounce(group);
	myMove(group);
}
//this displays the stars when its their time, and sets a collider so that they dont overlap
//the code also controls the rotation by mapping it to its y positon, it also maps the scale so the stars get bigger at the bottom.
function showStars(group) {
	for (var a = 0; a< group.length; a++) {
			var b = group[a];
			b.visible = true; 
			b.position.y +=5;
		let turn = map(b.position.y, 0,height/2, 0,360);
			b.rotation = turn;
		let grow = map(b.position.y, 0,height,0.5,1);
			b.scale = grow;
		//this changes the direction of the stars path.
		if (b.position.y > height-300) {
				b.position.y -= random(1,10);
			}
			b.setCollider('circle',0,0,100);
	}
	group.bounce(group);
	myMove(group);
}
//this displays the burgers when its their time, and sets a collider so that they dont overlap
//the code also controls the downward movement and shows the foil image once the burger is 'eaten'.
function showBurgers(group) {
	for (var a = 0; a< 20; a++) {
			var b = group[a];
			b.visible = true;
			b.position.y +=3;
			b.setCollider('circle',0,0,100);
			if(b.position.y > height-200){
				image(foil,b.position.x-5,b.position.y-200,200,100);
				b.visible = false;
			}
	}
	//this makes the items in the group bounce against each other.
	group.bounce(group);
	myMove(group);
}

//this hides the groups once their time is up
function unseen(group) {
	for (var a = 0; a< group.length; a++) {
		var b = group[a];
		b.visible = false;
	}
	//sound.stop();
}

//this makes on of the animations in the group follow the mouse position.
function myMove(group) {
	var c = group[group.length-1];
	c.position.x = mouseX;
	c.position.y = mouseY;
}

//the Generative design example had a really cool interactive background that maps the mouse location to the 
//drawing mode, I really liked it and I thought it added some vibrancy so I made it the default 'homescreen'
function homescreen() {
	clear();
  noFill();
  count = mouseX / 10 + 10;
  var para = mouseY / height;
  var tileWidth = width / tileCountX;
  var tileHeight = height / tileCountY;
	
  for (var gridY = 0; gridY <= tileCountY; gridY++) {
    for (var gridX = 0; gridX <= tileCountX; gridX++) {

      var posX = tileWidth * gridX + tileWidth / 2;
      var posY = tileHeight * gridY + tileHeight / 2;
      push();
      translate(posX, posY);
      // switch between modules
      switch (drawMode) {
      case 1:
        stroke(0);
        for (var i = 0; i < count; i++) {
          rect(0, 0, tileWidth, tileHeight);
          scale(1 - 3 / count);
          rotate(para * 0.1);
        }
        break;
      case 2:
        noStroke();
        for (var i = 0; i < count; i++) {
          var gradient = lerpColor(color(0, 0), color(166, 141, 5), i / count);
          fill(gradient, i / count * 200);
          rotate(QUARTER_PI);
          rect(0, 0, tileWidth, tileHeight);
          scale(1 - 3 / count);
          rotate(para * 1.5);
        }
        break;
      case 3:
        noStroke();
        for (var i = 0; i < count; i++) {
          var gradient = lerpColor(color(0, 130, 164), color(255), i / count);
          fill(gradient, 170);

          push();
          translate(4 * i, 0);
          ellipse(0, 0, tileWidth / 4, tileHeight / 4);
          pop();

          push();
          translate(-4 * i, 0);
          ellipse(0, 0, tileWidth / 4, tileHeight / 4);
          pop();

          scale(1 - 1.5 / count);
          rotate(para * 1.5);
        }
        break;
      }
      pop();
    }
  }
}

function draw(){
	background(255);
	//this is the code for the home screen or default part of the experience.
	homescreen();
	
	//the first 10 seconds show the ticking clock animation and the text
	if (time < 10000) {
		animation(clockTick,width/2,height/3);
		fill(0);
		textSize(width/20);
		if(pos< 500) {
			text('This is what happens every 10 seconds',width/2,500+pos);
			let m = map(mouseY,height/2,0,0,height,0);
			pos = m;
			//pos+= sin(frameCount/2);
		} else {
			pos= 0-pos;
		}
		//text('This is what happens every 10 seconds',width/2,500);
		stroke(0);
	} else if (time <20000) {//this time conditions control the pace in which the facts are shown i.e. every second
		background(255);
		//makes the baby animation play and displays the fact
		showBabies(babies);
		fill(0);
		textSize(width/20);
		text('43 babies are born',width/2,500);
	} else if (time < 30000) {
		background(255);
		//hides the previous group
		unseen(babies);
		//makes the emails animation play and displays the fact
		fill(0);
		textSize(width/20);
		//seen(mails);
		showEmails(mails);
		//myEmail.play();
		text('24,378,590 emails are sent',width/2,500);
	} else if (time < 40000) {
		background(255);
		//hides the previous group
		//myEmail.stop();
		unseen(mails);
		//makes the burger animation play and displays the fact
		showBurgers(burgers);
		fill(0);
		textSize(width/20);
		text('750 McDonalds Burgers are eaten',width/2,500);
	} else if (time < 50000) {
		background(255);
		//hides the previous group
		unseen(burgers);
		//makes the rings animation play and displays the fact
		showRings(rings);
		fill(0);
		textSize(width/20);
		text('9 weddings take place',width/2,500);
	} else if (time < 60000) {
		background(255);
		//hides the previous group
		unseen(rings);
		//makes the grave animation play and displays the fact
		showGraves(deads);
		fill(0);
		textSize(width/20);
		text('18 people die',width/2,500);
	} else if (time < 70000) {
		background(255);
		//hides the previous group
		unseen(deads);
		//makes the google animation play and displays the fact
		showGoogle(googles);
		fill(0);
		textSize(width/20);
		text('30,000,000 Google searches are made',width/2,500);
	} else if (time < 80000) {
		background(255);
		//hides the previous group
		unseen(googles);
		//makes the lipstick animation play and displays the fact
		showLipstick(lipsticks);
		fill(0);
		textSize(width/20);
		text('600 lipsticks are produced',width/2,500);
	} else if (time < 90000) {
		background(255);
		//hides the previous group
		unseen(lipsticks)
		//makes the nike animation play and displays the fact
		showNike(nikes);
		fill(0);
		textSize(width/20);
		text('Nike earns $6000',width/2,500);
	} else if (time < 100000) {
		background(255);
		//hides the previous group
		unseen(nikes);
		//makes the stars animation play and displays the fact
		showStars(stars);
		fill(0);
		textSize(width/20);
		text('40,000 new stars are created',width/2,500);
	} else {
		background(255);
		//hides the previous group
		unseen(stars);
		fill(0);
		textSize(width/20);
		text('You watched all of this',width/2,height/3);
		if (time > 100500) {
			image(troll, width/3, height/2,500,300);
		}
	}
	time = millis();
	
	//this part of the code ensures that all the sprites bounce at the screen edges.
	//I got the code from the p5.play library examples because I had trouble keeping them within ths screen
  for(var i=0; i<allSprites.length; i++) {
    var d = allSprites[i];
		//accesses all sprites checks if the x position is less than zero
    if(d.position.x<0) {
      d.position.x = 1;
      d.velocity.x = abs(d.velocity.x);
    }

    if(d.position.x>width) {
      d.position.x = width-1;
      d.velocity.x = -abs(d.velocity.x);
    }

    if(d.position.y<0) {
      d.position.y = 1;
      d.velocity.y = abs(d.velocity.y);
    }

    if(d.position.y>height) {
      d.position.y = height-1;
      d.velocity.y = -abs(d.velocity.y);
    }
  }
	drawSprites();
}
function mousePressed() {
	//this part allows the sounds to be controlled with the mouse clicks at the appropriate times. I also set the volume to 2 when its their turn.
	if (time<10000){
		if (!song.isPlaying()) {
			song.loop();
		}
	} else if (time < 20000) {
		//song.setVolume(0.3);
		myCry.setVolume(2);
		myCry.play();
	} else if (time < 30000) {
		myCry.stop();
		myEmail.setVolume(2);
		myEmail.play()
	} else if (time < 40000) {
		myEmail.stop();
		myFoil.play();
		myMouth.setVolume(2);
		myMouth.play();
	} else if (time < 50000) {
		myFoil.stop();
		myMouth.stop();
		myYes.setVolume(2);
		myYes.play();
		myPop.setVolume(2);
		myPop.play();
	} else if (time < 60000) {
		myYes.stop();
		myPop.stop();
		myBell.setVolume(2);
		myBell.play();
	} else if (time < 70000) {
		myBell.stop();
		myKeys.setVolume(2);
		myKeys.play();
	} else if (time < 80000) {
		myKeys.stop();
		myKiss.setVolume(2);
		myKiss.play();
	} else if (time < 90000) {
		myKiss.stop();
		myChing.setVolume(2);
		myChing.play();
	} else if (time < 100000) {
		myChing.stop();
		myPop.setVolume(2);
		//song.setVolume(2);
		myPop.play();
	} else {
		if (time >105000) {
			myPop.play()
		}
		myPop.stop();
	}
}