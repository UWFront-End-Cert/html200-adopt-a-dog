/* Lesson 4 Assignment 2 - redo */
/* Saved in clickHandlers.js this is just until I merge pull request. */

let balance = 0;

function dogBark(dogName, dogBreed, fee) {
  alert("Dog name: " + dogName + "\nDog breed: " + dogBreed + "\nAdoption fee: $" + fee);
}

/* Click handlers on each dog's button that will add to the total. Alert total. */

// Adopt button
function btnAdder(fee) {
  balance += parseInt(fee);
  alert(balance);
}
