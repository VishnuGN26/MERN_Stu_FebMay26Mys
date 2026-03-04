//json stringify parse
const employee = {
    id: 101,
    name: "chiru",
    dept: "ME",
    isActive: true
};
const jsonString = JSON.stringify(employee);
console.log(jsonString);
console.log(employee);

//JSON parsing
const parsedObject = JSON.parse(jsonString);
console.log(parsedObject);
