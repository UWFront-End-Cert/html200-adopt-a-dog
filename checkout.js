let cartTotal = 0;

function dogDescription(name, breed, price) {
  alert(`Dog information: ${name}, ${breed}, $${price}`)
}

function addToTotal(price) {
  cartTotal += price;
  alert(`Your new total is: $${cartTotal}`);
}

$('form: input').submit(function (event) {
  event.preventDefault();
});
console.log(values);
