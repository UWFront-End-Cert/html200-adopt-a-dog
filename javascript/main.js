let feeTotal = 0;

function alertDogInfo(name, breed, adoptionFee) {
  let txt =
    'Name: ' + name + '\nBreed: ' + breed + '\nAdoption fee: ' + adoptionFee;
  alert(txt);
}

function addToTotal(adoptionFee) {
  feeTotal = feeTotal + adoptionFee;
  alert('Adoption fees total: $' + feeTotal);
}
