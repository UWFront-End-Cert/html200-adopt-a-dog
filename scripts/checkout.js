const form = document.getElementById("checkout-form");
const submit = document.getElementById("submit-checkout");
const name = document.getElementById("name");
const email = document.getElementById("email");
const street = document.getElementById("street");
const city = document.getElementById("city");
const state = document.getElementById("state");
const first = document.getElementById("first-time");
const notFirst = document.getElementById("first-time-no");
const pickup = document.getElementById("pickup");

form.addEventListener("submit", function() {
  if (name.value, email.value, street.value, city.value == "") {
    alert("Please fill out all information.")
  }
  else {
  event.preventDefault();
  alert("Thank you. The form information has been received.")
  console.log("Name: " + name.value);
  console.log("Email: " + email.value);
  console.log("Street: " + street.value);
  console.log("City: " + city.value);
  console.log("State: " + state.value);
  console.log("First time? " + first.checked);
  console.log("Repeat customer? " + notFirst.checked);
  console.log("Pickup location: " + pickup.value);
  }
});
