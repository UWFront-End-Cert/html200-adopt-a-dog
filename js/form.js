//On the form page, display an alert that says "Thank you. The form information has been received" when the form has been submitted.
const form = document.getElementById('dogdataForm')
const formAlertSubmitt = document.getElementById('submitForm');
formAlertSubmitt.setAttribute('type','submit');
formAlertSubmitt.textContent = 'Submit';


form.addEventListener('submit', function(e){
  event.preventDefault();
  alert('Thank you. The form information has been received.');
})

//formAlertSubmitt.addEventListener('click', {
//  handleEvent: function (event) {
//    event.preventDefault();
//    alert('Thank you. The form information has been received.');
//  }
//});

//formAlertSubmitt.addEventListener('submit', function(){
//  event.preventDefault(); //prevents it from refreshing the page
//  console.log("running alert function");
//  alert("Thank you. The form information has been received.");

//  const dogData = document.getElementById('dogdataForm').elements;
//  const submitDogData = {};
//});

//Console log the values inside the form,
//you can build a string or build an object.


let checkoutFrom = [];
document.getElementById
