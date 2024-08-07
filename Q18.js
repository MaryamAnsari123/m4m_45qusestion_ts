// Question 18: Seeing the World: Think of at least five places you’d like to visit.
let favPlaces = ["SaudiaArabia", "Paris", "Turkey", "China", "SriLanka"];
//print in origninal order
console.log("Original order:", favPlaces);
//print in Alphabatic order
console.log("Alphabetical order:", favPlaces.slice().sort());
//still print in original order
console.log("Original order:", favPlaces);
//print in Reverse Alphabetical order
console.log("Reverse alphabetical order:", favPlaces.slice().sort().reverse());
//still in original place
console.log("Original order:", favPlaces);
//Reverse order change
favPlaces.reverse();
console.log("Reversed order:", favPlaces);
//Reverse order change in alphabetic order
favPlaces.reverse();
console.log("Original order:", favPlaces);
favPlaces.sort();
console.log("Alphabetical order:", favPlaces);
favPlaces.reverse();
console.log("Reverse alphabetical order:", favPlaces);
export {};
// output:
// Original order: [ 'SaudiaArabia', 'Paris', 'Turkey', 'China', 'SriLanka' ]
// Alphabetical order: [ 'China', 'Paris', 'SaudiaArabia', 'SriLanka', 'Turkey' ]
// Original order: [ 'SaudiaArabia', 'Paris', 'Turkey', 'China', 'SriLanka' ]
// Reverse alphabetical order: [ 'Turkey', 'SriLanka', 'SaudiaArabia', 'Paris', 'China' ]
// Original order: [ 'SaudiaArabia', 'Paris', 'Turkey', 'China', 'SriLanka' ]
// Reversed order: [ 'SriLanka', 'China', 'Turkey', 'Paris', 'SaudiaArabia' ]
// Original order: [ 'SaudiaArabia', 'Paris', 'Turkey', 'China', 'SriLanka' ]
// Alphabetical order: [ 'China', 'Paris', 'SaudiaArabia', 'SriLanka', 'Turkey' ]
// Reverse alphabetical order: [ 'Turkey', 'SriLanka', 'SaudiaArabia', 'Paris', 'China' ]
