class Ball{
    constructor(x, y) {
        var options = {
            'restitution':0.8,
            'friction':1.0,
            'density':1.0
        }
        this.x = x;
        this.y = y;
        this.body = Bodies.circle(x, y, 50, options);
        this.image = loadImage("balll.png");
        World.add(world, this.body);
      }
      display(){
        var ballpos=this.body.position;
         push()
          translate(ballpos.x, ballpos.y); 
         
         ellipseMode(CENTER);
         ellipse(0,0,50)
         pop();
         //image(this.image,this.x, this.y,50,20);
      }
}