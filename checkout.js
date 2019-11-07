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
  console.log(nameInput.value);
  console.log(emailInput.value);
  console.log(streetInput.value);
  console.log(cityInput.value);
  console.log(stateInput.value);
  console.log(zipInput.value);
}
