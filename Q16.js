// Question 16: More Guests: You've found a bigger dinner table, so there's room for more guests.
let guestsList = ["Awais", "Sadaf", "Maryam"];
console.log("Great news! I found a bigger dinner table!");
// Adding more guests
//adding begging of array use unshift()
guestsList.unshift("Bisma");
//adding middele of array use splice()
guestsList.splice(Math.floor(guestsList.length / 2), 0, "Sidra");
//adding last of array use push()
guestsList.push("Saud");
guestsList.forEach(guests => {
    console.log(`Dear ${guests}, would you like to join me for dinner?`);
});
export {};
// output:
// Great news! I found a bigger dinner table!
// Dear Bisma, would you like to join me for dinner?
// Dear Awais, would you like to join me for dinner?
// Dear Sidra, would you like to join me for dinner?
// Dear Sadaf, would you like to join me for dinner?
// Dear Maryam, would you like to join me for dinner?
// Dear Saud, would you like to join me for dinner?
