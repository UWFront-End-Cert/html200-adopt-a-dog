const formInput = [
  document.getElementById("name"),
  document.getElementById("email"),
  document.getElementById("street")
]

document.querySelector("form.dogForm").addEventListener("submit", function (e) {
  e.preventDefault();
  alert("Thank you. The form information has been received.");
  console.log(formInput.value)
});
