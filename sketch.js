
function preload(){
  //pre-load image
  runner_image = loadAnimation("Runner-1.png","Runner-2.png");

  Path = loadImage("path.png");
  bomb = loadImage("bomb.png");
  coin = loadImage("coin.png");
  power = loadImage("power.png")
  energyDrink = loadImage("energyDrink.png");
}

function setup(){
  createCanvas(400,400);

  //create sprites here
  path = createSprite(400,400);
  path.addImage(path.png);
  path.velocityY = 4;
  path.scale=1.2;
  //code to reset the background
  if(path.y > 400 ){
    path.y=height/2;

  //creating the running surfer
  man=createSprite(200,80,100,100);
  
  }
}

function draw() {
  background(0);
drawSprites();
}
