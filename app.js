var btnClicked =  document.querySelector("#btn-click");
var inputText = document.querySelector("#txt-input");
var outputText = document.querySelector("#output");

var serverURL= "https://lessonfourapi.tanaypratap.repl.co/translate/yoda.json";
// var serverURL="https://api.funtranslations.com/translate/minion.json";

function errorHandler(error){
    console.log("error occured!", error)
    alert("server is down, try again after some time!")
}

function getTranslatedURL(text){
    return serverURL + "?" + "text=" + text
}


function clickHandler (){
    var textInput = inputText.value;
    fetch(getTranslatedURL(textInput))
    .then(response => response.json())
    .then(json=> {
        var translatedText = json.contents.translated;
        outputText.innerText = translatedText; 
        })
    .catch(errorHandler)
};

btnClicked.addEventListener("click", clickHandler);