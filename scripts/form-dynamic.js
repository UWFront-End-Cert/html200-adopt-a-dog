document.getElementById('formSubmitButton').addEventListener('click', function (e) {
  event.preventDefault();
  alert("Thank you. The form information has been received.");

  const formData = document.getElementById('formContainter');
  console.log(formData);
});
