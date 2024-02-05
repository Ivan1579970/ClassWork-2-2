//let student = [["Andrey"],["Stepan"]];
//student[1][1] = "Dima";
//console.log(student)


// const person = 
// {
//  name: "Andrey",
//  age: "29",
//  hobbies: ["кушать"],
//  contacts:
//  {
//   phone: 8888888888,
//   email: "andrey@email.com",
//   secial: "www.githud.com"
//  }
// };

// console.log(`Имя - ${person["name"]}, Возраст - ${person["age"]}`);
// console.log(`Его любимое занятие - ${person["hobbies"]}`)
// console.log(person["contacts"]["email"]);


const students =
[
    {name: "Andrey", age: 17, serial: 11111, group: "Is 2-2"},
    {name: "Ivan", age: 18, serial: 11111, group: "Is 2-2"},
    {name: "Stas", age: 19, serial: 11111, group: "Is 2-2"},
    {name: "Gena", age: 20, serial: 11111, group: "Is 2-2"},
    {name: "Stepan", age: 17, serial: 11111, group: "Is 2-2"},
    {name: "Lera", age: 16, serial: 11111, group: "Is 2-2"},
    {name: "Pavel", age: 17, serial: 11111, group: "Is 2-2"},
]

let studentIndex = 1;
let studentName = students[studentIndex]["name"];
let studentAge = students[studentIndex]["age"];

if (students[3]["age"] < 18)
{
console.log(`Студенту ${studentName} меньше 18 лет. Его возраст - ${studentAge}`);
}
else
{
console.log(`Студенту ${studentName} больше или равно 18 лет. Его возраст - ${studentAge}`);
}
