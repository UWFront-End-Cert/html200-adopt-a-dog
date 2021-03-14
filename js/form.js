//On the form page, display an alert that says "Thank you. The form information has been received" when the form has been submitted.
const form = document.getElementById('dogdataForm')
const formAlertSubmitt = document.getElementById('submitForm');
formAlertSubmitt.setAttribute('type','submit');
formAlertSubmitt.textContent = 'Submit';


form.addEventListener('submit', function(e){
  //On the form page, display an alert that says
  //"Thank you. The form information has been received" when the form has been submitted.
  event.preventDefault();
  alert('Thank you. The form information has been received.');

  //Console log the values inside the form,
  //you can build a string or build an object.

  const checkoutFormData = form.elements;
  console.log(checkoutFormData);
  // minus one because we don't want to include submit button
  const submitData = {};

  for(i = 0; i < checkoutFormData.length-1; i++){
    const fieldData = form[i].value;
    const fieldName = form[i].id;

    console.log(`${fieldName}: ${fieldData}`);
    submitData[fieldData] = fieldName;
  }
console.log(submitData);
});
