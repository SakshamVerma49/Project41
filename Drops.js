class Drop{
    constructor(x,y){
        var options = {
            friction:0.1
        }
        var radius =5;
        this.body = Bodies.circle(x,y,radius,options);
        World.add(world, this.body);
        this.radius = radius;
    }


    fall(){ //update
        var pos =this.body.position;     
        pos.y += random(3, 10) * random(1,3);
        if(pos.y>600){
            pos.x = random(0,600);
            pos.y= random(0,600);
        }
    }

    
    display(){
        var pos =this.body.position;
        push();
        // fill(255,0,0); //133, 66, 44);
        ellipseMode(CENTER);
        fill("#FFFFB3");
        ellipse(pos.x, pos.y, 4);
        pop();
    }
}