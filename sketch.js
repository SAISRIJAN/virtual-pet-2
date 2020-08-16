//Create variables here
var dog ,foods,database,dog1,dog2,milk1,milk,milk2;
function preload()
{
  //load images here
  dog1=loadImage("images/dogImg.png")
  dog2=loadImage("images/dogImg1.png")
  milk1=loadImage("images/milk.png")
  //milk2=loadImage("images/milk.png")
}


function setup() {
  database=firebase.database()
	createCanvas(500, 500);
   dog = createSprite(250,300,150,150);
   dog.addImage(dog1)
  // milk2 = createSprite(200,100,100,100);
  // milk2.addImage(milk1)
  // milk2.sclae=0.2
   milk = createSprite(100,80,10,100);
   milk.addImage(milk1)
   milk.scale=0.15
   dog.scale=0.30
   stock=database.ref('Food');
   stock.on("value",readstock)
}



function readstock(data){
foods=data.val();
}
function writeStock (x){
if(x<=0){
  x=0;
}else{
  x=x-1
}
database.ref('/').update({
  Food:x
})
}
function draw() { 
  //background("green") 
  text("food:"+foods,100,250)
  //fill(black)
  drawSprites();
 // fill(black)
  //add styles here
  if(keyWentDown(UP_ARROW)){
    writeStock(foods)
    dog.addImage(dog1)
  }
}


