class Drop{
    constructor(x,y){
        this.x = x;
        this.y = y;
    }

    fall(){
        this.y += random(1, 10);
        if(this.y>600){
            this.x = random(0,600);
            this.y= random(0, 600);
        }
    }

    show(){
        ellipseMode(CENTER);
        fill("#FFFFB3");
        ellipse(this.x, this.y, 4);
    }
}