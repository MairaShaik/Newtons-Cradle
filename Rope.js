class Rope
{}constructor(body1,body2, offsetX, offsetY);
         this.offsetX;
         this.offsetY;
         var op = {
             bodyA: body1,
             bodyB:  body2,
             pointB:  {x:this.offsetX, y:this.offsetY}
         }

          this.rope =   Matter.Constraint.create(op);
          World.add(world,this.rope);
        
     display();
        point1 = this.rope.bodyA.position;
        point2 = this.rope.bodyB.position;
    
      strokeWeight(2);
    
     var Anchor1X = point1.x;
     var Anchor1Y = point1.y;
      
     var Anchor2X = point2.x + this.offsetX;
     var Anchor2Y = point2.y + this.offsetY;


     line(Anchor1X, Anchor2Y, Anchor2X, Anchor2Y);
