let cartTotal = 0;

// describes dog when img is clicked
function dogDescription(name, breed, price) {
  alert(`Dog information: ${name}, ${breed}, $${price}`)
}

// calculates running total of price of all dogs in cart
function addToTotal(price) {
  cartTotal += price;
  alert(`Your new total is: $${cartTotal}`);
}
