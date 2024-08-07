/*Question 11: Names: Store the names of a few of your friends in an array called names.
 Print each person’s name by accessing each element in the list, one at a time.*/
let friendNames = ["Maryam", "Bisma", "Kiran", "Seema", "Harmain"];
//three types of loop:
//for loop
//for each
//for of loop
//1) loop
console.log(`\t *****for Loop Method***** \t`);
for (let i = 0; i < friendNames.length; i++) {
    console.log(friendNames[i]);
}
//for each
console.log(`\t *****For Each Metod***** \t`);
friendNames.forEach(names => {
    console.log(names);
});
//for of loop
console.log(`\t *****For of Loop Method***** \t`);
for (const names of friendNames) {
    console.log(names);
}
export {};
// output:
//  *****for Loop Method*****
// Maryam
// Bisma
// Kiran
// Seema
// Harmain
//          *****For Each Metod*****
// Maryam
// Bisma
// Kiran
// Seema
// Harmain
//          *****For of Loop Method*****
// Maryam
// Bisma
// Kiran
// Seema
// Harmain
