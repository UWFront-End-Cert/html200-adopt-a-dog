$('form').submit(function (e) {
  alert("Thank you. The form information has been received.");
  console.log($(this).serializeArray());
  event.preventDefault();
});
