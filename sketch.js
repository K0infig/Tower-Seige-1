const World = Matter.World;
const Engine = Matter.Engine;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;


var polygonImg;

function preload(){
  polygonImg = loadImage("polygon.png");
}
function setup() {
  createCanvas(900,400);
  engine = Engine.create();
    world = engine.world;

    ground1 =  new Ground( 380, 300,250,10);
    ground2 =  new Ground( 700, 200,200,10);


    box1 = new Box(300,275,30,40);
    box2 = new Box(330,275,30,40);
    box3 = new Box(360,275,30,40);
    box4 = new Box(390,275,30,40);
    box5 = new Box(420,275,30,40);
    box6 = new Box(450,275,30,40);
    box7 = new Box(480,275,30,40);


    ball = Bodies.circle(50,200,20);
    World.add(world,ball);

    slingshot = new Slingshot(this.ball,{x:50,y:200});

  
}

function draw() {
  background(0);  
  Engine.update(engine);

  ground1.display();
  ground2.display();

  imageMode(CENTER);
  image(polygonImg,ball.position.x,ball.position.y,40,40);

  box1.display();
  box2.display();
  box3.display();
  box4.display();
  box5.display();
  box6.display();
  box7.display();


  slingshot.display();
  



}

function mouseDragged(){
  Matter.Body.setPosition(this.ball, {x: mouseX , y: mouseY});
}


function mouseReleased(){
  slingshot.fly();
}