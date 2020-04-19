// FORM SUBMISSION
// On the form page, display an alert that says "Thank you. 
// The form information has been received" when the form has been submitted.
// Console log the values inside the form, you can build a string or build an object.

//creates an empry array
let formData = [];

function validate() {

  //add EventListener to the form
  form.addEventListener('submit', (e) => {
    e.preventDefault();

    let formValues = {
      name: document.getElementById('name').value,
      email: document.getElementById('email').value,
      address: document.getElementById('address').value,
      city: document.getElementById('city').value,
      state: document.getElementById('state').value,
      zipcode: document.getElementById('zipcode').value,
      firstAdoptY: document.getElementById('yes').value,
      location: document.getElementById('location').value,
      cost: document.getElementById('total-cost').textContent
    }

    //add formValues to formData an array object
    formData.push(formValues);

    //clear the form after submission
    document.forms[0].reset();

    //alert user
    alert('Thank you. The form information has been received');

    //log formData
    console.log(formData);

    //log formData in JSON format;
    // console.log(JSON.stringify(formData));

  })

}