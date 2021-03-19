$('form').submit(function (event) {
  alert("Thank you. The form information has been received.");
  console.log($(this).serializeArray());
  event.preventDefault();
});
