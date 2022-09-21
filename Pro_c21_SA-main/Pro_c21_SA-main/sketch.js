const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
let botãoup;
let engine;
var world;
var bola;
var ground;
var left;
var right;
var top_wall;
let botãor;
function setup() {
  createCanvas(400,400);
  engine = Engine.create();
  world = engine.world;
  var ballOptions={
    restituition:0.95
  }
botãoup = createImg("up.png")
botãoup.position(50,320)
botãoup.size (50,50)
botãoup.mouseClicked(forceV)
botãor =createImg("right.png")
botãor.position(120,320)
botãor.size (50,50)
botãor.mouseClicked(forceH)


ground =new Ground(200,390,400,20);
  right = new Ground(390,200,20,400);
  left = new Ground(10,200,20,400);
  top_wall = new Ground(200,10,400,20);
 bola= Bodies. circle(200,200,15,ballOptions)
World.add(world,bola)
  rectMode(CENTER);
  ellipseMode(RADIUS);
}

function draw() 
{
  background(51);
  ground.show();
  top_wall.show();
  left.show();
  right.show();
  Engine.update(engine);
  ellipse(200,200,15)
}
function forceV()
{
Matter.Body.applyForce(bola,{x:0,y:0},{x:0,y:-0.05})

}
function forceH()
{

  Matter.Body.applyForce(bola,{x:0,y:0},{x:0.05,y:0})
}