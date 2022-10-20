/*Form Submit*/
function drop() {
  alert('Thank you. The form information has been received');
}

const form = document.getElementById('form');
form.addEventListener('submit', drop);


$("form").submit(function(event) {
  event.preventDefault();
  let x = document.getElementById('form').elements;
  console.log("Username: ", x['name'].value);
  console.log("Email: ", x['email'].value);
  console.log("Address: ", x['address'].value);
  console.log("City: ", x['city'].value);
  console.log("State: ", x['state'].value);
  console.log("Zipcode: ", x['zipCode'].value);
  console.log("First Time Adopter: ", x['firstTimeAdopter'].value);
  console.log("Pickup Location: ", x['dropdown'].value);
  console.log("Submit: ", x['submit'].value);
});
