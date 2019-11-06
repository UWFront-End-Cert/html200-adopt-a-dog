const name = document.getElementById("name");
const email = document.getElementById("email");
const street = document.getElementById("street");
const city = document.getElementById("city");
const state = document.getElementById("state");
const zip = document.getElementById("zip");
const first = document.getElementById("city");
const notFirst = document.getElementById("notFirst");
const pickup = document.getElementById("pickup")


document.querySelector("form.dogForm").addEventListener("submit", function (e) {
  e.preventDefault();
  alert("Thank you. The form information has been received.");
  console.log(name.value);
  console.log(email.value);
  console.log(street.value);
  console.log(city.value);
  console.log(state.value);
  console.log(zip.value);
  console.log(first.value);
  console.log(notFirst.value);
  console.log(pickup.value);
});
