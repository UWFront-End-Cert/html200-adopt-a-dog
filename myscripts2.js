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
    
}