
function submitAlert(){
    let nameValue = document.getElementById('Name')[0].value;
    let emailValue = document.getElementById('email').value;
    let addressValue = document.getElementById('street').value;
    let cityValue = document.getElementById('city').value;
    let stateValue = document.getElementById('state').value;
    let zipValue = document.getElementById('zip').value;
  
    console.log(nameValue + ", " + emailValue + ", " + addressValue + ", " + cityValue + ", " + stateValue + ", " + zipValue);
  
    alert('Thank you.  The form information has been received.');
  
  }