
function validatePassword(){
    let password = document.getElementById("password").value;
    let confirmPassword = document.getElementById("confirmPassword").value;
    let message = document.getElementById("message");

    if(password === confirmPassword){
        message.style.color = "green";
        message.innerText = "Passwords match. Proceeding...";
        return true;
    }else{
        message.style.color = "red";
        message.innerText = "Passwords do not match!";
        return false;
    }
}
