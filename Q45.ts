/* Question 45: Cars: Write a function that stores information about a car in a Object. 
                      The function should always receive a manufacturer and a model name. 
                      It should then accept an arbitrary number of keyword arguments. 
                      Call the function with the required information and two other name-value pairs, 
                      such as a color or an optional feature. Print the Object that’s returned to make 
                      sure all the information was stored correctly.*/




function Car_info(manufacturer: string, model_name: string, ...options: [string, any][]): Object {
    let myCar : {
        [key : string] : any
    } = { manufacturer, model_name };

    options.forEach(([name, value]) => { myCar[name] = value} );
    return myCar;
}

console.log(Car_info("Toyota", "Corolla", ["color", "red"], ["year", 2020]));
console.log(Car_info("Ford", "Fiesta", ["color", "blue"], ["sunroof", true]));

// output:

// {
//     manufacturer: 'Toyota',
//     model_name: 'Corolla',
//     color: 'red',
//     year: 2020
//   }
//   {
//     manufacturer: 'Ford',
//     model_name: 'Fiesta',
//     color: 'blue',
//     sunroof: true
//   }
