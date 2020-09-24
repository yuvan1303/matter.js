
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

var ground;
var paper1;
var dustbin1;
var dustbin2;
var dustbin3;


function setup() {
	createCanvas(800, 700);


	engine = Engine.create();
	world = engine.world;

	ground = createSprite(400,690,800,20);

	paper1 = new Paper(150,670,10,10);

	dustbin1 = new Dustbin(500,670,100,20);
	dustbin2 = new Dustbin(450,640,20,100);
	dustbin3 = new Dustbin(550,640,20,100);
	//Create the Bodies Here.


	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background(0);
  Engine.update(engine)

  ground.shapeColor = color(225);

  paper1.display();
  dustbin1.display();
  dustbin2.display();
  dustbin3.display();
  
  drawSprites();
}

function keyPressed()
{
  if (keyCode === "space") 
  {

  Matter.body.applyForce(paper1.body,paper1.body.position,{x:85,y:-85})

  } 
}



