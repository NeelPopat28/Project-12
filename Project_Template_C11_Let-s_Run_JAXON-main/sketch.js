
var jason,jasonimg;
var path,patimg;


var gameState = "start"

function preload(){
  //pre-load images
jasonimg = loadAnimation ("Runner-1.png","Runner-2.png");
patimg = loadAnimation ("path.png");

}

function setup(){
  createCanvas(800,800);
  //create sprites here
  path = createSprite(400,400,10,10);
  path.addAnimation ("move",patimg);

  jason = createSprite(400,700,10,10);
jason.addAnimation("run",jasonimg);
jason.scale =0.1;


}

function draw() {
  background(0);
drawSprites();
}
