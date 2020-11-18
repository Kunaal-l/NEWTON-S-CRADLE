const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;

var engine, world;

var platform;
var ball,ball2,ball3,ball4,ball5,ball6,line1,line2,line3,line4,line5,line6;




function setup(){
    var canvas = createCanvas(1200,400);
    engine = Engine.create();
    world = engine.world;


    ground = new Ground(600,height,1200,20);
    
    board = new Ground(400,40,350,10);
    
    

   ball = new Ball(20,50);
   ball2 = new Ball(20,70);
   ball3 = new Ball(20,90);
   ball4 = new Ball(20,110);
   ball5 = new Ball(20,130);
   ball6 = new Ball(20,150);
   
    
    line1= new Line(ball.body,{x:380, y:40});
    line2= new Line(ball2.body,{x:400, y:40});
    line3= new Line(ball3.body,{x:420, y:40});
    line4= new Line(ball4.body,{x:440, y:40});
    line5= new Line(ball5.body,{x:460, y:40});
    line6= new Line(ball6.body,{x:480, y:40});
     

}

function draw(){
   
        background("green");

       
        
    
    Engine.update(engine);
    
   
    ground.display();
   
    
   
    
   

    
    
    ball.display();
    ball2.display();
    ball3.display();
    ball4.display();
    ball5.display();
    ball6.display();
    
    line1.display();  
    line2.display();
    line3.display();
    line4.display();
    line5.display();
    line6.display();
    
    board.display();

    
}

function mouseDragged(){
    
        Matter.Body.setPosition(ball.body, {x: mouseX , y: mouseY});
    
    
}


