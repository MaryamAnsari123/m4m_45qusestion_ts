/* Question 42: Great Magicians: Start with a copy of your program from Exercise 39.
                Write a function called make_great() that modifies the array of magicians by 
                adding the phrase the Great to each magician’s name. Call show_magicians() to 
                see that the list has actually been modified.*/

let magicians_name: string[] = ["chintoo", "pappu", "guddu"];

function make_great(magicians1: string[]) {
    for (let i = 0; i < magicians1.length; i++) {
        magicians_name[i] = `${magicians1[i]} the Great` ;
    }
    return magicians_name
}

function show_megicians(megician : string[]) : void{
    for(let show of megician){
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
let magicians_name1: string[] = ["chintoo", "pappu", "guddu"];

function make_great2(cb: () => void){
    cb()
}
function show_Magicians(): void{
    for(let i = 0 ; i < magicians_name1.length ; i++){
        console.log(`${magicians_name1[i]}, the Great`);
       }
}
make_great2(show_Magicians)

// output:

// chintoo, the Great
// pappu, the Great
// guddu, the Great