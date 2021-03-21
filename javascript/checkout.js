const form = document.getElementById('form');
const submitButton = document.createElement('button');
submitButton.setAttribute('type', 'submit');
submitButton.textContent='Submit';
form.appendChild(submitButton);

//Use jQuery and refactor the form submission. Simply console log the form data as before.

$( "form" ).submit(function(run) {
    console.log($(this).serializeArray());
    run.preventDefault();

//On the form page, display an alert that says "Thank you. The form information has been received" when the form has been submitted.
    alert("Thank you. The form information has been received");
})




