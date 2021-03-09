function formSubmitButton(event) {
    event.preventDefault();
    alert('Thank you. The form information has been received.');
}
function formDataProvider(event) {
    const nameData = document.getElementById('full-name').value;
    console.log('Your name is ' + nameData + '.');
    const emailAddress = document.getElementById('email').value;
    console.log('Your email address is ' + emailAddress + '.');
    const physicalAddress = document.getElementById('address').value;
    console.log('Your address is ' + physicalAddress);
    const cityLocation = document.getElementById('city').value;
    console.log('Your city is ' + cityLocation + '.');
    const stateLocation = document.getElementById('state').value;
    console.log('Your state is ' + stateLocation + '.');
    const zipCodeNumber = document.getElementById('zip').value;
    console.log('Your zipcode is ' + zipCodeNumber + '.');
    if (document.getElementById('adoption-option').checked) {
    console.log('This is your first time adopting.')
    }
    else if (document.getElementById('adoption-option2').value === true){
    console.log('This is not your first time adopting.')
    }
    else {
    console.log('You did not select an option for first time adopting or not.')
    }
    const storeNumber = document.getElementById('store').value;
    console.log('You will pick up at ' + storeNumber + '.' );


}