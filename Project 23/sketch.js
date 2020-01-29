var interior,interiorImg;
var exterior,exteriorImg;


function setup() {
  createCanvas(800,400);

  interiorImg =loadImage("interior.png");
  exteriorImg =loadImage("exterior.png");

  interior =createSprite(390, 270, 50, 50);
  interior.scale =0.8;
  interior.addImage(interiorImg);

  exterior =createSprite(450, 345, 50, 50);
  exterior.scale =0.9;
  exterior.addImage(exteriorImg);
}

function draw() {
  background("black");  
  drawSprites();
}