console.log(a);
var a = 10;
var b = 20.1234;
var c = "Murali";
var d = true;
console.log(a + " " + b + " " + c + " " + d);
console.log("\n");
var a = 10;
var b = "10";
if (a == b) {
  console.log("buchii");
} else {
  console.log("boo");
}
//Strict
if (a === b) {
  console.log("buchii");
} else {
  console.log("boo");
}
for (let i = 1; i < 10; i++) {
  console.log(i + "\n");
}

console.log(2 * 3);
console.log(2 ** 3);

var userInput = 4;
if ((userInput % 4 === 0 && userInput % 100 !== 0) || userInput % 400 === 0) {
  console.log("okayy");
} else {
  console.log("not oaky ");
}

var n = 5;
var f = 0;
for (let index = 2; index < n; index++) {
  if (n % index === 0) {
    f++;
  }
}
if (f === 0) {
  console.log("Prime");
} else {
  console.log("not a prime");
}
