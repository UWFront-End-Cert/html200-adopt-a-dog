//Dog specific Arrays
/*
let murphy = ['Murphy', 'hound', '$123.45']

let murphyString = String(murphy);


let poppy = ['Poppy', 'terrier', '$123.45']

let poppyString = String(poppy);
*/
// Arrays by dog info type
let dogString;
let dogName = ['Murphy', 'Poppy', 'Jack']
let dogBreed = ['hound', 'terrier', 'beagle']
let dogPrice = [100, 200, 300]

function whichDog(n, b, p) {
  let dogString = dogName[n] + ', ' + dogBreed[b]  + ', $' + dogPrice[p];
  //console.log(dogString);
  alert(dogString);
  //return dogString; <-- do i need this line?
}


// Cost Calculator

let subtotal = 0;
let itemPrice = 100;
let total = subtotal + itemPrice;


function costCalculator() {
  subtotal + itemPrice;
  //return total;
}

//console.log(total);

/* total = subtotal + itemPrice */


/*
let x = 24;
let y = 12;
let result;

//adder function example
function adder(x, y) {
  result = x + y;
}

adder(1, .55);
*/
