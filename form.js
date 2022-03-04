// var form = document.createElement('form');
// document.body.appendChild(form);
//
//
// const submitButton = document.createElement('button');
// submitButton.setAttribute('type', 'submit');
// submitButton.textContent = 'Submit';
//
// submitButton.classList = "button-two";
//
//   form.appendChild(submitButton);
//
// form.addEventListener('submit', function(event) {
//   event.preventDefault();
//   alert ('Thank you. The form information has been received')
//
// });


// console.log(document.getElementById('name').value);

var myName = document.getElementById("name").value;
console.log("The value in the name section is " + myName);

var myEmail = document.getElementById("email").value;
console.log("The value in the email address section is " + myEmail);

var myAddress = document.getElementById("address").value;
console.log("The value in the address section is " + myAddress);

var myCity = document.getElementById("city").value;
console.log("The value in the city section is " + myCity);

var myZipcode = document.getElementById("zip").value;
console.log("The value in the zip code section is " + myZipcode);
