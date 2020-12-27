function summary() {
    const name = document.getElementById('name').value
    const email = document.getElementById('email-address').value
    const streetAddress = document.getElementById('street-address').value
    const city = document.getElementById('city').value
    const state = document.getElementById('state').value
    const zipcode = document.getElementById('zipcode').value
    const yes = document.getElementById('yes').checked
    const no = document.getElementById('no').checked
    const location = document.getElementById('location').value
    const firstTimeAdopter = yes
    const answers = {
        name, email, streetAddress, city, state, zipcode, location, firstTimeAdopter
    }

    console.log(answers)
    alert("Thank you. The form information has been received")
    return false
}

