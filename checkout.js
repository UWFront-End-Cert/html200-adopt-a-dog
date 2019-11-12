let cartTotal = 0;

function dogDescription(name, breed, price) {
  alert(`Dog information: ${name}, ${breed}, $${price}`)
}

function addTotal(price) {
  cartTotal += price;
  alert(`Your total is now: $${cartTotal}`);
  $('.total').text(`$${cartTotal}`);
}

$('.dog-tile').hover(function(e){
  $(this).css({"border": "5px solid red"});
  }, function(){
  $(this).css({"border": "5px solid black"});
});

function formSubmit() {
  event.preventDefault();

  var nameInput = document.getElementById('name');
  var emailInput = document.getElementById('email');
  var streetInput = document.getElementById('street');
  var cityInput = document.getElementById('city');
  var stateInput = document.getElementById('state');
  var zipInput = document.getElementById('zip');
  var locationInput = document.getElementById('location');

  alert("Thank you for adopting!");
  console.log(nameInput.value);
  console.log(emailInput.value);
  console.log(streetInput.value);
  console.log(cityInput.value);
  console.log(stateInput.value);
  console.log(zipInput.value);
  console.log(locationInput.value);
}
