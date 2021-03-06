var inputTextBox = document.querySelector("#input-text");
var outputTextBox = document.querySelector("#output-text");
var translateBtn = document.querySelector("#translate-btn");


var url = "https://api.funtranslations.com/translate/hodor.json"


function apiUrlConstructor(text) {
    // var encodedText = encodeURI(text)
    // var queryUrl = `${url}?text=${encodedText}`;
    // console.log(encodeURI(queryUrl));
    // return encodeURI(queryUrl);
    return `${url}?text=${text}`;
}

inputTextBox.oninput = (event)=>{
    if(event.target.value!=""){
        translateBtn.removeAttribute("disabled");
    } else {
        translateBtn.setAttribute("disabled", "");
    }
}

translateBtn.addEventListener("click", clickHandler)

function clickHandler() {
    var inputText = inputTextBox.value;
    var apiUrl = apiUrlConstructor(inputText);
    fetch(apiUrl)
    .then(response => response.json())
    .then(json => outputTextBox.innerText = json.contents.translated)
    .catch(error => console.log(error))
    
}