//Assignment 8
// Console log the values inside the form, you can build a string or build an object.

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
//As of Assignment 9, above code is unused and has been reinterpreted into jQuery. See below.

//Assignment 9: refactor console logging form inputs w/ jQuery.

$('.submit').click(function (e) {
  // myFunction(event);
  console.log('Name:');
  console.log($('#custmrName').val());
  console.log('Contact:');
  console.log($('#custmrContact').val());
  console.log('Address:');
  console.log($('#custmrSt').val());
  console.log($('#custmrCity').val());
  console.log($('#custmrState').val());
  console.log($('#custmrZip').val());
  console.log('NewCustomer?:');
  console.log($('input[name ="custmrNew"]:checked').val());//how does this syntax work?
  console.log('PickupLoc:');
  console.log($('#pickupLoc').val());
  // console.log('jQuery event connected'); //jQuery connection test
});
