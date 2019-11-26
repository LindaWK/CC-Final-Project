let myFont, mySound;
//let baby, burger, dead, google, lipstick, mail, nike, ring, star;
let babies, burges, deads, googles, lipsticks, mails, nikes, rings, stars;
function preload() {
	myFont = loadFont('Quicksand-Regular.otf');
	mySound = loadSound('clock.wav');
}
function setup() {
	createCanvas(screen.width,screen.height);
	textFont(myFont);
	textSize(width/20);
	textAlign(CENTER, CENTER);
	
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
	
	//this adds the animations into sprites and to the groups
	for (var i =0; i< 10; i++) {
		//for the babies
		var newBaby = createSprite(random(width/3,2*(width/3)), random(200,height/3));
		newBaby.addAnimation('dancing', 'baby1.png', 'baby4.png');
		newBaby.visible = false;
		//newBaby.setSpeed(random(2, 3), random(0, 360));
		babies.add(newBaby);
		//for the burgers
		var newBurger = createSprite(random(width/3,2*(width/3)), random(200,height/3));
		newBurger.addAnimation('dancing', 'burger1.png', 'burger9.png');
		newBurger.visible = false;
		burgers.add(newBurger);
		//for the graves
		var newGrave = createSprite(random(width/3,2*(width/3)), random(200,height/3));
		newGrave.addAnimation('dancing', 'dead1.png', 'dead6.png');
		newGrave.visible = false;
		deads.add(newGrave);
		//for the google logo
		var newGoogle = createSprite(random(width/3,2*(width/3)), random(200,height/3));
		newGoogle.addAnimation('dancing', 'google1.png', 'google5.png');
		newGoogle.visible = false;
		googles.add(newGoogle);
		//for the lipsticks
		var newLipstick = createSprite(random(width/3,2*(width/3)), random(200,height/3));
		newLipstick.addAnimation('dancing', 'lipstick1.png', 'lipstick5.png');
		newLipstick.visible = false;
		lipsticks.add(newLipstick);
		//for the mail
		var newMail = createSprite(random(width/3,2*(width/3)), random(200,height/3));
		newMail.addAnimation('dancing', 'mail1.png', 'mail2.png');
		newMail.visible = false;
		mails.add(newMail);
		//for the nikes
		var newNike = createSprite(random(width/3,2*(width/3)), random(200,height/3));
		newNike.addAnimation('dancing', 'nike1.png', 'nike5.png');
		newNike.visible = false;
		nikes.add(newNike);
		//for the rings
		var newRing = createSprite(random(width/3,2*(width/3)), random(200,height/3));
		newRing.addAnimation('dancing','ring1.png', 'ring2.png');
		newRing.visible = false;
		rings.add(newRing);
		//for the stars
		var newStar = createSprite(random(width/3,2*(width/3)), random(200,height/3));
		newStar.addAnimation('dancing', 'star1.png', 'star4.png');
		newStar.visible = false;
		stars.add(newStar);
	}
}
//this displays the groups when its their time
function seen(group) {
	for (var a = 0; a< group.length; a++) {
		var b = group[a];
		b.visible = true;
		b.position.y += sin(frameCount/10);
	}
}
//this hides the groups once their time is up
function unseen(group) {
	for (var a = 0; a< group.length; a++) {
		var b = group[a];
		b.visible = false;
	}
}
function myMove(group) {
	var c = group[2];
	c.position.x = mouseX;
	c.position.y = mouseY;
}
function draw(){
	background(255);
	//this is the code for the home screen or default part of the experience.
	//it plays the clock sound and shows the animated clock until the user clicks to start.
	let time = millis();
	mySound.setVolume(0.2);
	mySound.loop(); // this should loop the ticking sound but its not working at the moment
	if (time < 10000) {
		fill(0);
		text('This is what happens every 10 seconds',width/2,500);
		stroke(0);
		
	} else if (time <20000) {//this time conditions control the pace in which the facts are shown i.e. every second
		background(255);
		//makes the baby animation play and displays the fact
		seen(babies);
		myMove(babies);
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
		text('Start Again?',width/2,height/2);
		if (key == "y" || key == "Y") {
			time=0;
		} else if (key == "n" || key == "N") {
			text('Goodbye!',width/2,height/2);
			background(255);
		}
	}
	time = 0;
	drawSprites();
}
function mousePressed() {
	
}