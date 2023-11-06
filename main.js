// contact form using jQuery
$(document).ready(function(){
    $("#submitBtn").click(function(){
        event.preventDefault();
        $("#myForm").submit(); // Submit the form
        console.log($("#fname").val());
        console.log($("#email").val());
        console.log($("#address").val());
        console.log($("#city").val());
        console.log($("#state").val());
        console.log($("#zipcode").val());
        console.log($("#checkbox").val());
        console.log($("#pickuplocation").val());

    });
});

/* contact form using JavaScript
const fields = [
  {
    name: 'full-name',
    label: 'Full Name'
  },
  {
    name: 'email',
    label: 'Email Address'
  },
  {
    name: 'address',
    label: 'Address'
  },
  {
    name: 'city',
    label: 'City'
  },
  {
    name: 'state',
    label: 'State'
  },
  {
    name: 'zip-code',
    label: 'Zip code'
  },
  {
    name: 'first-time-adopter',
    label: 'First time adopter'
  },
  {
    name: 'location',
    label: 'Pick-up-location'
  }
];

const form = document.createElement('form');
document.body.appendChild(form);

for (let i = 0; i < fields.length; i += 1){
  const field = fields[i];

  const label = document.createElement('label');
  label.textContent = field.label;
  label.setAttribute('for', field.name);

  const input = document.createElement('input');
  input.setAttribute('id', field.name);

  form.appendChild(label);
  form.appendChild(input);
}


const submitButton = document.createElement('button');
submitButton.setAttribute('type', 'submit');
submitButton.textContent = 'Submit';

form.appendChild(submitButton);
//identifying form with a query selector and giving a variable
const checkoutForm = document.querySelector("form");

form.addEventListener('submit', function(event) {
    event.preventDefault();
    // console log for each element
    console.log(document.getElementById("full-name").value);
    console.log(document.getElementById("email").value);
    console.log(document.getElementById("address").value);
    console.log(document.getElementById("city").value);
    console.log(document.getElementById("state").value);
    console.log(document.getElementById("zip-code").value);
    console.log(document.getElementById("first-time-adopter").value);
    console.log(document.getElementById("location").value);
    alert('Thank you. The form information has been received.');
});

*****/
