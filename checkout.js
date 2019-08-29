let cartTotal = 0;

function dogDescription(name, breed, price) {
  alert(`Dog information: ${name}, ${breed}, $${price}`)
}

function addToTotal(price) {
  cartTotal += price;
  alert(`Your new total is: $${cartTotal}`);
}
