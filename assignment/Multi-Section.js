
const form = document.getElementById("feedbackForm");
const container = document.getElementById("feedbackContainer");
const error = document.getElementById("error");
const count = document.getElementById("count");

let feedbackTotal = 0;

form.addEventListener("submit", function(e){

e.preventDefault();

const name = document.getElementById("name").value.trim();
const email = document.getElementById("email").value.trim();
const type = document.getElementById("type").value;
const text = document.getElementById("feedback").value.trim();

const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

if(!name || !email || !type || !text){
error.textContent = "All fields are required";
return;
}

if(!emailPattern.test(email)){
error.textContent = "Invalid email format";
return;
}

if(text.length < 20){
error.textContent = "Feedback must be at least 20 characters";
return;
}

error.textContent = "";

createCard(name,email,type,text);

form.reset();

});

function getLabel(type){

if(type === "Bug") return "[Needs Review]";
if(type === "Suggestion") return "[Idea]";
if(type === "Appreciation") return "[Positive]";

}

function createCard(name,email,type,text){

const card = document.createElement("div");
card.className = "card";

card.innerHTML = `
<h3 class="userName"></h3>
<p class="userEmail"></p>
<p class="userType"></p>
<p class="userText"></p>
<button class="deleteBtn">Delete</button>
`;

card.querySelector(".userName").textContent = name;
card.querySelector(".userEmail").textContent = email;
card.querySelector(".userType").textContent = type + " " + getLabel(type);
card.querySelector(".userText").textContent = text;

card.querySelector(".deleteBtn").addEventListener("click", function(){

card.remove();
feedbackTotal--;
count.textContent = feedbackTotal;

});

container.appendChild(card);

feedbackTotal++;
count.textContent = feedbackTotal;

}