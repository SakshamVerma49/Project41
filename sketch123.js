var umbrella, umbrellaImg;
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

var drops = []
var maxDrops=1;

function preload(){
    //umbrellaImg = loadImage("./BatmanBeginsImages/images/WalkingFrame/walking_1.png");
}

function setup(){
    createCanvas(500, 900);
    engine = Engine.create();
    world = engine.world;

    for(var i=0; i<maxDrops; i++){
        drops.push(new Drop(random(0,900), random(0, 900)))
    }

    //umbrella = new Umbrella(590, 800, 20,200);
    Engine.run(engine);
}

function draw(){
    Engine.update(engine);
    background("black");

    drawSprites();
    for (var i = 0; i < drops.length; i++) {
        drops[i].fall();
        drops[i].show();    
     }

    // if(this.rain.position.y>height){
    //     Matter.Body.setPosition(this.rain, {x:(0,400), y:random(0,400)});
    // }
    //umbrella.display();
    //imageMode(CENTER)
    //image(umbrella, 692, 540, 250, 250);
}