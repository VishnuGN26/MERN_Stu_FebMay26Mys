//filter method
// let marks = [75,49,56,70,82,51,68];
// let passed = marks.filter(mark => mark >=70);

// console.log(marks);
// console.log(passed);

let students = [
    { name: "Vishnu", mark: 75 },
    { name: "Chiru", mark: 49 },
    { name: "thilak", mark: 84 },
    { name: "rohit", mark: 70 },
];
// let paassedNames = students.filters(students =>students.score>=70);
// let vishnu = students.map(students => student.name);
let passedNames = students
    .filter(student => student.mark >= 70)
    .map(student => student.name);

console.log(passedNames);