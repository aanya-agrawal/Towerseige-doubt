const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;
const constraint = Matter.Constraint;

var engine, world,polygon1;



function setup(){
    createCanvas(1200,400);
    background("black");
    engine = Engine.create();
    world = engine.world;


    ground = new Ground(600,height,1200,20);
    b1 = new block(330,325,30,40);
    b2 = new block(360,325,30,40);
    b3 = new block(390,325,30,40);
    b4 = new block(420,325,30,40);
    b5 = new block(450,325,30,40);

    b6 = new block(360,295,30,40);
    b7 = new block(390,295,30,40);
    b8 = new block(420,295,30,40);

    b9 = new block(390,265,30,40);

    b10 = new block(630,235,30,40);
    b11 = new block(660,235,30,40);
    b12 = new block(690,235,30,40);
    b13 = new block(720,235,30,40);
    b14 = new block(750,235,30,40);

    b15 = new block(660,205,30,40);
    b16 = new block(690,205,30,40);
    b17 = new block(720,205,30,40);

    b18 = new block(690,175,30,40);

    //b19 = new block(890,265,30,40);

    b20 = new block(930,135,30,40);
    b21 = new block(960,135,30,40);
    b22 = new block(990,135,30,40);
    b23 = new block(1020,135,30,40);
    b24 = new block(1050,135,30,40);

    b25 = new block(960,105,30,40);
    b26 = new block(990,105,30,40);
    b27 = new block(1020,105,30,40);

    b28 = new block(990,75,30,40);

    rope1 = new rope (polygon.body,{x:200,y:200});

    ground1 = new Ground(390,340,250,10);
    ground2 = new Ground(690,250,250,10);

    polygon1= new polygon(200,200,30);

    Engine.run(engine);

}

function draw(){
    ground.display();
    b1.display();
    b2.display();
    b3.display();
    b4.display();
    b5.display();
    b6.display();
    b8.display();
    b7.display();
    b9.display();
    b10.display();
    b11.display();
    b12.display();
    b13.display();
    b14.display();
    b15.display();
    b16.display();
    b17.display();
    b18.display();
    //b19.display();
    b20.display();
    b21.display();
    b22.display();
    b23.display();
    b24.display();
    b25.display();
    b26.display();
    b27.display();
    b28.display();
    ground1.display();
    ground2.display();
    polygon1.display();
    rope1.display();
    drawSprites();
}
