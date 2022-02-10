function preload(){
    //There is nothing here.
}

function setup(){
    canvas = createCanvas(600,400);
    canvas.center(); //Center the canvas
    video = createCapture(VIDEO);
    video.size(600,400);
    video.hide();

    poseNet = ml5.poseNet(video, modelLoaded);
    poseNet.on('pose', gotPoses);
}

function modelLoaded(){
    console.log('Model Loaded!')
}

function gotPoses(results){

    if(results.length > 0){
        console.log(results);
        nose_x = results[0].pose.nose.x;
        nose_y = results[0].pose.nose.y;
        console.log("The nose's x coordinate is " + nose_x);
        console.log("The nose's y coordinate is " + nose_y);
    }
}

function draw(){
    image(video, 0, 0, 600, 400)
}

function take_snap(){
    save('filtered_image.png');
}