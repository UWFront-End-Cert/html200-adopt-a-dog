function formLog() {
  let name = document.getElementsByName('customerName')[0].value;
  let email = document.getElementsByName('customerEmail')[0].value;
  let address = document.getElementsByName('customerAddress')[0].value;
  let city = document.getElementsByName('customerCity')[0].value;
  let state = document.getElementsByName('state')[0].value;
  let zip = document.getElementsByName('Zip')[0].value;
  let firstTime = document.querySelector('input[name="firstAdopter"]:checked').value;

  let pickupLocation = document.getElementsByName('pickup')[0].value;

  console.log("Name: " + name);
  console.log("Email: " + email);
  console.log("Address: " + address + ", " + city + ", " + state + " " + zip);
  console.log("First Time Adopter?: firstTime.toUpperCase()");
  console.log("Pickup At: " + pickupLocation);

  alert("Thank you. The form information has been received.");

/* Use this code to test that everything is logged correctly
  alert("Name: " + name);
  alert("Email: " + email);
  alert("Address: " + address + ", " + city + ", " + state + " " + zip);
  alert("First Time Adopter?: " + firstTime.toUpperCase());
  alert("Pickup At: " + pickupLocation);
*/
}
