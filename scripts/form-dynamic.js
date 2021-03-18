
$('button').click(function () {
  $('form').submit(function() {
    event.preventDefault();
    alert("Thank you. The form information has been received.");
  });
});

  document.body
  .querySelectorAll('form [name]')
  .forEach(element => {
  console.log(element.name + '\:',  element.value);
})

// Assignment 8 code
// document.getElementById('formSubmitButton').addEventListener('click', function (e) {
//   event.preventDefault();
//   alert("Thank you. The form information has been received.");
// });
