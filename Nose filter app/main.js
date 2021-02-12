function preload(){
    cimage= loadImage("https://i.postimg.cc/7ZBcjDqp/clownnose.png");
}

function setup(){
    canvas=createCanvas(450, 450);
    canvas.center();
    video = createCapture(VIDEO);
    video.size(450, 450);
    video.hide();

    posenet=ml5.poseNet(video , modelLoaded);

    poseNet.on('pose', gotPoses);
}
function draw(){
    image(video, 0, 0, 450, 450);
    image(cimage, nosex-10, nosey-10, 40, 40)
}

function takeimage(){
    save('myImage1');
}

function modelLoaded(){
    console.log('modelLoaded!');
}

function gotPoses(results){
    if(results.length > 0){
        console.log(results);
        console.log('nose-x ='+results[0].pose.nose.x);
        console.log('nose-y ='+results[0].pose.nosse.y);
        nosex= results[0].pose.nose.x;
        nosey= results[0].pose.nose.y;

    }
}