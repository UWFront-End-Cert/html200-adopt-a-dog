let cartTotal = 0;

function dogDescription(name, breed, price) {
  alert(`Dog information: ${name}, ${breed}, $${price}`)
}

function addToTotal(price) {
  cartTotal += price;
  alert(`Your total is now: $${cartTotal}`);
}

var nameInput = document.getElementById('name');
var emailInput = document.getElementById('email');
var streetInput = document.getElementById('street');
var cityInput = document.getElementById('city');
var stateInput = document.getElementById('state');
var zipInput = document.getElementById('zip');

function onSubmit() {
  alert(`Thank you for adopting!`)
  console.log(nameInput);
  console.log(emailInput);
  console.log(streetInput);
  console.log(cityInput);
  console.log(stateInput);
  console.log(zipInput);
}
