
// function formDataProvider(event) {
//     const nameData = document.getElementById('full-name').value;
//     console.log('Your name is ' + nameData + '.');
//     const emailAddress = document.getElementById('email').value;
//     console.log('Your email address is ' + emailAddress + '.');
//     const physicalAddress = document.getElementById('address').value;
//     console.log('Your address is ' + physicalAddress);
//     const cityLocation = document.getElementById('city').value;
//     console.log('Your city is ' + cityLocation + '.');
//     const stateLocation = document.getElementById('state').value;
//     console.log('Your state is ' + stateLocation + '.');
//     const zipCodeNumber = document.getElementById('zip').value;
//     console.log('Your zipcode is ' + zipCodeNumber + '.');
//     if (document.getElementById('adoption-option').checked) {
//     console.log('This is your first time adopting.')
//     }
//     else if (document.getElementById('adoption-option2').value === true){
//     console.log('This is not your first time adopting.')
//     }
//     else {
//     console.log('You did not select an option for first time adopting or not.')
//     }
//     const storeNumber = document.getElementById('store').value;
//     console.log('You will pick up at ' + storeNumber + '.' );
// }
$('#primaryForm').submit(function(event){
    event.preventDefault();
    const fullName = $('#full-name').val();
    console.log('Your name is ' + fullName + '.' );
    const emailAddress2 = $('#email').val();
    console.log('Your email is ' + emailAddress2 + '.');
    const fullAddress = $('#address').val();
    console.log('Your address is ' + fullAddress + '.' )
    const citySpot = $('#city').val();
    console.log('Your city is ' + citySpot + '.');
    const stateSpot = $('#state').val();
    console.log('Your state is ' + stateSpot + '.');
    const zipCodeSpot = $('#zip').val();
    console.log('Your zipcode is ' + zipCodeSpot + '.');
    if ($('#adoption-option').is(':checked')){
        console.log('This is your first time adopting.');
    }
    else if ($('#adoption-option2').is(':checked')) {
        console.log('This is not your first time adopting.');
    }
    else {
        console.log('You did not select an adoption option.')
    }
    const storeNumberValue = $('#store').val();
    console.log('You will pick up at ' + storeNumberValue + '.');
});

function formSubmitButton(event) {
    alert('Thank you. The form information has been received.');
}