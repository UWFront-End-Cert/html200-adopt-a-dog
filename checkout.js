$('#submitForm').submit(function( event) {
  if ($('#name').val(),$('#email').val(),$('#street').val(),$('#city').val() == "") {
    alert("Please fill out all the blank!")
  }
  else {
  event.preventDefault();
  alert("Thank you! The form has been received.")
  console.log("Name: " + name.value);
  console.log("Email: " + email.value);
  console.log("Street: " + street.value);
  console.log("City: " + city.value);
  console.log("State: " + state.value);
  console.log("First time? " + first.checked);
  console.log("Repeat customer? " + notFirst.checked);
  console.log("Pickup location: " + pickup.value);
  console.log("Name: " + $('#name').val());
  console.log("Email: " + $('#email').val());
  console.log("Street: " + $('#street').val());
  console.log("City: " + $('#city').val());
  console.log("State: " + $('#state').val());
  console.log("First time? " + $('#first-time').prop( 'checked'));
  console.log("Repeat customer? " + $('#first-time-no').prop( 'checked'));
  console.log("Pickup location: " + $('#pickup').val());
  }
});
