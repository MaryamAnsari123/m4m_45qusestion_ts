/*Question 13: Your Own Array: Think of your favorite mode of transportation,
 such as a motorcycle or a car, and make a list that stores several examples.
 Use your list to print a series of statements about these items, such as “I would like to own a Honda motorcycle.”*/
let transportationMode = ["Car", "Bus", "Motorcycle", "Aeroplane", "Train"];
let Message = "I would to like own a";
//1) for loop
console.log(`\t ****for loop Method**** \t`);
for (let i = 0; i < transportationMode.length; i++) {
    console.log(`${Message} ${transportationMode[i]}.`);
}
;
//for Each
console.log(`\t ****for Each Method**** \t`);
transportationMode.forEach(transport => {
    console.log(`${Message} ${transport}.`);
});
//for of loop
console.log(`\t ****for loop Method**** \t`);
for (const modeName of transportationMode) {
    console.log(`${Message} ${modeName}.`);
}
export {};
//output:
//  ****for loop Method****
//  I would to like own a Car.
//  I would to like own a Bus.
//  I would to like own a Motorcycle.
//  I would to like own a Aeroplane.
//  I would to like own a Train.
//           ****for Each Method****
//  I would to like own a Car.
//  I would to like own a Bus.
//  I would to like own a Motorcycle.
//  I would to like own a Aeroplane.
//  I would to like own a Train.
//           ****for loop Method****
//  I would to like own a Car.
//  I would to like own a Bus.
//  I would to like own a Motorcycle.
//  I would to like own a Aeroplane.
//  I would to like own a Train.
