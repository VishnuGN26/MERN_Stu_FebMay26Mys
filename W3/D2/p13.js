//Function scope
function scope(){
    var insideVar = 10;
    let insideLet = 20;
    const insideConst = 30;
    // console.log(insideVar);
    // console.log(insideLet);
    // console.log(insideConst);
}
scope();
//console.log(insideVar);// function scoped 
   // console.log(insideLet); // block scoped
  //  console.log(insideConst); // block scoped
  function varFunctionScoped(){
    if(true){
        var x = 40;
        
       
    }
console.log("x: ",x);

  }
varFunctionScoped();