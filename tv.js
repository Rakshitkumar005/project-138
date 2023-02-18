Status="";
TV_image="";

function preload(){
    TV_image=loadImage("tv.jpg");
}

function setup(){
    canvas=createCanvas(640,350);
    canvas.center();
    object_detector= ml5.objectDetector('cocossd',modelLoaded);
    document.getElementById("status").innerHTML="Status: Detecting Object";
}

function modelLoaded(){
console.log("Modal Loaded");
Status=true;
object_detector.detect(TV_image,gotResults)
}

function gotResults(error,results){
if(error){
    console.error(error);
}
console.log(results);
}

function draw(){
    image(TV_image,0,0,640,350);
}