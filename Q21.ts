// Question 21: Think of something you could store in a TypeScript Object. Write a program that creates Objects containing these items.

//OBJECT
let mobile: { name: string; processor: string; price: number } = {
    name: "Realme C51",
    processor: "octa-core",
    price: 30000
};
console.log(`Mobile Info: \n Mobile name is ${mobile.name} \n This Mobile processor is ${mobile.processor} \n price is ${mobile.price}`);

// output: 

// Mobile Info:
//  Mobile name is Realme C51
//  This Mobile processor is octa-core
//  price is 30000