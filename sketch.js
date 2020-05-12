const Engine = Matter.Engine;
const Bodies = Matter.Bodies;
const World = Matter.World;

var engine,world;
var ground;
var gate3,gate1,gate2,gate4,gate5,gate6,gate7,gate8,gate9,gate10,gate11,gate12;
var castle1,castle2,castle3,castle4,castle5,castle6,castle7,castle8,castle9;
var top1,top2,top3,top4,top5;

function setup() {
  var canvas = createCanvas(800,800);

  engine = Engine.create();
  world = engine.world;
  
  ground = new Gate(400,770,700,10);

  gate3 = new Gate(400,645,500,40);
  gate1 = new Gate(360,680,40,170);
  gate2 = new Gate(440,680,40,170);
  gate4 = new Gate(400,640,40,50);
  gate5 = new Gate(120,690,60,150);
  gate6 = new Gate(680,690,60,150);
  gate7 = new Gate(555,715,190,100);
  gate8 = new Gate(245,715,190,100);
  gate9 = new Gate(555,645,30,60);
  gate10 = new Gate(245,645,30,60);
  gate11 = new Gate(120,600,90,30);
  gate12 = new Gate(680,600,90,30);

 
   castle1= new Castle(119,561,50,45);
   castle2= new Castle(681,561,50,45);
   castle3= new Castle(585,519,80,300);
   castle4= new Castle(585,420,110,40);
   castle5= new Castle(400,490,230,280);
   castle6= new Castle(225,549,80,350);
   castle7 = new Castle(225,420,110,40);
   castle8 = new Castle(400,275,180,150);
   castle9 = new Castle(400,195,140,150);

   top1=new tri(585,350,3,50);
   top2=new tri(225,350,3,50);
   top3=new tri(120,525,3,30);
   top4=new tri(680,525,3,30);
   top5=new tri(400,80,3,80);

 
}

function draw() {
  background(0);  

  Engine.update(engine);

  text(mouseX + ',' + mouseY, 10, 15);

  ground.display();
  
  fill("#e0960b");
  castle1.display();
  castle2.display();
  castle3.display();
  castle4.display();
  castle5.display();
  castle6.display();
  castle7.display();
  castle9.display(); 
  castle8.display(); 


  fill("grey")
  gate3.display();
  gate4.display();
  gate1.display();
  gate2.display();
  gate5.display();
  gate6.display();
  gate7.display();
  gate8.display();
  gate9.display();
  gate10.display();
  gate11.display();
  gate12.display();

  top1.display();
  top2.display();
  top3.display();
  top4.display();
  top5.display();
  


}