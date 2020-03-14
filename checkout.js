const form = document.getElementById("submitForm");
const name = document.getElementById("name");
const email = document.getElementById("email");
const street = document.getElementById("street");
const city = document.getElementById("city");
const state = document.getElementById("state");
const first = document.getElementById("first-time-yes");
const notFirst = document.getElementById("first-time-no");
const pickup = document.getElementById("pickup");
const submit = document.getElementById("submitForm");

form.addEventListener("submit", function() {
  event.preventDefault();
  alert("Thank you! The form has been received.");
  console.log(name.value);
  console.log(email.value);
  console.log(street.value);
  console.log(city.value);
  console.log(state.value);
  console.log('First time? ' + first.checked);
  console.log('Adopted before? ' + notFirst.checked);
  console.log(pickup.value);
});
