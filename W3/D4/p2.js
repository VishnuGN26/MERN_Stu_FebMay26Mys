//Array iteration
let numArray = [1,2,3,4];
 
for(let i = 0;i<numArray.length;i++){
    console.log("",numArray[i]);
}
//for..of
for(let num of numArray){
    console.log(" ",num);
}
//forEach
numArray.forEach((val,idx) => {
    console.log("",idx,val);
});
