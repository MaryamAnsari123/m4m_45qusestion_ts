/*Question 44: Sandwiches: Write a function that accepts a array of items a person wants on a sandwich.
               The function should have one parameter that collects as many items as the function call provides,
               and it should print a summary of the sandwich that is being ordered. Call the function three times, 
               using a different number of arguments each time.*/



function makeSandwich(...items: string[]) {
    console.log(`Kindly Making a sandwich with ${items.join(', ')}.`);
}

makeSandwich("veggies", "cheese");
makeSandwich("tuna with mayo", "lettuce", "tomato", "hard-boiled egg", "cucumber", "onion");
makeSandwich("Ham", "american cheese", "white bread", "tomatoes", "mayonnaise")

// output:

// Kindly Making a sandwich with veggies, cheese.
// Kindly Making a sandwich with tuna with mayo, lettuce, tomato, hard-boiled egg, cucumber, onion.
// Kindly Making a sandwich with Ham, american cheese, white bread, tomatoes, mayonnaise.