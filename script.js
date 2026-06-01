function murphyInfo() {
let info = `Name: Murphy
Breed: N/A
Adoption Fee: $123.45`
alert(info)
}

function poppyInfo() {
let info = `Name: Poppy
Breed: N/A
Adoption Fee: $123.45`
alert(info)
}

function jackInfo() {
let info = `Name: Jack
Breed: N/A
Adoption Fee: $123.45`
alert(info)
}

function duffyInfo() {
let info = `Name: Duffy
Breed: N/A
Adoption Fee: $123.45`
alert(info)
}

function lucasInfo() {
let info = `Name: Lucas
Breed: N/A
Adoption Fee: $123.45`
alert(info)
}

function jakeInfo() {
let info = `Name: Jake
Breed: N/A
Adoption Fee: $123.45`
alert(info)
}

function angusInfo() {
let info = `Name: Angus
Breed: N/A
Adoption Fee: $123.45`
alert(info)
}

function violetInfo() {
let info = `Name: Violet
Breed: N/A
Adoption Fee: $123.45`
alert(info)
}

function piperInfo() {
let info = `Name: Piper
Breed: N/A
Adoption Fee: $123.45`
alert(info)
}

function maximusInfo() {
let info = `Name: Maximus
Breed: N/A
Adoption Fee: $123.45`
alert(info)
}

function lunaInfo() {
let info = `Name: Luna
Breed: N/A
Adoption Fee: $123.45`
alert(info)
}

function stellaInfo() {
let info = `Name: Stella
Breed: N/A
Adoption Fee: $123.45`
alert(info)
}


let cart = 0;
const dogPrice = 123.45;
const priceDisplay = document.getElementById("total");
const button = document.getElementById("adoptButton");

button.addEventListener("click", () => {
cart += dogPrice; 
priceDisplay.innerText = cart;
alert("Total: $" + cart);
});

function submitCheckoutAlert() {
    alert('Thank you. The form information has been received.');

    console.log('Form Answers');
    console.log('Name: ' + document.getElementById('name').value);
    console.log('Email: ' + document.getElementById('email').value);
    console.log('Street Address: ' + document.getElementById('street').value);
    console.log('City: ' + document.getElementById('city').value);
    console.log('Zip Code: ' + document.getElementById('zip').value);
    console.log('First Time Adopter?: ' + document.querySelector('input[name="first-time"]:checked').value);
    console.log('Pickup Location: ' + document.getElementById('pickup').value);
}

function submitContactAlert() {
    alert('Thank you. The form information has been received.');

    console.log('Form Answers');
    console.log('First Name: ' + document.getElementById('fname').value);
    console.log('Last Name: ' + document.getElementById('lname').value);
    console.log('Email: ' + document.getElementById('email').value);
    console.log('Phone Number: ' + document.getElementById('phone').value);
    console.log('Which Age Groups Of Dogs Are They Interested In?: ' + document.querySelectorAll('input[type="checkbox"]:checked'));
    console.log('Have They Adopted With Us Before?: ' + document.querySelector('input[name="first-time"]:checked').value);
    console.log('Comment or Message: ' + document.getElementById('message').value);
}