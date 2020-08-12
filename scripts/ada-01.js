// Arrays by dog info type
let dogString;
let dogName = ['Murphy', 'Poppy', 'Jack']
let dogBreed = ['hound', 'terrier', 'beagle']
let dogPrice = [100, 500, 300]

function whichDog(n, b, p) {
  let dogString = dogName[n] + ', ' + dogBreed[b]  + ', $' + dogPrice[p];
  //console.log(dogString);
  alert(dogString);
  //return dogString; <-- works w/o a return...? do i need this line?
}


// Cost Calculator
let total = 0;

function costCalculator(x) {
  total += x;
  //return total; return not necessary. code stops at return. ok to have a function w/o a return?
  alert(total);
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
