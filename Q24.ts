// Question 24: More Conditional Tests: Expand your conditional tests to cover a wider range of comparisons.


// Equality with strings
console.log("Testing equality with strings and datatype:");
const flower:string = "Rose"
const Thing:string = "kite"

console.log(flower === Thing); // False
console.log(flower !== Thing); // True

// Using the lower case function
console.log("Testing with lower case and Upper case:");
console.log("Flower".toLowerCase() === "flower"); // True
console.log("Flower".toUpperCase() === "FLOWER"); // True

// Numerical tests
console.log("Numerical tests:");
console.log(9 == 9); //True
console.log(8 != 8); //false
console.log(9 > 2); // True
console.log(8 < 5); // False
console.log(9 >= 8); // True
console.log(10 <= 9); // False

// Tests using "and" and "or" operators
console.log("Tests with 'and' and 'or':");

let a = 5
let b = 10
let c = 20
console.log(a < b && b < c); // True
//           true && true   ( both value are true so answer is true in AND operators)
console.log(b < c || a > c ); // True
//          false  || true  ( one value is false and one is true so answer print is true because this is OR operators)

// Test whether an item is in a array
let Cities : string[] = ["karachi", "lahore", "islamabad" , "quetta" , "Murree"];
console.log("Is 'Karachi' in add cities?");
console.log(Cities.includes("karachi")); // True

// Test whether an item is not in a array
console.log("Is 'faisalabad' not in add cities?");
console.log(!Cities.includes("faisalabad")); // True

