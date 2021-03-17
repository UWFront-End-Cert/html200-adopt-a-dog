document.getElementById('formSubmitButton').addEventListener('click', function (e) {
  event.preventDefault();
  alert("Thank you. The form information has been received.");
});

  document.body
  .querySelectorAll('form [name]')
  .forEach(element => {
  console.log('name:', element.name, 'value:', element.value);
})
