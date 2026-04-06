const out = document.getElementById("out");

function explain(code){
    if(code === 1) return "Permission denied";                                  
    if(code === 2) return "Position unavailable";
    if(code === 3) return "Request Timed out";
    return "Unknown error";

}
document.getElementById("localBtn").addEventListener("click",function(){
    if(!navigator.geolocation){
        out.textContent = "Geolocation is not supported in this browser"
    }
out.textContent = "Requesting current location...";
navigator.geolocation.getCurrentPosition(
function(position){
    const data = {
        latitude: position.coords.latitude,
        longitude: position.coords.longitude,
        accuracy: position.coords.accuracy
    };

    console.log(data);
    out.textContent = JSON.stringify(data,null,2);
},
function(error){
    out.textContent = "Error code:"+error.code+
    explain(error.code)+"Message:"+error.message;
},
{enableHighAccuracy:true,timeout:10000,maximumAge:0}
);
});