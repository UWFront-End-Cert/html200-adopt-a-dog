/* Form */

function submitAlert() {
    alert('Thank you. The form information has been received');
};

function getVal() {
    let data = [];

    const name = document.getElementById('name');
    const email = document.getElementById('email');
    const address = document.getElementById('address');
    const city = document.getElementById('city');
    const state = document.getElementById('state');
    const zip = document.getElementById('zip');
    const firstTimeAdopter = document.get;
    const notFirstTime = document.getElementById('no');
    const pickUpLocation = document.getElementById('pu-location');

    data.unshift('Name: ' + name.value);
    data.push(' Email: ' + email.value);
    data.push(' Address: ' + address.value);
    data.push(' City: ' + city.value);
    data.push(' State: ' + state.value);
    data.push(' Zip: ' + zip.value);
    data.push('First-time Adopter: ' + firstTimeAdopter.value);
    data.push('First-time Adopter: ' + notFirstTime.value);
    data.push('Pickup Location: ' + pickUpLocation.value);

    let values = data.toString();
    console.log(values);
};