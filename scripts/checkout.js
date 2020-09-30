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
// the line above selects the submit button and has an event listener onclick to call myFunction
function myFunction(event) { //this queues the console log. review 'event (e)' mdn doc.
  event.preventDefault(); //prevent page reload. review mdn doc
  //event.target, review mdn doc
  let custmrName = document.getElementById('custmrName');// get fields, assign variables. Place these in function myFunction.
  let custmrContact = document.getElementById('custmrContact');
  let custmrSt = document.getElementById('custmrSt');
  let custmrCity = document.getElementById('custmrCity');
  let custmrState = document.getElementById('custmrState');
  let custmrZip = document.getElementById('custmrZip');
  let custmrNewYes = document.getElementById('custmrNewYes');
  let custmrNewNo = document.getElementById('custmrNewNo');
  let pickupLoc = document.getElementById('pickupLoc');

  console.log('Name: ' + custmrName.value); //logs values of field.
  console.log('Contact: ' + custmrContact.value);
  console.log('Address: ' + custmrSt.value);
  console.log(custmrCity.value);
  console.log(custmrState.value);
  console.log(custmrZip.value);
  //radio buttons
  if (custmrNewYes.checked === true) {
    console.log('New customer: Yes');
  } else {
    console.log('New customer: No');
  }
  //
  console.log('Pickup Loc: ' + pickupLoc.value);
  alert('Thank you. The form information has been received');
}
