const resultElement=document.getElementById("result");
let recognition;


function startConverting()
{
    if('webkitSpeechRecognition' in window)
    {
        recognition=new webkitSpeechRecognition();
        setupRecognition(recognition);
        recognition.start();
    }
}
function setupRecognition(recognition)
{
    recognition.continuous=true;
    recognition.interimResults=true;
    recognition.lan='en-US';
}
function processResult(results)
{

}
function stopConverting()
{

}