//alerts the dog's info when click on the dog's photo
function showDogInfo(name, breed, fee) {
  alert(
    'Name: ' + name +
    '\nBreed: ' + breed +
    '\nAdoption Fee: $' + fee.toFixed(2)
  );
}

//add to the total and alert the total
let total = 0;

function addToTotal(fee) {
  total = total + fee;
  alert('Your total adoption fees: $' + total.toFixed(2));
}



