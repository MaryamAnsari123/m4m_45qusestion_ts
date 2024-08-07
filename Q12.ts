/*Question 12: Greetings: Use the array from Exercise 11. 
Instead of just printing each person’s name, print a message to them. 
The message should be the same for each person, but personalized with their name.*/

let personNames : string[] =["Maryam" , "Bisma" , "Kiran" , "Seema" , "Harmain"];
let greeting : string = "whats the day today?"

//1) for loop
console.log(`\t ****for loop Method**** \t`)

for (let i = 0; i < personNames.length; i++) {
    console.log(`${personNames[i]}! ${greeting}`);
};

//for each
console.log(`\t ****for Each Method**** \t`)
personNames.forEach(names => {
    console.log(`hello! ${names}, how are you?`)
    });

//for of loop
console.log(`\t ****for of loop Method**** \t`)
 for (const names of personNames) {
    console.log(`hy! ${names}, what are you doing now?`);
 }


// output:

// ****for loop Method****
// Maryam! whats the day today?
// Bisma! whats the day today?
// Kiran! whats the day today?
// Seema! whats the day today?
// Harmain! whats the day today?

//          ****for Each Method****
// hello! Maryam, how are you?
// hello! Bisma, how are you?
// hello! Kiran, how are you?
// hello! Seema, how are you?
// hello! Harmain, how are you?

//          ****for of loop Method****
// hy! Maryam, what are you doing now?
// hy! Bisma, what are you doing now?
// hy! Kiran, what are you doing now?
// hy! Seema, what are you doing now?
// hy! Harmain, what are you doing now?