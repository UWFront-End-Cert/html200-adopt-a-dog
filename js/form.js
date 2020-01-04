//  Form Values  //
const form = document.getElementById("checkout-form");
const submitButton = document.getElementById("submit");

let formInfo = [];

function submitForm() {
  let formInfo = []; //testing purposes//
  event.preventDefault();
  alert("Thank you!  Your information has been received.");
  formInfo.push(document.getElementById("name").value);
  formInfo.push(document.getElementById("address").value);
  formInfo.push(document.getElementById("city").value);
  formInfo.push(document.getElementById("state").value);
  formInfo.push(document.getElementById("zipcode").value);
  formInfo.push(document.querySelector('input[name="first-adopter"]:checked').value);
  formInfo.push(document.getElementById("pickup-location").value);

  console.log(formInfo);
}
