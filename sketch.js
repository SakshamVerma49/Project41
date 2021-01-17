const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
var drops = []
var maxDrops=1000;
var umbrella
function preload(){
    
}

function setup(){
    engine = Engine.create();
	world = engine.world;
    umbrella = new Umbrella(50,500);
    for(var i=0; i<maxDrops; i++){
        drops.push(new Drop(random(0,600), random(0, 600)))
    }

    Engine.run(engine);
}
function draw(){
    createCanvas(500,600);
    background("black");
    
    for (var i = 0; i < drops.length; i++) {
        drops[i].display();   
        drops[i].fall();
 
     }

    drawSprites();
    umbrella.display();
    // image(umbrellaImg, 0,360,200, 250);
}