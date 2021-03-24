class block {
    constructor(x,y,wid,hei){
        this.width = wid;
        this.height = this.hei;
        this.x=x;
        this.y=y;
        var options={
            'friction':0.2 ,
            'density':0.3 
        }

        this.block = Bodies.rectangle(this.x,this.y,this,this.width,this.height,options);
    }

    display(){
        var pos =this.block.position;
        rectMode(CENTER);
        rect(pos.x,pos.y,this.width,this.width);
    }
}