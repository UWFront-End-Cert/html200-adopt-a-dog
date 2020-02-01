$('#checkout-form').submit(function(event){
  var email = document.getElementById("email").value.indexOf("@");
  var name = document.getElementById("name").value;
  submitOK = "true";
  if (name.length > 10) {
    alert("The name may have no more than 10 characters");
    submitOK = "false";
  }
  if (email == -1) {
    alert("Not a valid e-mail!");
    submitOK = "false";
  }

  if (submitOK == "false") {
    return false;
  }

  else{
    event.preventDefault();
    alert("Thank you. The form information has been received.")
    console.log("Name: " + $('#name').val());
    console.log("Email: " + $('#email').val());
    console.log("Street: " + $('#street').val());
    console.log("City: " + $('#city').val());
    console.log("State: " + $('#state').val());
    console.log("Zip-code: " + $('#code').val());
    console.log("First time? " + $('#adopter').val());
    console.log("Pickup location: " + $('#location').val());
  }
});
