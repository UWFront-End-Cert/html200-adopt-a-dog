/*---------------------------------------------------------------------------------
On the form page, display an alert that says "Thank you. The form information 
has been received" when the form has been submitted.
Console log the values inside the form, you can build a string or build an object.
Reference Lesson07b Creating a Form Dynamically video
-----------------------------------------------------------------------------------*/
//get the html element by ID (contact-form) and store it to variable blogContainer
const form = document.getElementById('contact-form');

//create event handler of the form submission
form.addEventListener('submit', function(event) {
  //prevent the default action so that the page does not refresh
  event.preventDefault();

  //get values from the form for console log
  const name = document.getElementById('name').value;
  const email = document.getElementById('email').value;
  const phone = document.getElementById('phone').value;
  const date = document.getElementById('date').value;
  const reason = document.getElementById('reason').value;
  const message = document.getElementById('message').value;

  /*-------------------------------------------------------------
  Bonus 1: Validate that all the form fields have been filled out
  and that the email address is a valid address
  --------------------------------------------------------------*/
  //check  if the fields is empty
  if (!name || !email || !phone || !date || !reason || !message) {
    alert('Please fill out all fields.');
    return; // stop the form from continuing
  }
  
  //validate email format
  const emailFormat = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  if (!emailFormat.test(email)) {
    alert('Please enter a valid email address.');
    return;
  }

  //display alert
  alert('Thank you. The form information has been received');

  //console log value inside the form
  console.log('Form submitted!');
  console.log('Name:', name);
  console.log('Email:', email);
  console.log('Phone:', phone);
  console.log('Date:', date);
  console.log('Reason:', reason);
  console.log('Message:', message);
});


