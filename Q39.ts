
/* Question 39: City Names: Write a function called city_country() that takes in the name of a
                city and its country. The function should return a string formatted like this:

                "Lahore, Pakistan"

                Call your function with at least three city-country pairs, and print the value that’s returned. */


function City_Country(city: string, country: string): string {
    return `"${city}, ${country}"`;
}

console.log(City_Country("Karachi", "Pakistan"));          // "Karachi, Pakistan"
console.log(City_Country("Jaddah", "Saudia Arabia"));      // "Jaddah, Saudia Arabia"
console.log(City_Country("Beijing", "China"));             // "Beijing, China"
