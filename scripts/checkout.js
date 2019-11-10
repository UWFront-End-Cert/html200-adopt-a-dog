const form = document.getElementById("checkout-form");
const name = document.getElementById("adopt-name");
const email = document.getElementById("adopt-email");
const street = document.getElementById("adopt-street");
const city = document.getElementById("adopt-city");
const state = document.getElementById("adopt-state");
const first = document.getElementById("adopt-first-time");
const notFirst = document.getElementById("adopt-first-time-no");
const pickup = document.getElementById("adopt-pickup");
const submit = document.getElementById("submit-checkout");

form.addEventListener("submit", function() {
  event.preventDefault();
  alert("Thank you. The form information has been received.");
  console.log(name.value);
  console.log(email.value);
  console.log(street.value);
  console.log(city.value);
  console.log(state.value);
  console.log('First time? ' + first.checked);
  console.log('Adopted before? ' + notFirst.checked);
  console.log(pickup.value);
});
