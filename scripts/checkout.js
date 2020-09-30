//Assignment 8


// Console log the values inside the form, you can build a string or build an object.
//get form. assign variable
const form = document.getElementsByTagName('form');
//get input fields. assign variables
let custmrName = document.getElementById('custmrName');
let custmrSt = document.getElementById('custmrSt');


//create object for form inputs.
const formValuesObj = {
  name: custmrName,
  street: custmrSt
};


function logFormValues() {
console.log(custmrName.value);
console.log(custmrSt.value);
}

logFormValues(formValuesObj);

// Display alert onclick submit button
let checkoutSubmitForm = document.getElementById('button').addEventListener("click", myFunction);
function myFunction() {
  alert('Thank you. The form information has been received');
}
