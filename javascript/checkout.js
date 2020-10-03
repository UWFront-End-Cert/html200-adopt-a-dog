
const forminfo = (name + email + address + city + state + zip);

function checkOut() {

  let name = '';
    name = document.getElementById ('name').value;

  let email = '';
    email = document.getElementById ('email').value;

  let address = '';
    address = document.getElementById ('address').value;

  let city = '';
    city = document.getElementById ('city').value;

  let state = '';
     state = document.getElementById ('state').value;

  let zip = '';
      zip = document.getElementById ('zip').value;

  let radio = '';
     if (document.getElementById('yes').checked) {
     radio = document.getElementById('yes').value;
   }
     if (document.getElementById('no').checked) {
     radio = document.getElementById('no').value;
    }

  let location = '';
   location = document.getElementById('location').value;



  console.log (name + "|" + email + "|" + address + "|" + city + "|" + state + "|" + zip + "|" + radio + "|" + location);

  alert('Thank you. The form information has been received.');


  }
