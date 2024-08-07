/*Question 43: Unchanged Magicians: Start with your work from Exercise 41.
               Call the function make_great() with a copy of the array of magicians’ names.
               Because the original array will be unchanged, return the new array and store
               it in a separate array. Call show_magicians() with each array to show that you
               have one array of the original names and one array with the Great added to each magician’s name.*/
let magicians_name = ["chintoo", "pappu", "guddu"];
function show_magicians(magicians) {
    magicians.forEach(magician => {
        console.log(magician);
    });
}
function make_great(magicians) {
    let great_megician = [];
    magicians.forEach(magician => {
        great_megician.push(`${magician} the great`);
    });
    return great_megician;
}
let great_megician = make_great(magicians_name.slice()); // Creates a new modified array
console.log("Original magicians:");
show_magicians(magicians_name); // Shows original names
console.log("Great magicians:");
show_magicians(great_megician); // Shows modified names
export {};
// outputL
// Original magicians:
// chintoo
// pappu
// guddu
// Great magicians:
// chintoo the great
// pappu the great
// guddu the great
