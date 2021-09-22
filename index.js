var inputTextBox = document.querySelector("#input-text");
var outputTextBox = document.querySelector("#output-text");
var translateBtn = document.querySelector("#translate-btn");


var url = "https://api.funtranslations.com/translate/hodor.json"


function apiUrlConstructor(text) {
    var encodedText = encodeURIComponent(text)
    var queryUrl = `${url}?text=${encodedText}`;
    console.log(encodeURI(queryUrl));
    return encodeURI(queryUrl);
}


translateBtn.addEventListener("click", clickHandler)

function clickHandler() {
    var inputText = inputTextBox.value;
    var apiUrl = apiUrlConstructor(inputText);
    fetch(apiUrl).then(response => response.json()).then(json => outputTextBox.innerText = json.contents.translated)
}