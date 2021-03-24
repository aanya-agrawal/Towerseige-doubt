class polygon {
    constructor(x,y,rad){
        this.x = x;
        this.y= y ;
        this.radius=rad;
        var options ={
           // 'isStatic': true,
            'friction':0.2 ,
            'density': 0.3
        }

        this.body=Bodies.circle(this.x,this.y,this.radius,options);
        this.img=loadImage("polygon.png");
        World.add(world,this.body);
    }

    display(){
        var pos = this.body.position;
        imageMode(CENTER);
        image(this.img,pos.x,pos.y,this.radius,this.radius);
        
    }
}