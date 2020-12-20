const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Constraint = Matter.Constraint;

var gameState = "play";

var particles = [];
var plinkos = [];
var divisions = [];

var particle;

var divisionHeight = 300;
var score = 0;
var turn = 0;

function setup() {
  createCanvas(890, 760);

  engine = Engine.create();
	world = engine.world;
  Engine.run(engine);

  ground = new Ground(width/2, height, width, 20);

  for (var k = 0; k <= width; k = k + 80) {
    divisions.push(new Divisions(k, height - divisionHeight/2, 10, divisionHeight));
  }

  for (var j = 75; j <= width; j = j + 50) {
    plinkos.push(new Plinko(j, 75));
  }

  for (var j = 50; j <= width - 10; j = j + 50) {
    plinkos.push(new Plinko(j, 175));
  }
  
  for (var j = 75; j <= width; j = j + 50) {
    plinkos.push(new Plinko(j, 275));
  }
  
  for (var j = 50; j <= width - 10; j = j + 50) {
    plinkos.push(new Plinko(j, 375));
  }

  
}

function draw() {
  background(0);
  Engine.update(engine);

  ground.display();

  for (var i = 0; i < plinkos.length; i ++) {
    plinkos[i].display();
  }
  
  
 
  for (var j = 0; j < particles.length; j ++) {
    particles[j].display();
  }
  
  for (var k = 0; k < divisions.length; k ++) {
    divisions[k].display();
  }

  if(gameState == "end") {
    textSize(100);
    text("Game Over", 150, 250);
  }

  if(particle != null) {
    particle.display();
    if(particle.body.position.y > 760) {
      if(particle.body.position.x < 80) {
        score = score + 500;
        particle = null;
        if(turn >= 5) gameState = "end";
      }

      else if(particle.body.position.x > 81 && particle.body.position.x < 160) {
        score = score + 350;
        particle = null;
        if(turn >= 5) gameState = "end";
      }

      else if(particle.body.position.x > 161 && particle.body.position.x < 240) {
        score = score + 350;
        particle = null;
        if(turn >= 5) gameState = "end";
      }

      else if(particle.body.position.x > 241 && particle.body.position.x < 320) {
        score = score + 250;
        particle = null;
        if(turn >= 5) gameState = "end";
      }

      else if(particle.body.position.x > 321 && particle.body.position.x < 400) {
        score = score + 100;
        particle = null;
        if(turn >= 5) gameState = "end";
      }

      else if(particle.body.position.x > 401 && particle.body.position.x < 480) {
        score = score + 100;
        particle = null;
        if(turn >= 5) gameState = "end";
      }

      else if(particle.body.position.x > 481 && particle.body.position.x < 560) {
        score = score + 100;
        particle = null;
        if(turn >= 5) gameState = "end";
      }

      else if(particle.body.position.x > 561 && particle.body.position.x < 640) {
        score = score + 100;
        particle = null;
        if(turn >= 5) gameState = "end";
      }

      else if(particle.body.position.x > 641 && particle.body.position.x < 720) {
        score = score + 250;
        particle = null;
        if(turn >= 5) gameState = "end";
      }

      else if(particle.body.position.x > 721 && particle.body.position.x < 800) {
        score = score + 350;
        particle = null;
        if(turn >= 5) gameState = "end";
      }

      else if(particle.body.position.x > 801 && particle.body.position.x < 880) {
        score = score + 500;
        particle = null;
        if(turn >= 5) gameState = "end";
      }
      else if(particle.body.position.x > 721 && particle.body.position.x < 800) {
        score = score + 350;
        particle = null;
        if(turn >= 5) gameState = "end";
      }
    }
  }
 
  textSize(30);
  textAlign(CENTER);
  fill(150, 100, 100);
  text("Score: " + score, 60, 30);

  textSize(15);
  textAlign(CENTER);
  fill(184, 223, 230);
  text("500", 40, 490);

  textSize(15);
  textAlign(CENTER);
  fill(184, 223, 230);
  text("350", 120, 490);

  textSize(15);
  textAlign(CENTER);
  fill(184, 223, 230);
  text("250", 200, 490);

  textSize(15);
  textAlign(CENTER);
  fill(184, 223, 230);
  text("100", 280, 490);

  textSize(15);
  textAlign(CENTER);
  fill(184, 223, 230);
  text("100", 360, 490);

  textSize(15);
  textAlign(CENTER);
  fill(184, 223, 230);
  text("100", 440, 490);

  textSize(15);
  textAlign(CENTER);
  fill(184, 223, 230);
  text("100", 520, 490);

  textSize(15);
  textAlign(CENTER);
  fill(184, 223, 230);
  text("250", 600, 490);

  textSize(15);
  textAlign(CENTER);
  fill(184, 223, 230);
  text("350", 680, 490);

  textSize(15);
  textAlign(CENTER);
  fill(184, 223, 230);
  text("500", 760, 490);

  textSize(15);
  textAlign(CENTER);
  fill(184, 223, 230);
  text("350", 840, 490);

  drawSprites();
}

function keyPressed(){
 
  if(keyCode === 32 && gameState !== "start"){
  turn ++
    particle = new Particle(random(width/2 - 30), 10, 10, 10);
  }
}