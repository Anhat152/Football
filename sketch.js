var blue1,blue2,blue3;
var white1,white2,white3;
var pitch,football;
var a1,a2,a3;
var b1,b2,b3;
var f
var button="p";
var button2="l";
var goal;
function preload(){
    blue1=loadImage("blue team.jpg");
    
    blue2=loadImage("blue team.jpg");
    blue3=loadImage("blue team.jpg");
    white1=loadImage("white team.jpg");
    white2=loadImage("white team.jpg");
    white3=loadImage("white team.jpg");
    pitch=loadImage("pitch.jpg");
    football=loadImage("football.png");
    goal=loadImage("goal.png");
    
}
function setup(){
    createCanvas(displayWidth-600,displayHeight-100);
    
    a1=createSprite(displayWidth/2,200);
    a1.addImage("a1",blue1);
  
    a1.setCollider("circle",0,0,170);
    a1.scale=1.5
    a2=createSprite(200,200);
    a2.addImage("a2",blue2);
    
    a2.setCollider("circle",0,0,170);
    a2.scale=1.5
    a3=createSprite(displayWidth/2-290,displayHeight/2-177);
    a3.addImage("a3",blue3);
   
    a3.setCollider("circle",0,0,170);
    a3.scale=1.5
    b1=createSprite(displayWidth/2,550);
    b1.addImage("b1",white1);
   
    b1.setCollider("circle",0,0,170);
    b1.scale=1.5
    b2=createSprite(displayWidth/2-290,displayHeight/2+70);
    b2.addImage("b2",white2);
   
    b2.setCollider("circle",0,0,170);
    b2.scale=1.5
    b3=createSprite(200,550);
    b3.addImage("b3",white3);
   
    b3.setCollider("circle",0,0,170);
    b3.scale=1.5
    f=createSprite(displayWidth/2-290,displayHeight/2-50);
    f.addImage("football",football)
    f.scale=0.15
    g=createSprite(displayWidth/2-290,displayHeight/2-50,200,200);
    g.addImage("goal",goal);
    g.visible=false
    //test=createSprite(displayWidth/2-400,displayHeight/2+300,50,50);
    //-200
    //-400
}
function draw(){
    background(pitch);
    drawSprites();
    if(keyWentDown("SPACE")){
        f.x=random(displayWidth/2-400,displayWidth/2-200);
        f.y=displayHeight/2+310;
    }
    if(keyWentDown("p")){button="p"}
    if(button=="p"){
    if(keyWentDown("W")){
        a3.y=a3.y+10;
        f.y=a3.y;
        f.x=a3.x;
    }
    if(keyWentDown("S")){
        a3.y=a3.y-10
        f.y=a3.y;
        f.x=a3.x;
    }
    if(keyWentDown("A")){
        a3.x=a3.x-10
        f.y=a3.y;
        f.x=a3.x;
    }
    if(keyWentDown("D")){
        a3.x=a3.x+10
        f.y=a3.y;
        f.x=a3.x;
    }
}
if(keyWentDown("o")){button="o"}
if(button=="o"){
    if(keyWentDown("W")){
        a2.y=a2.y+10;
        f.y=a2.y;
        f.x=a2.x;
    }
    if(keyWentDown("S")){
        a2.y=a2.y-10
        f.y=a2.y;
        f.x=a2.x;
    }
    if(keyWentDown("A")){
        a2.x=a2.x-10
        f.y=a2.y;
        f.x=a2.x;
    }
    if(keyWentDown("D")){
        a2.x=a2.x+10
        f.y=a2.y;
        f.x=a2.x;
    }
}
if(keyWentDown("i")){button="i"}
    if(button=="i"){
    if(keyWentDown("W")){
        a1.y=a1.y+10;
        f.y=a1.y;
        f.x=a1.x;
    }
    if(keyWentDown("S")){
        a1.y=a1.y-10
        f.y=a1.y;
        f.x=a1.x;
    }
    if(keyWentDown("A")){
        a1.x=a1.x-10
        f.y=a1.y;
        f.x=a1.x;
    }
    if(keyWentDown("D")){
        a1.x=a1.x+10
        f.y=a1.y;
        f.x=a1.x;
    }
}
if(keyWentDown("l")){button2="l"}
    if(button2=="l"){
    if(keyWentDown("UP_ARROW")){
        b2.y=b2.y-10;
    }
    if(keyWentDown("DOWN_ARROW")){
        b2.y=b2.y+10
    }
    if(keyWentDown("LEFT_ARROW")){
        b2.x=b2.x-10
    }
    if(keyWentDown("RIGHT_ARROW")){
        b2.x=b2.x+10
    }
}

if(keyWentDown("j")){button2="j"}
    if(button2=="j"){
    if(keyWentDown("UP_ARROW")){
        b1.y=b1.y-10;
    }
    if(keyWentDown("DOWN_ARROW")){
        b1.y=b1.y+10
    }
    if(keyWentDown("LEFT_ARROW")){
        b1.x=b1.x-10
    }
    if(keyWentDown("RIGHT_ARROW")){
        b1.x=b1.x+10
    }
}
if(keyWentDown("k")){button2="k"}
    if(button2=="k"){
    if(keyWentDown("UP_ARROW")){
        b3.y=b3.y-10;
    }
    if(keyWentDown("DOWN_ARROW")){
        b3.y=b3.y+10
    }
    if(keyWentDown("LEFT_ARROW")){
        b3.x=b3.x-10
    }
    if(keyWentDown("RIGHT_ARROW")){
        b3.x=b3.x+10
    }
}
if(f.x>displayWidth/2-400 && f.x<displayWidth/2-200 && f.y>displayHeight/2+300){
    g.visible=true;
}
}
