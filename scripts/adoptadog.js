let name = 'dog';
let breed = 'breed';
let price = 0;
let total = 0;

function dogInfo(name, breed, price) {
  alert('Dog: ' + name + '\n' + 'Breed: ' + breed + '\n' + 'Adoption fee: $' + price.toFixed(2));
}

function updateTotal(price) {
  total += price;
  return total;
}

function addToCart(name, price) {
  updateTotal(price);
  alert('Added ' + name + ' to cart!' + '\nTotal fees: $' + total.toFixed(2));
}
