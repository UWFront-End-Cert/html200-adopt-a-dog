//Assignment 8


// Console log the values inside the form, you can build a string or build an object.
//get form. assign variable
const form = document.getElementsByTagName('form');
//get input fields. assign variables



//create object for form inputs.
const formValuesObj = {
  name: custmrName,
  street: custmrSt
};

//function console log form values
function logFormValues() {

}

logFormValues(formValuesObj); //call function

// Display alert onclick submit button
// let checkoutSubmitForm = document.getElementById('button').addEventListener("click", myFunction);
function myFunction(event) { //this queues the console log. review event (e) mdn doc.
  event.preventDefault(); //prevent page reload
  //review mdn doc
  //event.target
  let custmrName = document.getElementById('custmrName');// place these in function logFormValues. PreventDefault
  let custmrSt = document.getElementById('custmrSt');
  console.log(custmrName.value); //logs blank.
  console.log(custmrSt.value); //logs blank.
  alert('Thank you. The form information has been received');
}
