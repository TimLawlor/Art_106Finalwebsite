var Ldiam = 100
var Lheight = 100
var Mdiam = 44
var Mheight = 44
var mX1 = 100
var mX2 = 390
var mY1 = 95
var mY2 = 385
var lX1 = 335.5
var lX2 = 160.5
var lY1 = 155.5
var lY2 = 330

function setup() {
  var canvas = createCanvas(windowWidth, 500);
  canvas.parent('header');
    textSize(40);
    textAlign(RIGHT,CENTER);
    
}

function draw() {
  background(86, 86, 86);
  fill(33,16,14)
  text('Tim Lawlor', 700, 250);
    
  function draw() {
   text(frameCount, width / 2, height / 2);
}
  
  //Large red circles
  fill(255,0,6);
    //Right
      ellipse(lX1,239,Ldiam,Lheight);
    //Top
      ellipse(247,lY1,Ldiam,Lheight);
    //Left 
      ellipse(lX2,239,Ldiam,Lheight);
    //Bottom
      ellipse(244,lY2,Ldiam,Lheight);
  
  //Medium red circles
    //left medium circles
      ellipse(mX1,347,Mdiam,Mheight);
      ellipse(mX1,130,Mdiam,Mheight);
    //right medium circles
      ellipse(mX2,130,Mdiam,Mheight);
      ellipse(mX2,347,Mdiam,Mheight);
    //top medium circles
      ellipse(355,mY1,Mdiam,Mheight);
      ellipse(137,mY1,Mdiam,Mheight);
    //bottom medium circles
      ellipse(137,mY2,Mdiam,Mheight);
      ellipse(355,mY2,Mdiam,Mheight);
  //Blue Squares
  fill(18,131,255);
  rect(162,155 ,169,169);
  rect(102,96,70,70);
  rect(102,312,70,70);
  rect(320,95,70,70);
  rect(320,312,70,70);
  rect(75,70,25,25);
  rect(75,384,25,25);
  rect(390,382,25,25);
  rect(390,70,25,25);
  
  //Tiny Red Circles
   fill(255,0,6);
  ellipse(102,96,18,18);
  ellipse(390,95,18,18);
  ellipse(102,382,18,18);
  ellipse(390,382,18,18);

  //Moving the medium red circles
  
  mX1 = mX1-1
  if (mX1 <= -65-Mdiam){
    mX1=135
  }
  
  mY1 = mY1-1
  if (mY1 <= -25-Mdiam){
    mY1=135
  }
  
  mY2 = mY2+1
  if (mY2 >= 600+Mdiam){
    mY2=350
  }
    
  mX2 = mX2+1
  if (mX2 >= windowWidth+88){
    mX2=350
  }
     if(frameCount >=600){
    frameCount=0
  }
    
  //Moving the large red circles
  /*
  lX1 = lX1+1
  if (frameCount >= 300){
    lX1=250
  }
  
  lX2 = lX2-1
  if (frameCount >= 300){
    lX2=250
  }
  
  lY1 = lY1-1
  if (frameCount >= 300){
    lY1=250
  }
  
  lY2 = lY2+1
  if (frameCount >= 300){
    lY2=250
  }  
  */
  
  
  //print(frameCount)
  
  
  
}
