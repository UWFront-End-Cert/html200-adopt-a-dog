const el = document.getElementById("contact-button")

el.addEventListener("click", function (event) {
    event.preventDefault();

    const result = 'Thank you. The form information has been received.'
    alert(result);

    const formdata = document.getElementById('orderForm').elements;

    // console.log(formdata)

    for (let i = 0; i < formdata.length - 1; i++) {

        const id = document.getElementById('orderForm').elements[i].id;
        const value = document.getElementById('orderForm').elements[i].value;
        const checked = document.getElementById('orderForm').elements[i].checked;
        const submitdata = (id + ": " + value);;
        const selection = ("first time adopter?: " + value)


        // console.log(id);
        // console.log(value);
        // console.log(checked);

        if (id === 'result' && checked === true) {
            console.log(selection);
        } else if (id === 'result' && checked === false) {
          function log(message) {
            if (debug) { 
              console.log(submitdata);
            }
          }
        } else if (id === 'fieldset') {
          function log(message) {
            if (debug) { 
              console.log(submitdata);
            }
          }
        } else if (id !== 'result', id !== 'fieldset') {
            console.log(submitdata);
        } 
    }


});