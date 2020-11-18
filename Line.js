class Line{
    constructor(bodyA, pointB){
        var options = {
            bodyA: bodyA,
            pointB: pointB,
            stiffness: 2,
            length: 300
        }
        
        
        this.pointB = pointB
        this.rope = Constraint.create(options);
        World.add(world, this.rope);
    
    }
   
    
    
    display(){
      
       
       /// if(this.rope.bodyA){
            var pointA = this.rope.bodyA.position;
            var pointB = this.pointB;
        
            
            
            
            stroke(48,22,8);
            
            line(pointA.x - 20, pointA.y, pointB.x -10, pointB.y);
             
                
         
           
            
        
       // }
    }
    
}