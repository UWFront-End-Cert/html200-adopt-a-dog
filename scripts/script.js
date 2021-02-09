let name = 'name';
let breed = 'breed';
let adoptionFee = 0;

function dogInfo(name, breed, adoptionFee) {
  alert(name + ' is a ' + breed + '. Cost to adopt: $' + adoptionFee);
}

let cartStart = 0;
let cartCurrent = 0;

function cartTotal(adoptionFee, cartStart) {
  if (cartCurrent === cartStart) {
    cartCurrent = cartStart + adoptionFee;
  } else {
    cartCurrent = cartCurrent + adoptionFee;
  }
  alert('You have $' + cartCurrent + ' worth of dog in your cart.');
}
