class Umbrella {
    constructor(x ,y){
        this.image = loadImage("./BatmanBeginsImages/images/WalkingFrame/walking_1.png");
        var options = {
            friction:0.1
        }
        var radius =5;
        this.body = Bodies.circle(x,y,radius,options);
        World.add(world, this.body);
        this.radius = radius;
    }

    display(){
        var pos =this.body.position;
        push();
        // fill(255,0,0); //133, 66, 44);
        imageMode(CENTER);
        image(this.image, 100, 430, 260, 360); 
        pop();
    }
}