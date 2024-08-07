// Question 25: Alien Colors #1: Imagine an alien was just shot down in a game.
// Assign 'green', 'yellow', or 'red' to a variable called alien_color.

//passed version
let aliencolor:string = "green";
if (aliencolor == "green") {
    console.log("player just earned 5 points!");
}
//output: player just earned 5 points!

//failed version
 aliencolor = "yellow";
 if (aliencolor == "green") {
    // No output because the condition is false
}
