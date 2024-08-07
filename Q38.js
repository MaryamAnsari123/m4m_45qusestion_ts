/* Question 38: Cities: Write a function called describe_city() that accepts the name of a
                city and its country. The function should print a simple sentence, such as
                Karachi is in Pakistan. Give the parameter for the country a default value.
                Call your function for three different cities, at least one of which is not in the default country.*/
function Describe_City(city, country = "Pakistan") {
    console.log(`${city} is in ${country}.`);
}
Describe_City("Karachi"); //with default country               output: Karachi is in Pakistan.
Describe_City("Hyderabad"); //with default country            output: Hyderabad is in Pakistan.
Describe_City("Istanbul", "Turkey"); // with custom country   output: Istanbul is in Turkey.
export {};
