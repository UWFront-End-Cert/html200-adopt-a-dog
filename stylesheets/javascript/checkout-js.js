function submitClick() {
  var name = document.getElementById("name");
  console.log(name.value);

  var email = document.getElementById("email");
  console.log(email.value);

  var street = document.getElementById("street");
  console.log(street.value);

  var city = document.getElementById("city");
  console.log(city.value);

  var state = document.getElementById("state");
  console.log(state.value);

  var zip = document.getElementById("zip");
  console.log(zip.value);

  var firstTime = document.querySelector('input[name="firstTime"]:checked');
  console.log(firstTime.value);

  var locations = document.getElementById("locations");
  console.log(locations.value);

  alert("Thank you. The form information has been received");

}
