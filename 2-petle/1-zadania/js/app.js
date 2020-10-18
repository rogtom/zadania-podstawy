// zad 1
//
//
// let text = '';
// for (let i = 1; i <=10; i++) {
//      text +=  i;
// }
// console.log(text);
//


// zad2


// let n = 4;
// let txt = 'kot';
// if (n > 0) {
//
//     let output = '';
//     let i = 0;
//     while (i < n) {
//         output += txt;
//         i++
//     }console.log(output);
// }

// Zad 3

//
// let leftUp = "╔";
// let rightUp = "╗";
// let leftDown = "╚";
// let rightDown = "╝";
// let straight = "═";
// let verticali = "║"
// let empty = " ";
//
// let text = prompt();
//
// if (text.length < 20) {
//     printText(text);
// }else {
//     printText(text.slice(0,20) + "...")
// }
//
//
// function printText(text) {
//
//     for (let j = 0; j <= empty.repeat(2) + text.length + empty.repeat(2); j++ ) {
//         console.log(leftUp + straight.repeat(text.length + 4) + rightUp);
//     }
//     for (let k = 0; k <=empty.repeat(2) + text.length + empty.repeat(2); k++) {
//         console.log(verticali + empty.repeat(2) +text + empty.repeat(2) + verticali);
//     }
//     for (let j = 0; j <= empty.repeat(2) + text.length + empty.repeat(2); j++ ) {
//         console.log(leftDown + straight.repeat(text.length + 4) + rightDown);
//     }
// }


// Zad 4


// let arr = [];
//
// for (let i = 0; i < 10; i++) {
//     arr.push(Math.floor(Math.random() * ( 10 -1 +1) +1 ));
// }
// console.log(arr);
// let biggestFive = arr.filter(number => number  > 5);
//
// if (biggestFive.length > arr.length / 2) {
//     console.log("udało się");
// }else {
//     console.log("niestety nie tym razem")
// }


// Zad 5

// let n = 7;
// let mark = "-";
// let i = 0;
// let result = "";
// do {
//     result+= (i+mark.repeat(i));
//     i++
// }while (i <=n);
// console.log(result);

// Zad 6


const min = 100;
const max = 1000;

// let userNum = parseInt(prompt());
let giveNumb = parseInt(prompt("podaj liczbę od 1 do 1000"));


let randomNum = () => Math.floor(Math.random() * (max - min + 1) + min);



if (giveNumb > 1000) {
    alert("liczba za duża");
} else {
    let i = 0;

    while (randomNum() !== giveNumb) {

        i++;
        randomNum();

    }

    console.log(i);
}




