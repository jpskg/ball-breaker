//die Klasse des bouncepads

class Pad{
    x;
    y;
    speed;
    colour;
    size;

	constructor() {
		//Objektvariablen
		this.x = canvasWidth / 2;
		this.y = canvasHeight - 70;
		this.speed = 0;
		this.colour = "white";
		this.sizew = 70;
        this.sizeh = 20;
    }

    show(){
        fill(this.colour);
        rect(this.x,this.y,this.sizew,this.sizeh)
    }
    

    move(){
        //horizontal bewegung des paddels
        this.speed = 0;
        if(keyIsDown(37)){ //Links
            this.speed = -10;
        }
        if(keyIsDown(39)){ //Rechts
            this.speed = 10;
        }
        this.x += this.speed;
        this.x = constrain(this.x, 0, canvasWidth - this.sizew);
    }
}