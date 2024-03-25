function setup() {
    canvas=createCanvas(450,450)
    canvas.center()
    video=createCapture(VIDEO)
    video.hide()
}
function preload() {

    
}
function draw() {
    image(video,0,0,450,450)
    person=document.getElementById("person").value
    console.log(person)
}
function start() {
    obj_detector=ml5.objectDetector("cocossd",model_loaded)
document.getElementById("status").innerHTML="status: detecting objects"
}
function model_loaded() {
    console.log("model loaded")
    flag=true
}