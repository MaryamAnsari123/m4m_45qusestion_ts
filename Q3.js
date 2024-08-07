/*Question 3: Name Cases: Store a person’s name in a variable,
and then print that person’s name in lowercase, uppercase, and titlecase.*/
let personname = "Maryam ansari";
console.log(`\t *****LOWERCASE***** \t`); //                *****LOWERCASE*****
console.log(personname.toLowerCase()); //output:            maryam ansari
console.log(`\t *****UPPERCASE***** \t`); //                 *****UPPERCASE*****
console.log(personname.toUpperCase()); // output:         MARYAM ANSARI
console.log(`\t *****TITLECASE***** \t`); //                    *****TITLECASE*****
console.log(personname.replace(/\b\w+/g, (personname) => personname.charAt(0).toUpperCase() + personname.slice(1))); //output:  Maryam Ansari
export {};
