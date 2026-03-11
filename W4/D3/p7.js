const existingPost = document.getElementById("existingPost");
const missingPost = document.getElementById("missingPost");
const statusOutput = document.getElementById("statusOutput");

function fetchPost(url){
    statusOutput.textContent ="Fetching from" +url;
    fetch(url)
    .then(function(response){
        if(!response.ok){
            throw new Error("Http error Status Code:"+response.status);
        }
       return response.json();
    })
    .then(function(data){
        statusOutput.textContent = "Success: "+JSON.stringify(data,null,2);

    })
    .catch(function(error){
        statusOutput.textContent = "Error: "+error.message;

    });
}
existingPost.addEventListener("click",function(){
    fetchPost("https://jsonplaceholder.typicode.com/posts/101");
})