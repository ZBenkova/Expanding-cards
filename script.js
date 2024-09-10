// PRIKLAD - Vypocet mzdy ----------------------------------------------------------------------------------
// const hodinovka = 320
// const daysInMonth = 20
// const hoursInDay = 8

// document.body.innerHTML += hodinovka * daysInMonth * hoursInDay
//------------------------------------------------------------------------------------------------------

//PRIKLAD - Délka filmu ----------------------------------------------------------------------------------
// const lengthOfMovie = 223;
// document.body.innerHTML += Math.floor(lengthOfMovie / 60);
// document.body.innerHTML += '<br>';
// document.body.innerHTML += lengthOfMovie % 60

//------------------------------------------------------------------------------------------------------

// BEGINNERS - JavaScript Basics for Beginners

// let something = "Strom";
// console.log(something);

// let name = "Adele"; to je string
// let age = 30; number literal
// let isApproved = true; boolean literal
// let firtstName = undefined; undefined
// let lastName = null; null



// let interestRate = 0.3;
// interestRate = 1;
// console.log(interestRate);


// OBJEKT

// let person = {
//     name: "Adele",
//     age: 30

// };
// console.log(person);

// // TECKOVA NOTACE - DOT NOTATION-YOUR DEFAULT CHOICE
// person.name = "John";
// console.log(person.name);

// //BRACKET NOTATION
// let selection = 'name';
// person['name'] = 'Mary';
// console.log(person.name);


// ARRAYS - POLE
// let selectedColors = ['red', 'blue'];
// selectedColors[2] = 105
// selectedColors[3] = 'green';
// console.log(selectedColors[0]);
// console.log(selectedColors.length);

// PRIKLAD - EMAIL ----------------------------------------------------------------------------------

// let jmeno = 'zuzanka.dvorska'
// let koncovkaEmailu = '@gmail.com'
// let result = jmeno.concat(koncovkaEmailu)
// console.log(result)
// //nebo reseni:
// console.log(jmeno + koncovkaEmailu)

//-----------------------------------------------------------------------------------------------

// FUNKCE - FUNCTION


// function greet(name) {
//     console.log('Hello' + name);
// }

// greet(' Adam');

// ...name is a parameter of a function
// "Adam" is an argument of a function

// PRIKLAD - MARATON -----------------------------------------------------------------------------------


// const time = (duration) => {

//     const start = 15
//     let time = start + duration
//     if (time >= 24) {
//         time -= 24
//     }
//     return time
// }

// time(10);
// console.log(time(11))
// console.log(time(9))
// console.log(time(7))

// NEBO

// const time = (value) => {
//     let start = 15
//     let time = (value + start) % 24
//     return time
// }

// console.log(time(11))
// console.log(time(9))
// console.log(time(6))

// ------------------------------------------------------------------------------------------------
//PERFORMING A TASK

// const square = (number) => {
//     return number * number;
// }
// let number = square(2);
// console.log(number)

//JINAK:

// const square = (number) => {
//     return number * number;
// }

// console.log(square(2))


//CVICENI - NAHODNA CISLA

//document.body.innerHTML = Math.random();

//CVICENI - PREVOD MENY

// const wageInEur = 20
// const rate = 24.55
// const wageInCzk = Math.round(wageInEur * rate)

// document.body.innerHTML = '<h1>Mzda v korunach: ' + wageInCzk + ' Kc</h1>';

//CVICENI - HOD KOSTKOU

// let result = 1 + Math.floor(Math.random() * 6)

// document.body.innerHTML += result

//CVICENI - PRIJEM DIVADLA /////DORESIT////////

// const prijem = (priceOfTicket, numberOfVisitors, numberOfShows) => {
//     let result = priceOfTicket * numberOfShows * numberOfVisitors
//     return result
// }

// let vysledek = prijem(12, 174, 15)

// document.body.innerHTML = vysledek








