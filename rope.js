class rope {
    constructor(BA,PB){
        var options = {
            bodyA : BA ,
            pointB : PB ,
            length: 8 ,
            stifness : 0.2 
        }

        this.bodyA = BA;
        this.pointB= PB;
        this.rope= constraint.create(options);
        World.add(world,this.rope);

    }

    display(){
        var apos = this.bodyA.position;
        var bpos = this.pointB ; 

        line(apos.x,apos.y,bpos.x,bpos.y);


    }
}