// Function declaration for submit listener
function formSubmission(e) {
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
  }

//Listener for checkout submit button
document.getElementById("checkout-form").addEventListener("submit", formSubmission);
