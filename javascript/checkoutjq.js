

$('.submitbutton').click(function(e) {
   {checkOut();}
});


function checkOut() {

  let name = $('#name').val();
  let email = $('#email').val();
  let address = $('#address').val();
  let city = $('#city').val();
  let state = $('#state').val();
  let zip = $('#zip').val();
  let radio = $( "input:checked" ).val()
  let location = $('#location').val();


  console.log (name + "|" + email + "|" + address + "|" + city + "|" + state + "|" + zip + "|" + radio + "|" + location);

  alert('Thank you. The form information has been received.');

  }
