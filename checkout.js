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
  $(this).css({"filter": "grayscale(100%)"});
  }, function(){
  $(this).css({"filter": "sepia(100%)"});
});

$('form').submit(function (e) {
  event.preventDefault();
  // get all the inputs into an array.
  var $inputs = $('form :input');

  // get an associative array of just the values.
  var values = {};
  $inputs.each(function() {
      values[this.name] = $(this).val();
  });
  console.log(values);
});
