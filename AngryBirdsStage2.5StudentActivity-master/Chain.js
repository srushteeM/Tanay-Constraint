class Chain{
    constructor(a,b){
        var options={
            bodyA:a,
            bodyB:b,
            length:100,
            stiffness:1.0
        }
        this.chain=Constraint.create(options);
        World.add(world,this.chain);
        console.log(this.chain);
    }
    display(){
       var pointA=this.chain.bodyA.position;
       var pointB=this.chain.bodyB.position;
       line(pointA.x,pointA.y,pointB.x,pointB.y);
    }
}