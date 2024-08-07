/*Question 14: Guest List: If you could invite anyone, living or deceased, to dinner,
 who would you invite? Make a list that includes at least three people you’d like to invite to dinner.
 Then use your list to print a message to each person, inviting them to dinner.*/

 //DEFINE GUESTLIST
 let guestList: string[] = ["Awais" , "Saad" , "Sadaf"];

 //invite guest

 //FOR EACH METHOD
 console.log(`\t ****for Each Method**** \t`)
 guestList.forEach(guest => {
    console.log(`Dear ${guest}, would you like to joine me for dinner?`)
 });

 //map() method
 console.log(`\t ****map() Method**** \t`)
 //invite guest
 let invitation : string[] = guestList.map(guest => `Dear ${guest}, would you like to joine me for dinner?`)
//  console.log(invitation)
 invitation.forEach(invite => {
   console.log(invite)
 });

// output:

// ****for Each Method****
// Dear Awais, would you like to joine me for dinner?
// Dear Saad, would you like to joine me for dinner?
// Dear Sadaf, would you like to joine me for dinner?

//          ****map() Method****
// Dear Awais, would you like to joine me for dinner?
// Dear Saad, would you like to joine me for dinner?
// Dear Sadaf, would you like to joine me for dinner?