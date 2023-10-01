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
    const firstTimeAdopter = document.getElementById('yes', 'no');
    const pickUpLocation = document.getElementById('pu-location');

    data.unshift(name.value);
    data.push(email.value);
    data.push(address.value);
    data.push(city.value);
    data.push(state.value);
    data.push(zip.value);
    data.push(firstTimeAdopter.value);
    data.push(pickUpLocation.value);

    let values = data.toString();
    console.log(values);
};