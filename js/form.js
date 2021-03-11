//On the form page, display an alert that says "Thank you. The form information has been received" when the form has been submitted.
const formAlertSubmitt = document.getElementById('submitForm');

formAlertSubmitt.addEventListener('click', {
  handleEvent: function (event) {
    event.preventDefault();
    alert('Element clicked through handleEvent property!');
  }
});

//formAlertSubmitt.addEventListener('submit', function(){
//  event.preventDefault(); //prevents it from refreshing the page
//  console.log("running alert function");
//  alert("Thank you. The form information has been received.");

//  const dogData = document.getElementById('dogdataForm').elements;
//  const submitDogData = {};
//});
