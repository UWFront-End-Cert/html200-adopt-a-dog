document.getElementById('formSubmitButton').addEventListener('click', function (e) {
  event.preventDefault();
  alert("Thank you. The form information has been received.");

// const formData = (i = 0; i < fromData.length; i++)
// let queryString = $('#checkoutform').serialize();
  console.log(document.getElementById('name').value);

});



// const formData = document.getElementById('formContainter');
// console.log(formData);
//
// function submitform()
// {
//   document.checkoutform.submit();
// }
