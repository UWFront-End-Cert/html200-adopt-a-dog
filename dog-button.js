
let total = 0

function clickPhoto(name, breed, cost) {
  let result = "Dog name: " + name + " Breed: " + breed + " Fees: " + cost
  alert(result);
}

function dogFees(fee) {
   total = total + fee
alert('Total cost $' + total);
}
