// Create an array, with at least 5 strings
// array name: citiesSpain
let citiesSpain = ['Madrid', 'Barcelona', 'Valencia', 'Seville', 'Bilbo'];
    console.log(citiesSpain);

// Add an element to the end of the array
citiesSpain.push('Malaga');
    console.log(citiesSpain);

// Remove the third element of the array
citiesSpain.splice(2, 1);
    console.log(citiesSpain);

// Create a string from the elements and comma separate them
const citiesSpainList = citiesSpain.join(', ');
    console.log(citiesSpainList);