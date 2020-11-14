let dogName;
let fees = [];
let fee = 0;
let total = 0;

function viewDogInfo(dogName, breed, fee) {
  let dogInfo = 'Name: ' + dogName  + '\n' + 'Breed: ' + breed + '\n' + 'Fee: $' + fee;
  alert(dogInfo);
}

function addFee(dogName, fee, id, checkoutTotal) {
  fee = Number(fee);
  fees.push(fee);
  let total = fees.reduce(function(a, b) {
    return a + b;
   }, 0);
  let displayTotal = total.toFixed(2);
  alert('Name: ' + dogName + '\n' + 'Fee: ' + '$' + fee + '\n' + 'Total: ' + '$' + displayTotal);
  document.getElementById(id).disabled = true;
  document.getElementById(id).style.backgroundColor = "#808080";
  document.getElementById(checkoutTotal).innerHTML = '$' + displayTotal;
  return total;
} 





