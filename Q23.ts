// Question 23: Conditional Tests: Write a series of conditional tests. Predict the results of each test.
// Create at least 10 tests. Have at least 5 tests evaluate to True and another 5 tests evaluate to False.

let month = 'january';

//Test 1
console.log("Is month == 'january'? I predict True.");
console.log(month == 'january'); // True

//Test 2
console.log("Is month == 'march'? I predict False.");
console.log(month == 'march'); // False

//Test 3
console.log("Is month !== 'january'? I predict False.")
console.log(month !== "january") //false

 //Test 4
console.log("Is month !== 'December'? I predict True.")
console.log(month !== "December") //True
 
//Test 5
console.log("Is month === 'january'? I predict True.")
console.log(month === "january") //True

 //Test 6
console.log("Is month === 'february'? I predict False.")
console.log(month === "february") //False

 //Test 7
console.log("Is month.lenght > 5 ? I predict True.")
console.log(month.length > 5) //True

//Test 8
console.log("Is month.lenght < 6? I predict False.")
console.log(month.length < 6) //False

//Test 9
console.log("Is month.toUpperCase() === 'january'? I predict False.")
console.log(month.toUpperCase() === "january") //False

//Test 10
console.log("Is month.toLowerCase() === 'january'? I predict True.")
console.log(month.toLowerCase() === "january") //True

