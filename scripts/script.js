// dog pic part
let dogName = 'Dog';
let breed = 'Mix';
let fee = 0;
// button click part
let cost = 0;
let total = 0;

// alert when the dog's pic is clicked on
function dogInfo(dogName, breed, fee) {
  let arrInfo = [dogName, breed, fee];
  return arrInfo;
}

// alert with total cost
// this will eventually need to persist across pages
function totalCost(cost) {
  total += cost;
  return total;
}
