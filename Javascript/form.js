let formElement = document.querySelector('form');


formElement.addEventListener('submit', function(e) {
e.preventDefault();
const inputValue = formElement.elements[0].value;
const inputValue2 = formElement.elements[1].value;
const inputValue3 = formElement.elements[2].value;

const dataToSubmit = {
    firstName: inputValue,
    lastName: inputValue2,
    email: inputValue3,
}

    alert('Thank you. The form information has been received');

    console.log(dataToSubmit);
})
