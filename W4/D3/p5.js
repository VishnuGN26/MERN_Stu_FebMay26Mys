const introBtn = document.getElementById("introBtn");
const output = document.getElementById("output");

introBtn.addEventListener("click",function(){
    output.textContent ="Sending request....";
    fetch("https://jsonplaceholder.typicode.com/posts/10")
    .then(function(response){
        return response.json();
    })
    .then(function (data){
        console.log("Raw response object: ",data);
        // output.textContent ="Status: " +response.status+ "\nOk:" + response.ok;
        output.textContent = JSON.stringify(data,null,2);
    })
    .catch(function(error){
        output.textContent = "Unexpected fetch error:" +error.message

    });
});