Webcam.set({

width:350,
height:300,
image_format:"png",
png_quality:90

});

camera = document.getElementById("camera");

Webcam.attach('#camera');

function capture() {

Webcam.snap(

function (dataURI) {

    document.getElementById("result").innerHTML="<img id='picture' src='"+dataURI+"'>";

}

);

}

console.log("ml5version",ml5.version);

classifier = ml5.imageClassifier("https://teachablemachine.withgoogle.com/models/Nyfpfleld/model.json",modelLoaded)

function modelLoaded(){

console.log("model Loaded");

}

function check(){

img=document.getElementById("picture")
classifier.classify(img,gotResult)

}

function gotResult(error,results){

if(error){
    console.error(error)
}
else{
    console.log(results)

    document.getElementById("object_name").innerHTML=results[0].label
    document.getElementById("object_accuracy").innerHTML=results[0].confidence.toFixed(3)
}
}