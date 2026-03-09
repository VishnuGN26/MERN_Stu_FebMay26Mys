// finally
// function example(){
//     try{
//         console.log("Example in try block");
//         return "TRY_RETURN";
//     }
//     finally{
//         console.log("This is printed");
//     }
// }
// console.log("example result:",example());

//return in catch block and still not finally
function example1() {
    try {
        try {
            throw new Error("New error");
        }
        catch (e) {
            console.log("Example 1: Caught error");
            // return 10;
            throw (e);
        }
        finally {
            console.log("Example 1: Finally still runs");
        }
    }
    catch(e){
        console.log("Example 1 outer catch",e.message);
    }
}
console.log("Example 1:", example1());