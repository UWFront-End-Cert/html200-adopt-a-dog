const form = document.getElementById('form');

form.addEventListener('submit', function(event){  
    event.preventDefault();

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

    const zipCod = document.getElementById('zipcode').value;
        console.log('Your zipcode is: ' + zipCod);

    const adoptY = document.getElementById('yes');
    const adoptN = document.getElementById('no');

    if (adoptY.checked==true) {
        console.log("If you selected " + adoptY.value + " confirms that you have experience with dog adoption");
    } else if (adoptN.checked==true) {
        console.log("If you selected " + adoptN.value + " confirms that you have no experience with dog adoption");
    } else {
        console.log("Please you need to select one of these options");
    }

    const storeLocation = document.getElementById('location').value;
        console.log('You have selected your nearest store: ', storeLocation);

    document.getElementById('submit');
        console.log("Thank you. The form information has been received");
        alert("Thank you. The form information has been received");
});
