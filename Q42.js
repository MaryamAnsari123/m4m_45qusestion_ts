/* Question 42: Great Magicians: Start with a copy of your program from Exercise 39.
                Write a function called make_great() that modifies the array of magicians by
                adding the phrase the Great to each magician’s name. Call show_magicians() to
                see that the list has actually been modified.*/
let magicians_name = ["chintoo", "pappu", "guddu"];
function make_great(magicians1) {
    for (let i = 0; i < magicians1.length; i++) {
        magicians_name[i] = `${magicians1[i]} the Great`;
    }
    return magicians_name;
}
function show_megicians(megician) {
    for (let show of megician) {
        console.log(show);
    }
}
magicians_name = make_great(magicians_name); // Modifies the original array
show_megicians(magicians_name); // Shows modified names
//output:
// chintoo the Great
// pappu the Great
// guddu the Great
//Different Method
let magicians_name1 = ["chintoo", "pappu", "guddu"];
function make_great2(cb) {
    cb();
}
function show_Magicians() {
    for (let i = 0; i < magicians_name1.length; i++) {
        console.log(`${magicians_name1[i]}, the Great`);
    }
}
make_great2(show_Magicians);
export {};
// output:
// chintoo, the Great
// pappu, the Great
// guddu, the Great
