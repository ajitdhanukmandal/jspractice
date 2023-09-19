//data types

// let length = 5;
// let myName = 'Ajit';
// let x = BigInt(123456789789456123456987);
// let y = true;
// let c;
// let d = "";
// let cars = ["Suzuki", 'Maruti', 'BMW']
// let student = {firstName: 'Ait', lastName: 'Mandal'};

// console.log(typeof(length));
// console.log(typeof(myName));
// console.log(typeof(x));
// console.log(typeof(y));
// console.log(typeof(c));
// console.log(typeof(d));
// console.log(typeof(cars));
// console.log(typeof(student));

// let myPhone = 9804064652;
// let myName = 'Ajit Mandal';

// console.log(isNaN(myPhone));
// console.log(isNaN(myName));

// console.log(Number.);

// let myPhone = 'Ajit';
// let myPhone = 98;

// if(isNaN(myPhone)){
//     console.log("Print give a valid number");
// }

// let num = 20;
// let newNum = num++;
// console.log(num);;
// console.log(newNum);

// let num = 20;
// let newNum = ++num;
// console.log(num);;
// console.log(newNum);

// console.log(10**-1);

//swapping two numbers
// var a = 5;
// var b = 6;

// var c = a + b;
// var a = b;
// var b = c - a;

// console.log("The value of a is: " + a  + " and the value of b is: " + b);

//checking leap year or not

// var year = 2000;
// debugger;
// if (year % 4 === 0) {
//   if (year % 100 === 0) {
//     if (year % 400 === 0) {
//       console.log("The year " + year + " is a leap year");
//     } else {
//       console.log("The year " + year + " is not a leap year");
//     }
//   } else {
//     console.log("The year " + year + " is a leap year");
//   }
// } else {
//   console.log("The year " + year + " is not a leap year");
// }

//fasly values : o, "", undefined, null, NaN, false
// if(undefined){
//     console.log("OMG, we loss the game");
// }else{
//     console.log("Yay, we won the game");
// }

//conditional ternary operators

// var age = 10;

// (age >= 18) ? console.log("You can vote") : console.log("You cannot vote");

// var age = 10 

//multiplication table using loop
// for(i=1; i<=10; i++){
//     var x = 5;
//     console.log(x + " x " + i + " = " + i*x);
// }

// //same as above
// for(i=1; i<=10; ++i){
//     var x = 5;
//     console.log(x + " x " + i + " = " + i*x);
// }

// var x = 7 < 5;
// var y = 10;

// console.log(Boolean(x));
// console.log(Boolean(y));

//function expression
// function sum(a,b){
//     var total = a + b;
//     console.log(total);
// }

// var funcExp = sum(4,5);
// funcExp;

// console.log(funcExp);

// function sum(a,b){
//     return total = a + b;
// }

// var funxExp = sum(2,4);
// console.log(funxExp);

// var funExp = function(a, b){
//     return a+b;
// }

// console.log(funExp(3,6));


//template literals

// var a = 5;

// for(i=0; i<=10; i++){
//     console.log(`Table of ${a} * ${i} = ${a*i}`);
// }

//fat arrow function

// const sum = () => {
//     let a = 5; b = 6;
//     let sum = a + b;
//     return `The sum of two number is ${sum}`;
// }

// console.log(sum());

// const sum = () => `The sum of two number is ${(a=3)+(b=7)}`;

// console.log(sum());


// const mul = () => {
//     return `The multiplication of two numbers is ${(a=5)*(b=8)}`;
// }

// const mul = (a, b) => a * b;
// console.log(mul(2,3))


// const hello = val => "Hello " + val;

// console.log(hello(5));

//arrays
const bikes = ['pulsar', 'yamaha', 'hero', 'honda', 'ktmduke'];

// console.log(bikes.length);
// console.log(bikes[0])
// console.log(bikes[bikes.length-1]);
// console.log(bikes.toString());

for (let x of bikes){
    console.log(x);
}

console.log(bikes.toString());
console.log(bikes.join("#"));






