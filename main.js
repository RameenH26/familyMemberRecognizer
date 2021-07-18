function preload() {

}

function setup(){
    canvas = createCanvas(300, 300);
    canvas.position(480, 270);
    video = createCapture(VIDEO);
    video.size(300, 300);
    video.hide();
    classifier = ml5.imageClassifier('https://teachablemachine.withgoogle.com/models/32YB7kl-o/model.json', modelLoaded);
}
function draw() {
    image(video, 0 ,0, 300, 300);
    classifier.classify(video, gotResult);
}
//https://teachablemachine.withgoogle.com/models/32YB7kl-o/

function modelLoaded() {
console.log("the model is loaded");
}
function gotResult(error, results) {
    if(error) {
        console.log(error);
    } else {
        console.log(results);
        document.getElementById("object_result_name").innerHTML = results[0].label;
        document.getElementById("object_accuracy_name").innerHTML = results[0].confidence.toFixed(3);
    }
}