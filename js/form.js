const el = document.getElementById("contact-button")

el.addEventListener("click", function (event) {
    event.preventDefault();
// Alert that the form has been submitted
    const result = 'Thank you. The form information has been received.'
    alert(result);

    // console log form input using vanilla javascript
    // const formdata = document.getElementById('orderForm').elements;

    // console.log(formdata)

    // for (let i = 0; i < formdata.length - 1; i++) {

    //     const id = document.getElementById('orderForm').elements[i].id;
    //     const value = document.getElementById('orderForm').elements[i].value;
    //     const checked = document.getElementById('orderForm').elements[i].checked;
    //     const submitdata = (id + ": " + value);;
    //     const selection = ("first time adopter?: " + value)


        // console.log(id);
        // console.log(value);
        // console.log(checked);

    //     if (id === 'resultY' && checked === true, id === 'resultN' && checked === true) {
    //         console.log(selection);
    //     } else if (id === 'resultY' && checked === false, id === 'resultN' && checked === false) {
    //       function log(message) {
    //         if (debug) { 
    //           console.log(submitdata);
    //         }
    //       }
    //     } else if (id === 'fieldset') {
    //       function log(message) {
    //         if (debug) { 
    //           console.log(submitdata);
    //         }
    //       }
    //     } else if (id !== 'resultY', id !== 'resultN',id !== 'fieldset') {
    //         console.log(submitdata);
    //     } 
    // }


});

// console log the form input using jQuery
$('button').on('click', function (event) {
    event.preventDefault();
    let values = $('form').serialize();
    console.log(values);
});