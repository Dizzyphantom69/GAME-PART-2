var balloon,balloonImage1,balloonImage2;


function preload(){
   bgImg =loadImage("smiSqP.png");
   balloonImage1=loadAnimation("hotairballoon1.png");
   balloonImage2=loadAnimation("hotairballoon1.png","hotairballoon1.png",
   "hotairballoon1.png","hotairballoon2.png","hotairballoon2.png",
   "hotairballoon2.png","hotairballoon3.png","hotairballoon3.png","hotairballoon3.png");
   platformImage = loadImage("wood2.png");
   sling1 = loadImage("sling1.png");
   sling2 = loadImage("sling2.png");
   sling3 = loadImage("sling3.png");

   
}
  

//Function to set initial environment
function setup() {
 
  createCanvas(800,500);

  bg = createSprite(400,250);  
  bg.addImage(bgImg);
  bg.scale = 0.4;
  bg.velocityX = -2;

  balloon=createSprite(250,450,150,150);
  balloon.addAnimation("hotAirBalloon",balloonImage2);
  balloon.scale=0.4;

 

  
}

// function to display UI
function draw() {
  background(0);
 
  if(bg.x<-50){
    bg.x = 800
  }

  if(keyDown("w")){
    balloon.y -= 10 ;
  }
  if(keyDown("s")){
    balloon.y += 10;
  }

  drawSprites();
  image(platformImage,balloon.x,balloon.y+85,90,10);
  image(sling1,balloon.x+50,balloon.y+35,20,50);
  image(sling2,balloon.x+40,balloon.y+35,20,30);
}

  
  