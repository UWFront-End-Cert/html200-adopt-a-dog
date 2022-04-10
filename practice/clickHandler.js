/* Lesson 4 Assignment 2 */

/* Click Handlers that alert the dog's info. when clicking on the dog's photo. */
//addEventListener

const dogs = [
  {name:"Murphy", breed:"Bulldog", fee:"$123.45"},
  {name:"Poppy", breed:"Shih Tzu", fee:"$123.45"},
  {name:"Jack", breed:"Beagle", fee:"$123.45"}
];

displayDogs();

function myFunction() {
  dogs.sort(function(a, b){
    let x = a.type.toLowerCase();
    let y = b.type.toLowerCase();
    if (x < y) {return -1;}
    if (x > y) {return 1;}
    return 0;
  });
  displayDogs();
}

function displayDogs() {
  document.getElementById("demo").innerHTML =
  "Name: " + dogs[0].name + ", Breed: " + dogs[0].breed + ", Adoption fee: " + dogs[0].fee + "<br>" +
  dogs[1].name + " " + dogs[1].breed + " " + dogs[1].fee + "<br>" +
  dogs[2].name + " " + dogs[2].breed + " " + dogs[2].fee;
}
console.log(displayDogs)
