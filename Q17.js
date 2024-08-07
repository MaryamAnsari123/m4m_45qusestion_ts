// Question 17: Shrinking Guest List: Unfortunately,
//  your new table won’t arrive in time, and you can only invite two guests.
let Guestslist = ["Awais", "Sadaf", "Sana", "Bisma", "Maryam"];
console.log("Unfortunately, I can only invite two people for dinner.");
//can't invite
while (Guestslist.length > 2) {
    let removedGuest = Guestslist.pop();
    console.log(`Sorry, ${removedGuest}, I can't invite you to dinner.`);
}
//still invited
Guestslist.forEach(guest => {
    console.log(`Dear ${guest}, you're still invited to dinner.`);
});
Guestslist.slice(0, 2);
console.log("Updated Guest list", Guestslist);
export {};
// output:
// Unfortunately, I can only invite two people for dinner.
// Sorry, Maryam, I can't invite you to dinner.
// Sorry, Bisma, I can't invite you to dinner.
// Sorry, Sana, I can't invite you to dinner.
// Dear Awais, you're still invited to dinner.
// Dear Sadaf, you're still invited to dinner.
// Updated Guest list [ 'Awais', 'Sadaf' ]
