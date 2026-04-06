
//basics of objects
const person = {
    name: "Chiru",

    age: 28,
    isStudent: false

};
//console.log("Person",person);
console.log("Name:", person.name);
console.log("Age:", person["age"]);

//Add a new property
person.city = "Tumkur";
console.log("Person",person);

//modify
person.age = 29;

console.log("Person",person);

//delete

delete person.isStudent;
console.log("Person",person);

//object constructor
const car = new Object();
car.make = "Audi";
car.model = "A4";
car.year = 2026;
//console.log(car);
console.log("car",car);
