// https://teachablemachine.withgoogle.com/models/KFfGNTus7/

prediction_1="";

Webcam.set({
    width:350,
    height: 300,
    image_format:"png",
    png_quality:100
    
});

Webcam.attach("#camera");

function takeS(){
    Webcam.snap(function(data_uri){
        document.getElementById("result").innerHTML='<img id="captured_image" src="'+data_uri+'"/>'
    })
}

console.log("ml5version: ",ml5.version);

classifier=ml5.imageClassifier("https://teachablemachine.withgoogle.com/models/KFfGNTus7/model.json",modelloaded);

function modelloaded(){
    console.log("modelloaded")
}

function speak(){
    var synth=window.speechSynthesis;
    speak_data_1="prediction is "+ prediction_1;

    var utterthis=new SpeechSynthesisUtterance(speak_data_1);
    synth.speak(utterthis)
}

function Check(){
    img=document.getElementById("captured_image");
    classifier.classify(img,gotresult);

}

function gotresult(error,results){
    if(error){
        console.error(error)

    }
    else{
        console.log(results);
        prediction_1=results[0].label

        document.getElementById("result_emotion_name").innerHTML=prediction_1;

        speak()

        if(prediction_1=="best"){
            document.getElementById("update_emoji").innerHTML="&#128077;";

        }

        if(prediction_1=="victory"){
            document.getElementById("update_emoji").innerHTML="&#9996;";
        

        }
        if(prediction_1=="amazing"){
            document.getElementById("update_emoji").innerHTML="&#128076;";

        }




    }
}


