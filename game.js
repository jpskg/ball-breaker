//Objektvariablen

var ball = [];

var pad;

//Variablen für Abmessungen etc.
var canvasWidth = 500;
var canvasHeight = 600;
//var ballSize = 30;

//diese p5.js-Standardfunktion wird zum Start einmal ausgeführt
function setup() {
    //die Leinwand wird erzeugt
    createCanvas(canvasWidth, canvasHeight);

    //Objekt des Balls wird erzeugt
    ball.push(new Ball(canvasWidth/2,canvasHeight/2,"orange",30));
    pad = new Pad();
    
}

//diese p5.js-Standardfunktion wird Frame für Frame erneut ausgeführt
function draw() {
    //Hintergrund
    background("darkblue");


    //Ball wird angezeigt
    for(let b of ball)
    { 
        b.move(b);
        b.show(b);
        console.log("ballx: ",b.x);
        console.log("bally: ",b.y);
        
        if(((b.x > pad.x) && (b.x < pad.x+pad.sizew)) && (b.y+b.size > pad.y)){
             b.jump();
        }
    }
	
    pad.move();
    pad.show();
    console.log("padx: ",pad.x);
    console.log("pady: ",pad.y);

    
}
/*
function mouseClicked(){

    ball.push(new Ball(mouseX, mouseY, "green", 40));
}
*/