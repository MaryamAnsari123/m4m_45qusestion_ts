/*Question 41:Magicians: Make a array of magician’s names.
              Pass the array to a function called show_magicians(),
              which prints the name of each magician in the array.*/
let magicians_name = ["chintoo", "pappu", "guddu"];
function show_magicians(magicians_name) {
    magicians_name.forEach(magician => {
        console.log(magician);
    });
}
show_magicians(magicians_name);
export {};
//output:
// chintoo
// pappu
// guddu
