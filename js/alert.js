
function submitAlert(){
  
    let nameValue = document.getElementById('Name').value;
    let emailValue = document.getElementById('email').value;
    let addressValue = document.getElementById('street').value;
    let cityValue = document.getElementById('city').value;
    let stateValue = document.getElementById('state').value;
    let zipValue = document.getElementById('zip').value;

    alert('Thank you.  Your information has been submitted.');
    event.preventDefault();
    console.log(nameValue + ", " + emailValue + ", " + addressValue + ", " + cityValue + ", " + stateValue + ", " + zipValue); 
  
  }


  