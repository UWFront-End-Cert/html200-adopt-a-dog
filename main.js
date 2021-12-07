let total = 0;

function dogInfo(name, breed, fee) {
  alert('Dog Name: ' + name + '\n' + 'Breed: ' + breed + '\n' +'Fee: ' + fee);
}

function addToTotal(fee) {
  total += Number(fee);

  alert('Total Fees: $' + total);
}