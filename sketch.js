
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Render = Matter.Render;
const Constraint = Matter.Constraint;
var bobObject1,bobObject2,bobObject3, bobObject4,bobObject5, roofObject
var rope1,rope2,rope3, rope4,rope5;
var world;


function setup() {
	createCanvas(800, 700);
	rectMode(CENTER);


	engine = Engine.create();
	world = engine.world;

	Roof = new roof();
	bob1 = new Bob(300,300)
	bob2 = new Bob(350,300)
	bob3 = new Bob(400,300)
	bob4 = new Bob(450,300)
	bob5 = new Bob(500,300)
	
	
	rope1 = new Rope(bob1.body,{x:300,y:100})
	rope2 = new Rope(bob2.body,{x:350,y:100})
	rope3 = new Rope(bob3.body,{x:400,y:100})
	rope4 = new Rope(bob4.body,{x:450,y:100})
	rope5 = new Rope(bob5.body,{x:500,y:100})
	
	Engine.run(engine);
	
  }

function draw() {
  Engine.update(engine);
	
  rectMode(CENTER);
  background(0);
  
  Roof.display();
  rope1.display();
  rope2.display();
  rope3.display();
  rope4.display();
  rope5.display();
  
  bob1.display();
  bob2.display();
  bob3.display();
  bob4.display();
  bob5.display();
}

function keyPressed(){
	if(keyCode === UP_ARROW){
		Matter.Body.applyForce(bob1.body,bob1.body.position,{x:-50,y:-50})
	}
}




