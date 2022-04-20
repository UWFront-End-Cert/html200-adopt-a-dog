/* Lesson 4 Assignment 2 */

let balance = 0;

/*click handlers that alerts the dog’s information when clicking on the dog’s photo. */
function dogBark(dogName, dogBreed, fee) {
  alert("Dog name: " + dogName + "\nDog breed: " +  dogBreed + "\nAdoption fee: $" + fee);
}

/* Click Handlers on each dog's button that will add to the total. Alert total. */
// Adopt button
function btnAdder(fee) {
  balance += parseInt(fee);
  alert(balance);
}
