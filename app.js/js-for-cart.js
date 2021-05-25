const form = document.querySelector('form');
//add an eventListener to form element
form.addEventListener('submit', (e) => {
    //prevent default form action from happening
    e.preventDefault();
    //build a string of all user inputs and log to console
    console.log(`Name: ${form.elements.name.value}, Email: ${form.elements.email.value}, 
    Address: ${form.elements.address.value}, City: ${form.elements.city.value}, State: ${form.elements.state.value},
    Zip: ${form.elements.zip.value}, First time Adopter?: ${form.elements.have_adopted_before.value}, Pickup: ${form.elements.pickup.value}`)
})

//validate email funciton
function validateEmail() {
    //regex to check against courtesy of grepper
    const emailRegex = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;

    if (email.value.trim().match(emailRegex)) {
        return true;
    } else {
        alert("Please enter a valid email address you punk.")
        return false;
    }
}
//validate all fields function
function validate() {
    const name = document.querySelector("[name='name']");
    const email = document.querySelector("[name='email']");
    const address = document.querySelector("[name='address']");
    const city = document.querySelector("[name='city']");
    const state = document.querySelector("[name='state']");
    const zip = document.querySelector("[name='zip']");
    const have_adopted_before = document.querySelector("[name='have_adopted_before']");
    const pickup = document.querySelector("[name='pickup']");
    const checkedRadio = document.querySelectorAll("[type='radio']");
    //create array from htmlcollection of radio buttons
    const radioArray = Array.from(checkedRadio);
    // let is checked be a boolean value
    let isChecked = radioArray.some(e => e.checked);
    //at least one radio button needs to be checked
    if (isChecked !== true) {
        //or else alert user and return false
        alert('Please tell us whether you have adopted before');
        return false;
    }
    //if any fields are empty, alert user
    if (name.value.trim() === "" || address.value.trim() === "" || city.value.trim() === "" || state.value.trim() === "" || zip.value.trim() === "" || have_adopted_before.value.trim() !== 'yes' || pickup.value.trim() === "") {
        alert("Please make sure all fields are valid.")
        return false;
    } else {
        alert("Thank you, your form has been submitted")
        return true;
    }

}




// function validateRadio() {
//     let checkedRadio = document.querySelectorAll("[type='radio']");
//     let radioArray = Array.from(checkedRadio);
//     let isChecked = radioArray.some(e => e.checked);
//     return isChecked === true ? console.log('true') : alert('Please select tell us whether you have adopted before');
// }


//closer but maybe want to add some css pointing to invalid input? also need to know
//more about how to execute form action after e.preventDefault???

//when you try to generate all the dog tiles dynamically from an array make sure all dogs are there own objects