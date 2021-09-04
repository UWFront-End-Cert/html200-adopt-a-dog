// math equation to add adoption fee to stored total
function submitAdopt() {
  alert("Thank you. The form information has been received.");

  let formName = document.querySelector('#form-name');
  let formEmail = document.querySelector('#form-email');
  let formAddress = document.querySelector('#form-address');
  let formCity = document.querySelector('#form-city');
  let formState = document.querySelector('#form-state');
  let formZip = document.querySelector('#form-zip');
  let formFirstTime = document.querySelector('#form-first-time');
  let formPickup = document.querySelector('#form-pickup');
  console.log(formName.value, formEmail.value, formAddress.value, formCity.value, formState.value, formZip.value, formFirstTime.value, formPickup.value);
}
