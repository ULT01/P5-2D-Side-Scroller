
function Person() {

  this.pos = createVector(50, 250);

  this.vel = createVector(1, 0);

  this.acc = createVector(2, 0);

  this.mass = 10;
  
  // this.jump = 0;





 this.applyForce = function(force) {

    this.acc.add(force);

 }



  this.update = function() {

    this.vel.add(this.acc);

    this.pos.add(this.vel);

    this.acc.set(0, 0);

  }



  this.display = function() {

    fill(162, 127, 28);

    stroke(255);

    rect(this.pos.x + 200, this.pos.y + 70, this.mass*2, this.mass*4);

    // text("Current Score: " + this.jump, 200 + this.x.pos, 200);
          
  }

  this.edges = function() {

  	if (this.pos.y > 250) {

      this.vel.y *= 0;

      this.pos.y = 250;

  	}

  
	 if ( this.pos.x > width) {

      this.vel.x *= -1;

      this.pos.x = width;
   }


  else if (this.pos.x < 0) {
      
      	this.vel.x *= 1;

      	this.pos.x = width;
    }
  }
}
	
