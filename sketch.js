var bg, fish,fishImg,food,wall1,wall2,wall3,wall4;
var j,k,l,m,n;
var ate = 0;
var obstacleGroup,foodGroup;
var obstacle;


function preload(){
bg = loadImage("ocean.jpg")
a = loadAnimation("Prey_fish.png")
b = loadAnimation("Prey_fish1.png")
c = loadAnimation("Prey_fish2.png")
d = loadAnimation("Prey_fish3.png")
e = loadImage("wall.png")
j = loadImage("shark.png")
k = loadImage("bean.png")
l = loadImage("net.png")
m = loadImage("hook.png")
n = loadImage("dead.png")

}
function setup(){
createCanvas(windowWidth-10,windowHeight-10);

foodGroup = new Group ();
obstacleGroup = new Group ();

fish = createSprite(50,500,50,50);
fish.shapeColor = "black"
fish.addAnimation("fish",a);
fish.scale = 0.2

wall1 = createSprite(100,800,100000,100)
//wall1.addImage("hi",e)
wall1.shapeColor = "brown";

wall2 = createSprite(1400,100,100,10000)
//wall2.addImage("hi",e)
wall2.shapeColor = "brown";

wall3 = createSprite(100,-1500,100000,100)
//wall3.addImage("hi",e)
wall3.shapeColor = "brown";

wall4 = createSprite(-2700,100,100,10000)
//wall4.addImage("hi",e)
wall4.shapeColor = "brown";


}

function draw(){
background("darkblue");

image(bg,-displayWidth*2,-displayHeight*2,displayWidth*3, displayHeight*3);

    
if(keyDown("right_arrow")){
    fish.x = fish.x + 20;
    camera.position.x = fish.x;
    fish.addAnimation("fish",a);
}
if(keyDown("left_arrow")){
    fish.x = fish.x - 20;
    camera.position.x = fish.x;
    fish.addAnimation("fish",b);
}
if(keyDown("up_arrow")){
    fish.y = fish.y - 20;
    //camera.position.x = fish.x;
    camera.position.y = fish.y;
    fish.addAnimation("fish",d);
}
if(keyDown("down_arrow")){
    fish.y = fish.y + 20;
    camera.position.y = fish.y;
    //camera.position.y = fish.y;
    fish.addAnimation("fish",c);
}


/*textSize(200);
text ("x:" + mouseX + ",y:" + mouseY,mouseX,mouseY)*/



if(fish.isTouching(wall1)){
    fish.y = fish.y - 20;
}
if(fish.isTouching(wall2)){
    fish.x = fish.x - 20;
}
if(fish.isTouching(wall3)){
    fish.y = fish.y + 20;
}
if(fish.isTouching(wall4)){
    fish.x = fish.x + 20;
}

if (foodGroup.isTouching(fish)){
    foodGroup.destroyEach();
    ate += 1;
}
if (obstacleGroup.isTouching(fish)){
    foodGroup.destroyEach();
    obstacleGroup.destroyEach();
    fish.destroy();
    wall1.destroy()
    wall2.destroy()
    wall3.destroy()
    wall4.destroy()
    stroke ("BROWN")
    strokeWeight(20)    
    textSize(300)
    fill ("red")
    text (" YOU LOSE ",-2300,10)
    stroke ("BROWN")
    strokeWeight(20)    
    textSize(200)
    fill ("red")
    text ("RELOAD TO START AGAIN",-2300,300)
    
}
if (ate === 1){
    foodGroup.destroyEach();
    obstacleGroup.destroyEach();
    fish.destroy();
    wall1.destroy()
    wall2.destroy()
    wall3.destroy()
    wall4.destroy()
    stroke ("Black")
    strokeWeight(20)    
    textSize(300)
    fill ("red")
    text ("YOU WIN!!!!!!!!",-2300,10)
    stroke ("Black")
    strokeWeight(20)    
    textSize(200)
    fill ("red")
    text ("RELOAD TO START AGAIN",-2300,300)

    
}


spawnObstacles();
spawnFood();
drawSprites();

}

function spawnFood(){
    if (frameCount % 100 === 0){
        food = createSprite(10,10,50,50);
        food.addImage("hi",k)
        food.scale = 0.1
        food.debug = true;
        food.x = Math.round(random(-displayWidth*2,displayWidth*2));
        food.y = Math.round(random(-displayHeight*2,displayHeight*2));
        food.lifetime = 100
        //console.log(Math.round(random(-displayWidth,displayHeight)))
        foodGroup.add(food)

    }
}
function spawnObstacles(){
    if (frameCount % 200 === 0){
        obstacle = createSprite(10,10,50,50);
        obstacle.scale = 0.5
        obstacle.lifetime = 10000;
        obstacle.x = Math.round(random(-displayWidth*2,displayWidth*2));
        obstacle.y = Math.round(random(-displayHeight*2,displayHeight*2));
        //console.log(Math.round(random(-displayWidth,displayHeight)))
        obstacleGroup.add(obstacle)

    var rand = Math.round(random(1,3));
        switch(rand) {
        case 1: obstacle.addImage(j);
                break;
        case 2: obstacle.addImage(l);
                break;
        case 3: obstacle.addImage(m);
                break;
        default: break;
        }
}
}
