// console.log(a);
// var a = 10;
// var b = 20.1234;
// var c = "Murali";
// var d = true;
// console.log(a + " " + b + " " + c + " " + d);
// console.log("\n");
// var a = 10;
// var b = "10";
// if (a == b) {
//   console.log("buchii");
// } else {
//   console.log("boo");
// }
// //Strict
// if (a === b) {
//   console.log("buchii");
// } else {
//   console.log("boo");
// }
// for (let i = 1; i < 10; i++) {
//   console.log(i + "\n");
// }

// console.log(2 * 3);
// console.log(2 ** 3);

// var userInput = 4;
// if ((userInput % 4 === 0 && userInput % 100 !== 0) || userInput % 400 === 0) {
//   console.log("okayy");
// } else {
//   console.log("not oaky ");
// }

// var n = 5;
// var f = 0;
// for (let index = 2; index < n; index++) {
//   if (n % index === 0) {
//     f++;
//   }
// }
// if (f === 0) {
//   console.log("Prime");
// } else {
//   console.log("not a prime");
// }
// Day 2
// var data = [10, 12.22, "hello", false];
// for (let index = 0; index < data.length; index++) {
//   console.log(data[index]);
// }
// var hom = [10, 23, 45, 56];
// console.log(data);

// data.push(30.3);
// data.pop();
// data.shift();
// data.unshift(true);
// data.forEach((i) => console.log(i));
// console.log(hom.filter((i) => i % 2 == 0));
//data.map();
// data.some();
// data.every;

// console.log(data);

// var data1 = [10, 20, 30];
// var data2 = [90, 80, 70];
// var newData = [100, ...data1, 200, ...data2];
// console.log(newData);

//JSON
// var userData = [
//   {
//     id: 1,
//     name: "Riya",
//     age: 21,
//     techStack: ["html", "css"],
//   },
//   {
//     id: 2,
//     name: "Priya",
//     age: 22,
//     techStack: ["html"],
//   },
// ];
// console.log(userData);
// console.log(userData[0].name);

// //Function
// //declaration
// function myFun() {
//   console.log("hellooo");
// }

// myFun();

// //hoisting  - every function will go to the top of the file , latest function will be called
// add(3, 5);
// function add(a, b) {
//   console.log(a + b);
// }

// add(3, 5);

// function add(a, b) {
//   console.log(a - b);
// }

// // anonymous // expression
// const myFun1 = function (a, b) {
//   console.log(a + b);
// };

// myFun1(3, 5);

// // arrow function

// const aFun = (a, b) => {
//   console.log(a + b);
// };

// const bFun = (a, b) => {
//   return a + b;
// };

// const cFun = (a, b) => a + b;

// console.log(cFun(10, 5));
