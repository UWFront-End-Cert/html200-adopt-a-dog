let feeTotal = 0;

// Alert for clicking on dog picture
function alertDogInfo(name, breed, adoptionFee) {
  let txt =
  'Name: ' + name + '\nBreed: ' + breed + '\nAdoption Fee: ' + adoptionFee;
  alert(txt);
}

// Alert for clicking adopt button
function addToTotal(adoptionFee) {
  feeTotal = feeTotal + adoptionFee;
  alert('Adoption Fees Total: $' + feeTotal);
}
