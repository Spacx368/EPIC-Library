var ball;
var database
var position 







































function setup(){



    database=firebase.database();
    createCanvas(500,500);
    ball = createSprite(250,250,10,10);
    ball.shapeColor = "red";















    var ballposition=database.ref("ball/position");







    ballposition.on("value",readposition,showerror)
}

function draw(){
    background("white");
    if(keyDown(LEFT_ARROW)){
        writePosition(-100,0);
    }

















    else if(keyDown(RIGHT_ARROW)){
        writePosition(100,0);
    }



















    else if(keyDown(UP_ARROW)){
        writePosition(0,-100);
    }















    else if(keyDown(DOWN_ARROW)){
        writePosition(0,+100);
    }


















    drawSprites();
}

function writePosition(x,y){
   database.ref("ball/position").set({










    "x":position.x+x,












    "y":position.y+y
   })
} 

function readposition(data){











    position=data.val();







































































    ball.x=position.x






    ball.y=position.y
}

























function showerror(){












    console.log("datanotrecievedfromthedatabase")
}