var spacecraft, bg, iss, issImage, scImage, scImage1, scImage2, scImage3;
var hasDocked = false;

function preload() {
   bg = loadImage("spacebg.jpg");
   issImage = loadImage("iss.png");
   scImage = loadImage("spacecraft1.png");
   scImage1 = loadImage("spacecraft2.png");
   scImage2 = loadImage("spacecraft3.png");
   scImage3 = loadImage("spacecraft4.png");

}



function setup() {
  createCanvas(600,350);
  spacecraft = createSprite(285,250);
  spacecraft.addImage(scImage);
  spacecraft.scale = 0.15;

  iss = createSprite(280,145);
  iss.addImage(issImage);
  iss.scale = 0.7;
}

function draw() {
  background(bg); 
  spacecraft.addImage(scImage);
  iss.addImage(issImage);
  
  if(!hasDocked){
    spacecraft.x = spacecraft.x+random(-1,1);
  }

  if(!hasDocked){
    iss.x = iss.x+random(-1,1);
  }
  


  if(keyDown("UP_ARROW")){
    spacecraft.y = spacecraft.y-2;
    spacecraft.addImage(scImage1);
  }

  if(keyDown("DOWN_ARROW")){
    spacecraft.y = spacecraft.y+2;
  }

  if(keyDown("LEFT_ARROW")){
    spacecraft.x = spacecraft.x-2;
    spacecraft.addImage(scImage2);
  }

  if(keyDown("RIGHT_ARROW")){
    spacecraft.x = spacecraft.x+2;
    spacecraft.addImage(scImage3);
  }

  if(spacecraft.y <= (iss.y+80) && spacecraft.x <= (iss.x-20)){
      hasDocked = true;
      textSize(15);
      fill("white");
      text("Docking Successful",450,300);
  }

  drawSprites();

}