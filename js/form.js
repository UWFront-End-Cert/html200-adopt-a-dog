//  Form Values  //

function submitForm() {
  event.preventDefault();
  alert('Thank you! Your form has been submitted.');
  const formInfo = [];
  formInfo.push($('#name').val());
  formInfo.push($('#address').val());
  formInfo.push($('#city').val());
  formInfo.push($('#state').val());
  formInfo.push($('#zipcode').val());
  formInfo.push($('#pickup-location').val());
  formInfo.push($('#first-adopter:checked').val());

  console.log(formInfo);
}
