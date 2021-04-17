class Slingshot{
    constructor(bodyA, pointB){
        var options = {
            bodyA: bodyA,
            pointB: pointB,
            stiffness: 0.04,
            length: 10
        }
        this.sling = Constraint.create(options);
        World.add(world, this.sling);
        this.pointB=pointB;
    }

    display(){
        if(this.sling.bodyA){

        }
        
    }
fly(){
    this.sling.bodyA = null
}    
}