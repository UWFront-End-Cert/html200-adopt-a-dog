// button click
let total = 0;

// alert when the dog's pic is clicked on
function dogInfo(dogName, breed, fee) {
  alert(dogName, breed, fee);
}

// alert with total cost
// this will eventually need to persist across pages
function totalCost(cost) {
  total += cost;
  alert('Your total is: $' + total);
}

/* From class:
function clickHandler(str) {
  alert(str);
}

let total = 0;

function adopt(price) {
  total = price + total;
  console.log("Total: ", total);
}
*/
