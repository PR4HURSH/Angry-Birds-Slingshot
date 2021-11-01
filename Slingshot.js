class Sling{
    constructor(body1, point2){
        var options = {
            bodyA: body1,
            pointB: point2,
            stiffness: 0.04,
            length: 10
        }
        this.pointB = point2;
        this.chain = Constraint.create(options);
        World.add(world, this.chain);
    }
    fly(){
        this.chain.bodyA = null
    }
    display(){
        if(this.chain.bodyA){
            var A = this.chain.bodyA.position;
            var B = this.pointB;
            strokeWeight(4);
            line(A.x, A.y, B.x, B.y);  
        }
        
    }
    
}