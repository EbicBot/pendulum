var helicopterIMG, helicopterSprite, packageSprite,packageIMG;
var packageBody,ground
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Constraint = Matter.Constraint
var bobObject1, bobObject2, bobObject3, bobObject4, bobObject5, roofObject;
var rope1, rope2, rope3, rope4, rope5;
var bobDiameter = 40;

function preload()
{
	
}

function setup() {
	createCanvas(800, 700);


	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.
	
	startBobPositionX=width/2;
	startBobPositionY=height/4+500;

	roofObject = new roof(width/2,height/4,width/2,20);
	bobObject1 = new bob(320,575,bobDiameter);
	bobObject2 = new bob(360,575,bobDiameter);
	bobObject3 = new bob(400,575,bobDiameter);
	bobObject4 = new bob(440,575,bobDiameter);
	bobObject5 = new bob(480,575,bobDiameter);

	

	rope1 = new rope(bobObject1.body, roofObject.body, -(bobDiameter*4),0);	
	rope2 = new rope(bobObject2.body, roofObject.body, -(bobDiameter*2),0);
	rope3 = new rope(bobObject3.body, roofObject.body, 0,0);
	rope4 = new rope(bobObject4.body, roofObject.body, (bobDiameter*2),0);
	rope5 = new rope(bobObject5.body, roofObject.body, (bobDiameter*4),0);


	Engine.run(engine);
  
}


function draw() {

	keyPressed();


  rectMode(CENTER);
  background(100);

  rope1.display();
  rope2.display();
  rope3.display();
  rope4.display();
  rope5.display();

  roofObject.display();

  bobObject1.display();
  bobObject2.display();
  bobObject3.display();
  bobObject4.display();
  bobObject5.display();


  drawSprites();
 
}

function keyPressed(){
	if(keyCode === UP_ARROW){
		Matter.Body.applyForce (bobObject1.body,bobObject1.body.position,{x:-50,y:-45});
	}
}

