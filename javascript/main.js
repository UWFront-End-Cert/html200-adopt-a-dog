let feeTotal = 0;

// Alert when clicking on dog picture
function alertDogInfo(name, breed, adoptionFee) {
  let txt =
  'Name: ' + name + '\nBreed: ' + breed + '\nAdoption fee: ' + adoptionFee;
  alert(txt);
}

// Alert when clicking adopt button
function addToTotal(adoptionFee) {
  feeTotal = feeTotal + adoptionFee;
  alert('Adoption fees total: $' + feeTotal);
}
