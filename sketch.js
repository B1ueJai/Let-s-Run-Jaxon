var path, pathImage;
var runner, runAni;
var leftB, rightB;
 

function preload(){
  //pre-load images
  pathImage = loadImage("path.png");
  runAni = loadAnimation("Runner-1.png", "Runner-2.png");
}

function setup(){
  createCanvas(400,700);

  //create sprites here
  path = createSprite(200,350);
  path.addImage("path", pathImage);
  path.scale = 1.2;
  path.velocityY = 4;

  leftB = createSprite(10,350,20,700);
  leftB.visible = false;
  rightB = createSprite(390,350,20,700);
  rightB.visible = false;

  runner = createSprite(200,400,10,10);
  runner.addAnimation("running", runAni);
  runner.scale = 0.05;
}

function draw() {
  background(0);

  if(path.y > 600) {
    path.y = path.height/2;
    path.velocityY = 4;
 } 

  runner.x = World.mouseX;
  runner.collide(leftB);
  runner.collide(rightB);

  if(runner.x < 50) {
    runner.x = 50;
  }
  
  if(runner.x > 365) {
    runner.x = 365;
  }

  drawSprites();
}

