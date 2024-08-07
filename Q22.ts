// Question 22: Intentional Error: Try to produce an array index error in one of your programs. Correct the error before finishing.

let days: string[] = ["Monday", "Tuesday", "Wednesday" , "Thursday"];
//                      0           1           2              3           
console.log(days[4]); // Intentional error: Arrays are start with zero-indexed, so index 4 is out of bounds. so result is undefined
console.log(days[2]) // "wednesday" arrays number 2 value is wednesday so result is wednesday
console.log(days[0]) //"Monday" arrays number 0 value is monday so result is monday