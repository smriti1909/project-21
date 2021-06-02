var bullet, wall, speed, weight;
var damage;
var thickness;



function setup() {
  createCanvas(800,400);
  bullet=createSprite(50,200,70,25);
  bullet.velocityX=4;
  thickness=random(22,83);
  wall=createSprite(800,200,thickness,400/2);
  wall.shapeColor=color(80,80,80);
  
  speed=random(223,321);
  weight=random(30,52);

}

function draw() {
  background(255,255,255); 
  if(wall.x-bullet.x <(bullet.width+wall.width)/2)
  {
    bullet.velocityX=0;
  damage=0.5*weight*speed*speed/thickness*thickness*thickness;
  if (damage>10){
wall.shapeColor= color(255,0,0);
  }else if(damage<10){
    wall.shapeColor=color(0,255,0);
  }
}

  drawSprites();
}