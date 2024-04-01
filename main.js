flag=""
objects=[]
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
    if (flag!="") {
        obj_detector.detect(video,got_result)
        for (let index = 0; index < objects.length; index++) {
            document.getElementById("status").innerHTML="status:objects detected"
            document.getElementById("obj").innerHTML="object detected:"+objects.length
            fill("red")
            stroke("red")
            percent=floor(objects[index].confidence*100)
            text(objects[index].label+" "+percent+"%",objects[index].x,objects[index].y)
            noFill()
            rect(objects[index].x,objects[index].y,objects[index].width,objects[index].height)
            if (objects[index].label==person) {
                video.stop()
                obj_detector.detect(got_result)
                document.getElementById("obj1").innerHTML=person+" found"
s=window.speechSynthesis
u=new SpeechSynthesisUtterance(person+" found")
s.speak(u)
            }
            else{
                document.getElementById("obj1").innerHTML=person+" not found"

            }
        }
    }
}
function start() {
    obj_detector=ml5.objectDetector("cocossd",model_loaded)
document.getElementById("status").innerHTML="status: detecting objects"
}
function model_loaded() {
    console.log("model loaded")
    flag=true
}
function got_result(error,results) {
    if (error) {
        console.log(error)
    }
    else{
        console.log(results)
        objects=results
    }
}