const Bodies=Matter.Bodies;
const Body=Matter.Body;
const Constraint=Matter.Constraint;
const Engine=Matter.Engine;
const World=Matter.World;

var backImg,tree,boy,mango,chain,stone,restart,restartImg;
var gameState="onHand";

function preload(){
backImg=loadImage("garden1.jpg");
restartImg=loadImage("restart.png")

}


function setup(){
    createCanvas(1600,800)
    engine=Engine.create();
    world=engine.world;
    tree=new Tree(1310,400,1100,750);
    boy=new Boy(200,500,300,350);
    mango= new Mango(1350,250,80,80);
    mango2= new Mango(1100,150,60,60);
    mango3= new Mango(1200,200,70,70);
    mango4=new Mango(1250,200,90,90)
    mango5=new Mango(1050,120,60,60)
    mango6=new Mango(1100,260,70,70)
    mango7=new Mango(1400,160,75,75)
    mango8=new Mango(1250,110,60,60)
    mango9=new Mango(1200,300,65,65);
    mango10=new Mango(1080,380,70,70);
    mango11=new Mango(1400,380,80,80);
    mango12=new Mango(1450,300,60,60);
    mango13= new Mango(1010,280,90,90);
    stone=new Stone(250,580);
    chain= new SlingShot(stone.body,{x:250,y:580});
   

   // sling= new Sling()
  //  console.log(mango.depth);

    restart=createSprite(100,100,15,15);
    restart.addAnimation("res",restartImg);
    restart.scale=0.4;




    


}

function draw(){

    background(backImg)
    Engine.update(engine);
    drawSprites();
   
   
    boy.display();
     tree.display();
      mango.display();
      mango2.display(); 
      mango3.display();
      mango4.display();    
      mango5.display();
      mango6.display();
      mango7.display();
      mango8.display();
      mango9.display();
      mango10.display();
      mango11.display();
      mango12.display();
      mango13.display();
      stone.display();
      chain.display();
      console.log(gameState)
      textFont("Arial Black");
    textSize(25);
    fill("red");
    text("CLICK ON RESTART BUTTON TO GET A CHANCE",130,200)
    if(mousePressedOver(restart)){
      Matter.Body.setPosition(stone.body,{x:250,y:580});
      gameState="onHand";
   //   Matter.Body.setStatic(stone.body,true);

    
      chain.attach(stone.body);
    //  gameState="onhand"
    }
     
      
      
}

function mouseReleased(){
  chain.fly();
  gameState="launched"
  Matter.Body.setStatic(stone.body,false);
}
function mouseDragged(){
  if(gameState!=="launched"){
  Matter.Body.setPosition(stone.body,{x:mouseX,y:mouseY});
  Matter.Body.setStatic(stone.body,false)
  }
}
