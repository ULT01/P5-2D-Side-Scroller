var person;


var sceneNum = 0;

var score = 0;



function setup() {
  createCanvas(640, 360);

  person = new Person();

  

}



function keyPressed() {

  if (key === ' ') {

    var jump = createVector(0, -3.5);

    	person.applyForce(jump);
    
    score ++;

  }			 else if (key == 'q') {
    sceneNum ++;
  }
  
  	else if (key == 'x') {
      sceneNum += 2;
    }
  
		else if (key == 'r') {
      sceneNum = 0;
    }
}



function draw() {
  
  if (sceneNum === 0) {
    background(255, 185, 0);
    textSize(20);
    fill(255, 50, 205);
    text('Press "q" to play', 200, 150);
    text('Press "space" to jump', 200, 250);
  } else if (sceneNum===1){
  

  background(255, 185, 0);

  

  translate(-person.pos.x + 50, 0);

  var gravity = createVector(0, 0.1);

  person.applyForce(gravity);

  

  person.update();

  person.edges();
    
        
	person.display();
    
   

  if (mouseIsPressed) {

    

  var force = createVector(0, -0.01);

  person.applyForce(force);

  

  }

  // translate(-100, 0);

		

	fill(255, 0, 100);

  ellipse(width , height - 15, 30, 30);
} else { 
			background(0, 0, 0);
  		noStroke();
  		fill(255, 0, 0);
  		text('Final Score: ' + score, 50, 50);
  		textSize(25);
  		text('Game Over!!!', 235, 200);
  		
  		
	}
}


//  mouseClicked = function() {
//     person.growBy(10);
//     person.display();
// };
