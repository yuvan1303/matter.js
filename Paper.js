class Paper {
    constructor(x, y, radius) {
      var options = {
        'isStatic' :false,
        'restitution':0.3,
        'friction': 0.5,
        'density': 1.2
      }
      this.body = Bodies.circle(x, y, radius, options);
      this.RADIUS = radius;
      
      World.add(world, this.body);
    }
    display(){
      var pos =this.body.position;
      ellipseMode(RADIUS);
      fill(255,0,0);
      ellipse(pos.x,pos.y,this.RADIUS,this.RADIUS);
      
    }
  };