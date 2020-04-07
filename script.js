// Link JavaScript to your site.
// Create click handlers that alerts the dog’s information when clicking on the dog’s photo.
// You will need to pass in the params in the click handler of the dog’s name, breed and adoption fees.
// Create click handlers on each dog’s button that will add to the total.
// Alert this total.

// alert dog's on image click
const alertDogInfo = (name, breed, cost) => {
  alert('Dog Name: ' + name + ' |  Breed: ' + breed + ' |  Cost: $' + cost);
}

// alert cart total by adding all the fees
let total = 0;
const addToTotal = (cost) => {
  total += cost;
  alert('Cart Total is: $' + total);
}