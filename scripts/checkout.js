//Assignment 8

// Display alert onclick submit button
let checkoutSubmitForm = document.getElementById('button').addEventListener("click", myFunction);
function myFunction() {
  alert('Thank you. The form information has been received');
}

// Console log the values inside the form, you can build a string or build an object.

const form = document.getElementsByTagName('form');

//addEventListener??
function logFormValues() {
console.log(form.value);
}
