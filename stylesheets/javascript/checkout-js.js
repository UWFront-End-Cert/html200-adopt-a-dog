function submitClick() {
  console.log($('#name').val());
  console.log($('#email').val());
  console.log($('#street').val());
  console.log($('#city').val());
  console.log($('#state').val());
  console.log($('#zip').val());
  console.log($('input[name="firstTime"]:checked').val());
  console.log($('#locations').val());

  alert("Thank you. The form information has been received");

}
