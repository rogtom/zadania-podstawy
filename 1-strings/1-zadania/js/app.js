// let text1 = `Koty to fajne zwierzaki`;
//
// const countWords = text => {
//     let arr = text.split( ' ' );
//     console.log(arr.length);
// }
// (countWords(text1));
//
//
// const greetings = () => {
//     let name = prompt();
//     let restOfString = name.substr(1, name.length);
//     let firstLetter =name.charAt(0).toString().toUpperCase();
//     let rightType = firstLetter.concat(restOfString);
//     console.log(`Witaj ${rightType}`);
// };
//
// greetings();


// const text = "Ala ma kota"
// let wordExist = (text) => {
//     if (text.match("kot")) {
//
//         console.log("Zdanie zawiera słowo kot");
//     }else {
//         console.log("Zdanie nie zawiera słowa kot");
//     }
// };
//
// wordExist(text);

// console.log(text.toUpperCase());
// console.log(text.toLocaleLowerCase());


//
// function replaceChar(str) {
//     for (let i = 0; i <= str.length;  i++) {
//         if (i % 2 === 0 && str[i]!== " ") {
//             console.log(str[i]);
//             str[i] = str[i].toString().toUpperCase();
//             console.log(str[i]);
//         }
//     }
//     return str;
// }
//
// console.log(replaceChar('Ala ma kota'));


//
// console.log(text.replace("Ala", "Tomek"));
//
//
// let numbers = [];
//
// function pushNumbers(min, max) {
//     for (let i = 0; i < 6; i++) {
//         numbers.push(Math.floor(Math.random() * (max - min + 1) + min))
//     }
// }
//
// pushNumbers(10, 100000);
// console.log(numbers);
//
//
// function padNumbers(arr, numLength) {
//
//     for (let i = 0; i < arr.length; i++) {
//         let number = arr[i].toString().padStart(numLength, "*");
//         console.log(number);
//     }
// }
//
// padNumbers(numbers, 10);

//
// let makeId = (length) => {
//     let characters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz1234567890';
//     let result = "";
//     for (let i = 0; i < length; i++) {
//        result += characters.charAt(Math.floor(Math.random() * characters.length))
//
//     }
//     return result;
// }
// console.log(makeId(20));


let x = 123;
let y = x * x;

console.log(`Liczba ${x} * ${x} da w wyniku ${y}`);
