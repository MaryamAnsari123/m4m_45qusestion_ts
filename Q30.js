//Question 30: Hello Admin: Greet users differently, especially 'admin'.
let user_names = ["admin", "shadab", "saad", "manal", "yasir"];
user_names.forEach(user_name => {
    if (user_name === "admin") {
        console.log("Hello admin, would you like to see a status report?");
    }
    else {
        console.log(`Hello ${user_name}, thank you for logging in again.`);
    }
});
export {};
// output:
// Hello admin, would you like to see a status report?
// Hello shadab, thank you for logging in again.
// Hello saad, thank you for logging in again.
// Hello manal, thank you for logging in again.
// Hello yasir, thank you for logging in again.
