noseX = 0;
noseY = 0;


function preload(){
mustache = loadImage("https://i.postimg.cc/3x3QzSGq/m.png");
}

function setup(){
canvas = createCanvas(400,400);
canvas.center();

video = createCapture(VIDEO);
video.size(400,400);
video.hide();

posenet = ml5.poseNet(video, modelLoaded);

posenet.on("pose" , gotPoses);
}

function modelLoaded(){
    console.log("Model is loaded");
}

function gotPoses(results){
    if(results.length > 0){
console.log(results);
noseX = results[0].pose.nose.x - 15;
noseY = results[0].pose.nose.y + 5;
console.log("nose x = " + noseX);
console.log("nose y =" + noseY);
    }
}

function draw(){
image(video,0,0,400,400);
image(mustache,noseX,noseY,35,35);
}

function take_snapshot(){
    save("filter_pic.png");
}



















