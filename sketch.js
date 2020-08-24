const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;

  var world,engine;
  var particles=[];
  var plinko=[];
  var divisions=[];
  var divisonHeight=300;




function setup() {
  createCanvas(800,400);
  createSprite(400, 200, 50, 50);
}

function draw() {
  background(255,255,255);  
  drawSprites();
  if(frameCount%60===0)
  {
    particles.push(new Particle(random(width/2-10,width/2+10),10,10));
  }
  

}