/*Question 37: Large Shirts: Modify the make_shirt() function so that shirts are large by default with a message
               that reads I love TypeScript. Make a large shirt and a medium shirt with the default message,
               and a shirt of any size with a different message.*/
function make_tshirt(shirtSize = "large", message = "I love TypeScript") {
    console.log(`Making a ${shirtSize} size t-shirt with the message "${message}" printed on it.`);
}
make_tshirt(); // with Default size(large) and default message
make_tshirt("medium"); //with Default message and size medium
make_tshirt("xL", "I love Karachi"); // with Custom message and custom size(xL)
export {};
//output:
// Making a large size t-shirt with the message "I love TypeScript" printed on it.
// Making a medium size t-shirt with the message "I love TypeScript" printed on it.
// Making a xL size t-shirt with the message "I love Karachi" printed on it.
