document.getElementById("submit").onclick = function() {myFunction()};
let name = "Name: " + document.getElementById("adopterName").value;
let email = "Email: " + document.getElementById("adopterEmail").value;
let address =
  "Address: " + document.getElementById("adopterStreet").value + " " + document.getElementById("adopterCity").value + ", " + document.getElementById("adopterState").value + " " + document.getElementById("adopterZip").value;
let adoption = document.getElementsByName("adoptionType");
let pickupLocation = document.getElementById("pickup").value;

function firstAdoption () {
  if(adoption[0].checked == true) {
    console.log("First Adoption? Yes");
  } else {
    console.log("First Adoption? No");
  }
}

function myFunction () {
  window.alert("Thank you. The form information has been received.");
  console.log(name);
  console.log(email);
  console.log(address);
  firstAdoption();
  console.log("Pickup Location: " + pickupLocation);
}
