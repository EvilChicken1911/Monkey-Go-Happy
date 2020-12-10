var monkey,ground, bananaGroup, obstacleGroup, score, banana, obstacle;
var monkeyimg, bananaimg, obstacleimg, bgimg;

function preload(){
  monkeyimg = loadAnimation("Monkey_01.png", "Monkey_02.png", "Monkey_03.png", "Monkey_04.png", "Monkey_05.png", "Monkey_06.png", "Monkey_07.png", "Monkey_08.png", "Monkey_09.png", "Monkey_10.png");
  bananaimg = loadImage("banana.png");
  obstacleimg = loadImage("stone.png");
  bgimg = loadImage("jungle.jpg");
}

function setup() {
  createCanvas(800,800);
  monkey = createSprite(80,650, 100,100);
  monkey.addAnimation("monkey", monkeyimg);
  monkey.scale = 0.10;
  ground = createSprite(0,700,800,20);
  ground.visible = false;
  bananaGroup = new Group();
  obstacleGroup = new Group();
  score = 0;
}

function draw() {
  
  background(bgimg);
  
  if(keyDown("space") && monkey.y > 600)
  {
    monkey.velocityY = -20;
  }
  
  monkey.velocityY = monkey.velocityY + 0.8;
  
  monkey.collide(ground);
  
  Banana();
  
  Obstacles();
  
  //score = score+Math.round(frameRate()/60);
  if(monkey.isTouching(bananaGroup)){
    score = score+2;
    bananaGroup.destroyEach();
    switch(score){
      case 10: monkey.scale = 0.12;
        break;
        case 20: monkey.scale = 0.14;
        break;
        case 30: monkey.scale = 0.16;
        break;
        case 40: monkey.scale = 0.18;
        break;
        default:break;
    }
  }
  stroke("white");
  textSize(20);
  fill("white");
  text("Score: " + score, 500,50);
  
  if(obstacleGroup.isTouching(monkey)){
    monkey.scale=0.2;
  }
  
  drawSprites();  
  
}

function Banana(){
  if(frameCount % 80 == 0){
    banana = createSprite(400,random(600,750))
    banana.addImage(bananaimg);
    banana.scale = 0.05;
    banana.velocityX = -25;
    bananaGroup.add(banana);
    banana.lifetime = 150;
  }
}

function Obstacles(){
  if(frameCount % 300 == 0){
    obstacle = createSprite(800,725)
    obstacle.addImage(obstacleimg);
    obstacle.scale = 0.25;
    obstacle.velocityX = -25;
    obstacleGroup.add(obstacle);
    obstacle.lifetime = 150;
  }
}

  
