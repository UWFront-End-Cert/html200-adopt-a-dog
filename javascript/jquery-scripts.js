// ~ASSIGNMENT 9 PLAN~
// implement jquery on all pages using CDN
// shift vanilla javascript link to html head
// search effect functions to make dog tiles fancier
// refactor form and console logging using jquery selectors
// create variable to store cart total
// add up cart total based on number of adopt button clicks

$(function(){
  //console.log('jquery-scripts.js has loaded')
  $('.tile').mouseenter(function() {
    console.log("mouse hovering over dog tile")
    $(this).css("box-shadow", "5px 5px 5px -3px #093C60, 0px 5px 10px #093C60, -5px 5px 5px -3px #093C60")
    $(this).find('h3').animate({'font-size': '160%'},'medium')
  }).mouseleave(function() {
    console.log("mouse has left")
    $(this).css("box-shadow", "5px 5px 5px -3px #E6E6E6, 0px 5px 10px #E6E6E6, -5px 5px 5px -3px #E6E6E6")
    $(this).find('h3').animate({'font-size': '120%'},'medium')
  })

  //refactor form submission
  function validateEmail(email) {
    const checkFormat = /^(([^<>()[\]\.,;:\s@\"]+(\.[^<>()[\]\.,;:\s@\"]+)*)|(\".+\"))@(([^<>()[\]\.,;:\s@\"]+\.)+[^<>()[\]\.,;:\s@\"]{2,})$/i;
    return checkFormat.test(email);
  }

  $('.submit').on("click",function(){
    event.preventDefault();

    let formValues = $('.form-entry')
    for (i = 0; i < formValues.length; i+=1) {
      if (formValues[i].type == 'radio') {
      //   //let radioCheck = $('input.radio-style');
      //   //console.log(radioCheck.length);
        let selection = $('input[name="first-time-adopter"]').filter(":checked").val();
        if (selection === undefined) {
          alert('Please indicate if this is your first time adopting.');
          console.log(`Loop broken because user did not complete ${formValues[i].name} field`);
          return;
        }
        else {
          let logOutput = `${formValues[i].name}: ${selection}`;
          console.log(logOutput);
        }
      }
      else {
        if (formValues[i].value == "" || formValues[i].value == "{blank}") {
          alert(`Please complete the ${formValues[i].name} field`);
          console.log(`Loop broken because user did not complete ${formValues[i].name} field`);
          return;
        }
        else {
          if (formValues[i].type == 'email') {
            if (validateEmail(formValues[i].value) == true) {
              console.log('**User entered a valid email address**');
            }
            else {
              alert('The email address you entered is invalid. Please enter again.');
              return;
            }
          }
          else {
            let logOutput = `${formValues[i].name}: ${formValues[i].value}`;
            console.log(logOutput);
          }
        }
      }
    }
    alert('Thank you. The form information has been received.');
    $('form')[0].reset();
  })
})
