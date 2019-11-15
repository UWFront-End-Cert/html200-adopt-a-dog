$('.dogForm').submit(function( event) {
  event.preventDefault();
  alert("Thank you. The form information has been received.");
  console.log($('#name').val());
  console.log($('#email').val());
  console.log($('#street').val());
  console.log($('#city').val());
  console.log($('#state').val());
  console.log($('#zip').val());
  console.log($('#first').val());
  console.log($('#notFirst').val());
  console.log($('#pickup').val());
});
