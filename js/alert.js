    
   submitAlert = function($submitAlert) {
      let nameValue = $('#Name').val(); 
      let emailValue = $('#email').val();
      let addressValue = $('#street').val();
      let cityValue = $('#city').val();
      let stateValue = $('#state').val();
      let zipValue = $('#zip').val();

    alert('Thank you.  Your information has been submitted.');
    event.preventDefault();
    console.log(nameValue + ", " + emailValue + ", " + addressValue + ", " + cityValue + ", " + stateValue + ", " + zipValue); 
  
  }


 
 