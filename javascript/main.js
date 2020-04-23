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

// Add and remove box shadow when overing over dog adoption cards
$(document).ready(function() {
    $(".dog-adoption-card").hover(
        function() { $(this).addClass('card-shadow'); },
        function() { $(this).removeClass('card-shadow'); }
    );
});

// Update total checkout in total when adopt button clicked
$('.adopt-button').click(function(e) {
  $('.checkout-total').html(`\$${feeTotal}`)
});

$('#checkout-button').click(function(e) {
  e.preventDefault();
  alert('Thank you. The form information has been received.');

  const fname = document.getElementById('fname').value;
  const email = document.getElementById('email').value;
  const adr = document.getElementById('adr').value;
  const city = document.getElementById('city').value;
  const state = document.getElementById('state').value;
  const zip = document.getElementById('zip').value;
  var firstTimeAdopter = document.getElementsByName('first-time-adopter');
  for (var i = 0, length = firstTimeAdopter.length; i < length; i++) {
    if (firstTimeAdopter[i].checked) {
      firstTimeAdopter = firstTimeAdopter[i].value;
      break;
    }
  }
  const pickuplocation = document.getElementById('pickup-location').value;

  console.log(`---
    Full name: ${fname}
    Email: ${email}
    Street address: ${adr}
    City: ${city}
    State: ${state}
    Zip: ${zip}
    First time adopter: ${firstTimeAdopter}
    Pickup location: ${pickuplocation}
    ---`);
});
