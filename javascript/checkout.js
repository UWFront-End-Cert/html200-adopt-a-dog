const form = document.getElementById('form');
const submitButton = document.createElement('button');
submitButton.setAttribute('type', 'submit');
submitButton.textContent='Submit';
form.appendChild(submitButton);

form.addEventListener('submit', function(run) {
   //Console log the values inside the form, you can build a string or build an object.


    var name = document.getElementById('name').value;
    var email = document.getElementById('email').value;
    var address = document.getElementById('address').value;
    var city = document.getElementById('city').value;
    var state = document.getElementById('zipcode').value;
    var location = document.getElementById('location').value;

    const UserInfo = {
        UserName: name,
        Useremail: email,
        Useraddress: address,
        Usercity: city,
        Userstate: state,
        PickUpLocation: location
    };

    console.log(UserInfo);


//On the form page, display an alert that says "Thank you. The form information has been received" when the form has been submitted.

    alert("Thank you. The form information has been received");
})




