//die Klasse des Balls
class Ball {
	x;
	y;
	speedy;
	speedx;
	colour;
	size;
	
	constructor(x,y,farbe,gros) {
		//Objektvariablen
		this.x = x;
		this.y = y;
		this.speedy = -10; //getRndInteger(-10 || 10);
		this.speedx = getRndInteger(-10,10);
		this.colour = farbe;
		this.size = gros;
	}

	move() {
        //Berechnung der Geschwindigkeit & Veränderung der Position     

        this.y = this.y + this.speedy;
		this.x = this.x + this.speedx;

		if(this.y == canvasHeight){
			ball.pop();
		}else if(this.y == 0){
			this.jump();
		}

		if(this.x == canvasWidth){
			this.side2side();
		}
		else if(this.x == 0){
			this.side2side();
		}
	}

	show() {
        //Darstellung des Balls
        fill(this.colour);
        ellipse(this.x, this.y, this.size, this.size,);
    }

    //Ball wechselt mit 100% der Energie die Richtung
	jump() {
        this.speedy = this.speedy * -1;
		
		if(ball.y + ball.size >=  pad.y){
			this.speedx = getRndInteger(-10,10);
		}
	}
		
		
    

	side2side(){
		this.speedx = this.speedx * -1;
	}
}

function getRndInteger(min, max){
		return Math.floor(Math.random() * (max - min)) + min;
}