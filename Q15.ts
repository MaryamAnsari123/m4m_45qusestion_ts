/*Question 15: Changing Guest List: One of your guests can't make it to the dinner,
so you need to send out a new set of invitations with a replacement guest.*/

let GuestList : string[] = ["Awais" , "Saad" , "Sadaf"];

let unableToAttend : string | undefined = GuestList.splice(1,1)[0];

//GUEST UNABLE
console.log(`Dear ${unableToAttend} can't make into dinner`)

//REPLACMENT GUEST
GuestList.push("Maryam")

//new invites
GuestList.forEach(newGuest => {
   console.log(`Dear ${newGuest} would you like to join me for dinner?`)
});

//output:

// Dear Saad can't make into dinner
// Dear Awais would you like to join me for dinner?
// Dear Sadaf would you like to join me for dinner?
// Dear Maryam would you like to join me for dinner?