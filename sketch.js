const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Render = Matter.Render;
const Constraint=Matter.Constraint;
var particles=[];
var plinkos=[];
var divisions=[];
var divisionHeight=300;
var score=0;
var turn=0;
var particle;
var backgroundImg

function preload(){
backgroundImg=loadImage("backgroundblack.jpg")
}

function setup() {
createCanvas(displayWidth - 20, displayHeight-180);
engine = Engine.create();
world = engine.world;

//polygon = Bodies.circle(50,200,20);
//World.add(world,polygon);


ground1=new Ground(700,570,1500,30);

for(var k = 25; k<=width; k=k+80){
    divisions.push(new Division(k,height-divisionHeight/2+30,10,divisionHeight-70));
}

for (var j = 50; j <=width; j=j+60) {
     plinkos.push(new Plinko(j,100));
     } 
     for (var j = 25; j <=width-10; j=j+50) {
          plinkos.push(new Plinko(j,180));
         } 
         for (var j = 50; j <=width; j=j+60) {
              plinkos.push(new Plinko(j,260)); 
            } 
            




var render = Render.create({
element: document.body,
engine: engine,
options: {
width: 1300,
height: 600,
wireframes: false
}
});

Engine.run(engine);

}

function draw() {

background(backgroundImg);
textSize(30)
text("SCORE: "+score,20,40);

Engine.update(engine);

if(particle!=null){
    particle.display();
    if(particle.body.position.y>760){
        if(particle.body.position.x<300){
            score=score+500;
            particle=null;
            if(count>= 5){
                gameState="end";
            }
        }
    }
}


for (var i = 0; i < plinkos.length; i++) { 
    plinkos[i].display();
 } 
 if(frameCount%60===0){ 
     particles.push(new Particle(random(width/2-30, width/2+30), 10,10)); 
     score++; 
    } 
    ground1.display();
    
     for (var k = 0; k < divisions.length; k++) {
          divisions[k].display(); 
        }
      
     
     for (var j = 0; j < particles.length; j++) 
    { 
        particles[j].display();
     } 

}
function mousePressed(){
    if(gameState!=="end"){
        count++;
        particle=new Particle(mouseX,10,10,10);
    }
}