//pre-jQuery code:
// const form = document.querySelector("form")
// let cname =document.getElementById("name");
// let email = document.getElementById("email");
// let street = document.getElementById("street");
// let city = document.getElementById("city");
// let state = document.getElementById("state");
// let notrepeat = document.getElementById("firstTime");
// let repeat = document.getElementById("notFirstTime");
// let pickup = document.getElementById("pickup");
// form.addEventListener('submit', function(event){
//     event.preventDefault();
//     console.log(cname.value);
//     console.log(email.value);
//     console.log(street.value);
//     console.log(city.value);
//     console.log(state.value);
//     // console.log.prop(firstTime.value);
//     // console.log.prop(notFirstTime.value);    
//     console.log(pickup.value);
//     alert("Thank you. The form information has been received");
// });

//jQuery functionality:
$('form').submit(function(event) {
    if ($('#name').val()  == "", $('#email').val()  == "", $('#street').val()  == "", $('#city').val() == "", $('#pickup').val() == "") {
        alert("Please fill out all form fields.")
      }
      else { 
        event.preventDefault(); 
        alert("Your information was submitted");   
        console.log("Name: " + $('#name').val());
        console.log("Email: " + $('#email').val());
        console.log("Street: " + $('#street').val());
        console.log("City: " + $('#city').val());
        console.log("State: " + $('#state').val());
        console.log("First time? " + $('#firstTime').val());
        console.log("Repeat customer? " + $('#notFirstTime').val());
        console.log("Pickup location: " + $('#pickup').val());
      } 
});
