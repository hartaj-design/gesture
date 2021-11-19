prediction1='';
prediction2='';
Webcam.set({
    width:350,
    height:300,
    image_format:'png',
    png_quality:90
});
data1=document.getElementById("camera");
Webcam.attach('#camera');
function ground(){
    Webcam.snap(function (data_uri){
  document.getElementById("result").innerHTML='<img id="img3" src="'+data_uri+'"/>';
    });
}
tab=ml5.imageClassifier('https://teachablemachine.withgoogle.com/models/LIqsmxl8P/model.json',code);
function code(){
    console.log("model loded")
}
function speak(){
    dot=window.speechSynthesis;
    data2='the first prediction is '+prediction1;
    data3='and the second prediction is '+prediction2;
    show=new SpeechSynthesisUtterance(data2+data3);
    dot.speak(show);
}
function check(){
    site=document.getElementById("img3");
    tab.classify(site,answer);
}
function answer(error,results){
  if(error){
      console.log(error);
  }
  else{
      console.log(results);
      document.getElementById("emotionname1").innerHTML=results[0].label;
      document.getElementById("emotionname2").innerHTML=results[1].label;
      prediction1=results[0].label;
      prediction2=results[1].label;
      speak();
  
if(results[0].label=='ok'){
    document.getElementById("emoji1").innerHTML='&#12807;';
}
if(results[0].label=='victory'){
    document.getElementById("emoji1"),innerHTML='&#9996;';
}
if(results[0].label=='awesome'){
    document.getElementById("emoji1").innerHTML='&#128077;';
}
if(results[0].label=='ok'){
    document.getElementById("emoji2").innerHTML='&#12807;';
}
if(results[0].label=='victory'){
    document.getElementById("emoji2"),innerHTML='&#9996;';
}
if(results[0].label=='awesome'){
    document.getElementById("emoji2").innerHTML='&#128077;';
}
  }
}