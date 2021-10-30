var bgimage;
var backg, snow, snowImage;
function preload(){
  bgimage = loadImage('snow2.jpg');
  snowImage = loadImage('snow5.webp');
}
function setup() {
  createCanvas(800,400);
  backg = createSprite(400, 200, 800, 400);
  backg.addImage('bgimage', bgimage)
}
function snowfall(){
  var r = Math.round(random(0,800,50))
  if(frameCount%60 === 0){
    snow = createSprite(r, 0, 20, 20);
    snow.addImage('snowfall', snowImage)
    snow.scale = 0.1
    snow.velocityY = 10
  } 
}
function draw() {
  background(0,0,0); 
  snowfall();
  drawSprites();
  
}