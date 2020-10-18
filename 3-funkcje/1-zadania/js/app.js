// Zad 1
//
// function letterCount (text) {
//     return `Liczba liter : ${text.length}`;
// }
//
// console.info(letterCount('to jest jakiś text'))

// Zad 2


// let myArr = [];
// for (let i = 0;i < 10; i++) {
//     myArr.push(Math.floor(Math.random() * (100 - 1 +1) +1))
// }
//
// let arrSum = function (arr) {
//     let sum = 0;
//     for (let i = 0; i < arr.length; i++) {
//         sum += arr[i]
//     }
//     return sum;
//
// }
//
// let sum1 = myArr.reduce((a, b)=>{
//     return a +b;
// });
// console.log(sum1);
//
//
// console.log(arrSum(myArr));

// Zad 3


// function replaceChar(str) {
//     let result = [];
//     for (let i = 0; i <= str.length;  i++) {
//         result[i] = (i % 2 === 0) ? str[i].toUpperCase() : str[i];
//     }
//     return result.join('');
// }
// console.log(replaceChar('Ala ma kota'));


// Zad 4


// const checkAtr = function (atr1, atr2) {
//      return  typeof atr1 !== 'number'|| typeof atr2 !== "number" ? false : atr1 *atr2;
// }
// console.log(checkAtr(4, "2"));
// console.log(checkAtr(4, 2 ));

// Zad 5
//
// let whatDo = function (name, month) {
//     let season =month.toLowerCase();
//
//     if ("grudzień, styczeń, luty".match(season)) {
//         return `"${name} jeździ na sankach"`;
//     }
//     else if ('marzec, kwiecień, maj'.match(season)) {
//         return `"${name} chodzi po kałużach"`;
//     }
//     else if ('czerwiec, lipiec, sierpień'.match(season)) {
//         return `"${name} sie opala"`;
//     }
//     else if ('wrzesień, październik, listopad'.match(season)) {
//         return `"${name} zbiera liście"`;
//     }
//     else {
//         return `"${name} uczy się JS"`
//     }
// }
//
// console.log(whatDo("Tom", 'SIERPIEń'));

// Zad 6


// const str = "Ania|Marcin|Bartek|Piotr|Kuba|Beata|Agnieszka";
//  const mark = "/"
//
// const sortString = function (str, mark) {
//      return  str.split('|').sort().join(mark);
// }
//
// console.log(sortString(str, mark));

// Zad 7


// const myArr = ["Ania" , "Marcin" , "Bartek" , "Piotr"];
//
// const upperCase = function (arr) {
//     arr.forEach((person, index) => {
//         arr.splice(index, 1 ,person.toUpperCase());
//     });
//     return arr;
// }
//
// const randomCase = function (arr) {
//
//     function replaceChar(person) {
//         const result = []
//         for (let i = 0; i < person.length;  i++) {
//             result[i] = (i % 2 !== 0 ) ? person[i].toLowerCase() : person[i]
//         }
//         return result.join('');
//     }
//
//     arr.forEach((person, index) => {
//         arr.splice(index, 1 ,replaceChar(person));
//     });
//     return arr;
//
// };
//
// console.log(upperCase(myArr));
// console.log(randomCase(myArr));


// Zad 8