// const people = ["Tom", "Bob", "Ron", "Harry", "Stan"];


// for ( let i = 0; i < people.length; i++ )
// {
//     let result = people[i];
//     console.log(result);
// }


// let array = [["Tom", 16], ["Bob", 17], ["Stan", 18]];
// // console.log(array[2][0]);

// for ( let i = 0; i < array.length; i++ )
// {
//     for (let j = 0; j < array[i].length; j++)
//     {
//         let result = array[i][j];
//         console.log(result);
//     }   
//     console.log('--------------')
// }


// const people = ["Tom", "Bob", "Ron"];

// for ( let item of  people)
// {
//     // console.log(people[item]);
//     console.log(item)
// }

// for...in - выводит только индексы массива
// for...of - выводит только элементы массива


let person = {name: "Tom", age: 17};
// console.log(person ["name"]);

for ( let item in person )
{
    let result = person[item]
    console.log(result);
}