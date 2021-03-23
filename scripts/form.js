

    const clientName = document.getElementById('name').value;
        console.log('Your full-name: ' + clientName);

    const clientEmail = document.getElementById('email').value;
        console.log('Your registered email: ' + clientEmail);

    const clientAddress = document.getElementById('address').value;
        console.log('Your residence address: ' + clientAddress);

    const clientCity = document.getElementById('city').value;
        console.log('Your city of residence: ' + clientCity);

    const stateClient = document.getElementById('state').value;
        console.log('Your residency state: ', stateClient);

    const zipCod = document.getElementById('zip').value;
        console.log('Your zipcode is: ' + zipCod);

    const adoptY = document.getElementById('yes');
    const adoptN = document.getElementById('no');

    if (adoptY.checked==true) {
        console.log("If you selected " + adoptY.value + " you have experience with dog adoption");
    } else if (adoptN.checked==true) {
        console.log("If you selected " + adoptN.value + " you have no experience with dog adoption");
    } else {
        console.log("Please select one of these options");
    }

    const storeLocation = document.getElementById('location').value;
        console.log('You have selected: ', storeLocation);


    function formSubmit(event) {
  $('form').submit(function(event) {
    event.preventDefault();
    alert('Thank you. The form information has been received.');


    const formData = document.getElementById('form').elements;

    for (let i =0; i < formData.length; i++) {
      const val = document.getElementById('form').elements.value
      console.log(val)
    }


    console.log(formData)

});

}
