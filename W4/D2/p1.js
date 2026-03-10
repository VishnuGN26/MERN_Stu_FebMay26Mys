//innerText and textcontent
//innerText: visible rendered text only
//textcontent: all text nodes regardless of CSS
//innerHTML : allows reading or writing HTML markup 
//inside an element 

const message = document.getElementById("message");
const originalMessage = message.innerText;


document.getElementById("innerTxtBtn").addEventListener("click", function () {
    message.innerText = "Updated using innerText";
});

document.getElementById("textContentBtn").addEventListener("click", function () {
    message.textContent = "Updated using textContent";
});


document.getElementById("resetBtn").addEventListener("click", function () {
    message.innerText = "originalMessage";
});

const box = document.getElementById("box");




document.getElementById("innerHTMLBtn").addEventListener("click", function () {
    box.innerHTML = "<strong>original</strong> Content";
});