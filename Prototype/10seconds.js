let myFont, mySound, wide, tall;
let babies, burgers, deads, googles, lipsticks, mails, nikes, rings, stars;
let clockTick;
function preload() {
	myFont = loadFont('Quicksand-Regular.otf');
	mySound = loadSound('clock.wav');
}
function setup() {
	createCanvas(screen.width,screen.height);
	//sets the font and the size and the alignment of all of the text
	textFont(myFont);
	textSize(width/20);
	textAlign(CENTER, CENTER);
	
	//slows down the rate of the animations
	frameRate(30);
	
	//this sets the volume of the ticking sound and plays it in a loop
	mySound.setVolume(0.8);
	mySound.loop(); 
	
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
	
	clockTick = loadAnimation('clock1.png', 'clock8.png');
	
	//this adds the animations into sprites and to the groups
	for (var i =0; i< 40; i++) {
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
//this displays the groups when its their time, and sets a collider so that they dont overlap
function seen(group) {
	for (var a = 0; a< group.length; a++) {
		var b = group[a];
		b.visible = true;
		b.position.y += sin(frameCount/10);
		b.setCollider('circle',0,0,100);
	}
	group.bounce(group);
	myMove(group);
}
//this hides the groups once their time is up
function unseen(group) {
	for (var a = 0; a< group.length; a++) {
		var b = group[a];
		b.visible = false;
	}
}
function myMove(group) {
	var c = group[group.length-1];
	c.position.x = mouseX;
	c.position.y = mouseY;
}
function draw(){
	background(255);
	//This part displays the background animation

	
	//this is the code for the home screen or default part of the experience.
	//it plays the clock sound and shows the animated clock until the user clicks to start.
	let time = millis();
	if (time %10) {
		fill(0,100);
		ellipse(width/2,height/2,wide,tall);
		wide+=10;
		tall+=10;
	}
	
	if (time < 10000) {
		animation(clockTick,width/2,height/3);
		fill(0);
		text('This is what happens every 10 seconds',width/2,500);
		stroke(0);
		
	} else if (time <20000) {//this time conditions control the pace in which the facts are shown i.e. every second
		//makes the baby animation play and displays the fact
		seen(babies);
		//myMove(babies);
		fill(0);
		textSize(width/20);
		text('43 babies are born',width/2,500);
	} else if (time < 30000) {
		unseen(babies);
		//makes the emails animation play and displays the fact
		fill(0);
		textSize(width/20);
		seen(mails);
		myMove(mails);
		text('24,378,590 emails are sent',width/2,500);
	} else if (time < 40000) {
		unseen(mails);
		//makes the burger animation play and displays the fact
		seen(burgers);
		myMove(burgers);
		fill(0);
		textSize(width/20);
		text('750 McDonalds Burgers are eaten',width/2,500);
	} else if (time < 50000) {
		unseen(burgers);
		//makes the rings animation play and displays the fact
		seen(rings);
		myMove(rings);
		fill(0);
		textSize(width/20);
		text('9 weddings take place',width/2,500);
	} else if (time < 60000) {
		unseen(rings);
		//makes the grave animation play and displays the fact
		seen(deads);
		myMove(deads);
		fill(0);
		textSize(width/20);
		text('18 people die',width/2,500);
	} else if (time < 70000) {
		unseen(deads);
		//makes the google animation play and displays the fact
		seen(googles);
		myMove(googles);
		fill(0);
		textSize(width/20);
		text('30,000,000 Google searches are made',width/2,500);
	} else if (time < 80000) {
		unseen(googles);
		//makes the lipstick animation play and displays the fact
		seen(lipsticks);
		myMove(lipsticks);
		fill(0);
		textSize(width/20);
		text('600 lipsticks are produced',width/2,500);
	} else if (time < 90000) {
		unseen(lipsticks)
		//makes the nike animation play and displays the fact
		seen(nikes);
		myMove(nikes);
		fill(0);
		textSize(width/20);
		text('Nike earns $6000',width/2,500);
	} else if (time < 100000) {
		unseen(nikes);
		//makes the stars animation play and displays the fact
		seen(stars);
		myMove(stars);
		fill(0);
		textSize(width/20);
		text('40,000 new stars are created',width/2,500);
	} else {
		unseen(stars);
		fill(0);
		textSize(width/20);
		text('Refresh to Start Again',width/2,height/2);
		background(0);
	}
	time = millis();
	
	//this part of the code ensures that all the sprites bounce at the screen edges, I got the code from the p5.play library examples
  for(var i=0; i<allSprites.length; i++) {
    var d = allSprites[i];
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
	//I am looking to make it a bit more interactive by adding some changes with mouse press.
}