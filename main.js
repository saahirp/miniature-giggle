status = "";
function setup(){
    canvas = createCanvas(600, 400);
    canvas.center();
    video = createCapture(VIDEO);
    video.hide();
}
function start(){
    detection = ml5.objectDetector("cocossd", modelLoaded);
    document.getElementById("num1").innerHTML = "Status:Currently Detecting Objects";
    inputvalue = document.getElementById("textinput").value;
}
function draw(){
    image(video, 0, 0, 600, 400);
}
function modelLoaded(){
    console.log("model loaded");
    status = true;
}