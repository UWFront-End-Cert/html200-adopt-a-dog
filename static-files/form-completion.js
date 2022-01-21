
function get_form_info() {
    let name = document.getElementsByName("adopter-name")[0].value;
    console.log("Name of adopter: ", name);
    
    let email = document.getElementsByName("adopter-email")[0].value;
    console.log("Email of adopter: ", email);
    
    let street_address = document.getElementsByName("adopter-street-address")[0].value;
    console.log("Street Address of adopter: ", street_address);
    
    let city = document.getElementsByName("adopter-city")[0].value;
    console.log("City of adopter: ", city);
    
    let state = document.getElementsByName("adopter-state")[0].value;
    console.log("State of adopter: ", state);
    
    let zip = document.getElementsByName("adopter-zip")[0].value;
    console.log("ZIP of adopter: ", zip);
    
    // If the first value is checked, for "Yes"
    if (document.getElementsByName("first-time-adopter")[0].checked == true){
        console.log("First Time adopter? ", "Yes");
    } else {
        console.log("First Time adopter? ", "No");
    }
    
    let pickup = document.getElementsByName("pickup-location")[0].value;
    console.log("Street Address of adopter: ", pickup);
}

function acknowledge_submission() {
    alert("Thank you. The form information has been received.");

    get_form_info();
}