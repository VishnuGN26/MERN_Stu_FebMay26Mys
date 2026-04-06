//nested object and methods
const student = {
    fisrtName:"Chiru",
    lastName:"HG",
    scores:{
        math: 80,
        science: 83
    },
    hobbies:["reading","singing"],
    fullname: function(){
        return this.firstName + " " +this.lastName;
    },


greet(){
    console.log("Hi, ",this.fullname());
}
};
console.log(student.fullname());
console.log("student",student);
console.log(student.scores.math);//gives only the math scores of the student
console.log("Values",Object.values(book));
