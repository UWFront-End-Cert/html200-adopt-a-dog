// const fields = [
//     {
//         name: "full-name",
//         label: "Full Name"
//     },
//     {
//         name: "email",
//         label: "Email Address"
//     }
// ];
// const form = document.createElement('form');
// document.body.appendChild(form);

// for(let i=0; i<fields.length; i+=1) {
//     const field = fields[i];

//     const label = document.createElement('label');
//     label.textContent = field.label;
//     label.setAttribute("for", field.name);

//     const input = document.createElement('input');
//     input.setAttribute('id', field.name);

//     form.appendChild(label);
//     form.appendChild(input);
// }



// const submitButton = document.createElement("button");
// submitButton.setAttribute("type", "submit");
// submitButton.textContent = "Submit";
const form = document.querySelector("form")


// // form.appendChild(submitButton);
let cname =document.getElementById("name");
let email = document.getElementById("email");
let street = document.getElementById("street");
let city = document.getElementById("city");
let state = document.getElementById("state");
let notrepeat = document.getElementById("firstTime");
let repeat = document.getElementById("notFirstTime");
let pickup = document.getElementById("pickup");
form.addEventListener('submit', function(event){
    event.preventDefault();
    console.log(cname.value);
    console.log(email.value);
    console.log(street.value);
    console.log(city.value);
    console.log(state.value);
    // console.log.prop(firstTime.value);
    // console.log.prop(notFirstTime.value);    
    console.log(pickup.value);
    alert("Thank you. The form information has been received");




});



// $('#submitForm').submit(function( event) {
//     if ($('#name').val(),$('#email').val(),$('#street').val(),$('#city').val() == "") {
//       alert("Please fill out all the information.")
//     }
//     else {
//     // event.preventDefault();
//     alert("Thank you. The form information has been received.")
//     console.log("Name: " + $('#name').val());
//     console.log("Email: " + $('#email').val());
//     console.log("Street: " + $('#street').val());
//     console.log("City: " + $('#city').val());
//     console.log("State: " + $('#state').val());
//     console.log("First time? " + $('#firstTime').prop( 'checked'));
//     console.log("Repeat customer? " + $('#notFirstTime').prop( 'checked'));
//     console.log("Pickup location: " + $('#pickup').val());
//     }
//   });