$(document).ready(function() {
$('#submit').click(function() {
  alert("Thank you. The form information has been received");
}),console.log($('validateForm'))
})

  function validateForm() {
    let name = document.getElementById("applicantName").value;
    let email = document.getElementById("email").value;
    let address = document.getElementById("address").value;
    let city = document.getElementById("city").value;
    let state = document.getElementById("state").value;
    let yes = document.getElementById('yes').value;

    if (name == "allison")
    if (email == "bondy.allison@gmail.com")
    if (address == "8828 Pershing")
    if (city == "Playa del Rey")
    if (yes == "yes")

    {
      event.preventDefault();
      console.log(name, email, address, city, state, yes);
    }
  }
