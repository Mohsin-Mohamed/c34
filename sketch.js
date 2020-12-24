
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Constraint = Matter.Constraint;

var ball, box
var ground, sling
function preload()
{
	
}

function setup() {
	createCanvas(800, 700);

	engine = Engine.create();
	world = engine.world;

	ground=new Ground(400,695,1600,30)
	ball=new Ball(400,400,80,80)
	sling=new Slingshot(ball.body,{x:400,y:100})
	box1=new Box(700,690,70,70)
	box2=new Box(700,640,70,70)
	box3=new Box(700,590,70,70)
	box4=new Box(700,540,70,70)
	box5=new Box(700,490,70,70)

	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background(245);
  
  ground.display()
  ball.display()
  sling.display()
  box1.display()
  box2.display()
  box3.display()
  box4.display()
  box5.display()
}

function mouseDragged(){
	Matter.Body.setPosition(ball.body,{x:mouseX,y:mouseY})
}

function mouseReleased(){
	sling.fly()	
}
function keyPressed(){
	if(keyCode===32){
		sling.attach(ball.body)
	}
}

