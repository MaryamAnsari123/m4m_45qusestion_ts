// Question 28: Stages of Life: Determine a person’s life stage with an if-else chain.
let age = 1;
if (age <= 2) {
    console.log("The person is a baby.");
}
else if (age == 2 || age <= 4) {
    console.log("The person is a toddler.");
}
else if (age == 4 || age <= 13) {
    console.log("The person is a kid.");
}
else if (age == 13 || age <= 20) {
    console.log("The person is a teenager.");
}
else if (age == 20 || age <= 65) {
    console.log("The person is an adult.");
}
else {
    console.log("The person is an elder.");
}
export {};
//output: The person is a baby
// because if condition is true
