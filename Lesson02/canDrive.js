//declare a first name, a last name, an age variable that is 16
//compare the driver's age
//if old enough to drive, write to console: name can drive, how long
//if too young, log countdown from 5

const drivingAge = 16;

let firstName = prompt('What is your first name?');
let lastName = prompt('What is your last name?');
let age = prompt('What is your age?');

let yearsDriven = age - drivingAge;


if (age >= drivingAge)
{
    console.log(firstName + ' ' + lastName + ' can drive .' + 'You have been driving for ' + yearsDriven + 'years.')
}
else (age < drivingAge)
{
    console.log(firstName + ' ' + lastName + ', you will be driving in ' + (drivingAge-age) + ' years.');
}


