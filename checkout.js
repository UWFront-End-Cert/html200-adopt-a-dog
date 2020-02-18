function checkOut() {
  var nameBox = document.getElementById('name').value;
  var emailBox = document.getElementById('email').value;
  var streetBox = document.getElementById('street').value;
  var cityBox = document.getElementById('city').value;
  var e = document.getElementById("ddlState");
  var strState = e.options[e.selectedIndex].text;
  var zipBox = document.getElementById("zip").value;
  var rate_value = '';
  if (document.getElementById('r1').checked) {
  rate_value = document.getElementById('r1').value;
}
  if (document.getElementById('r2').checked) {
    rate_value = document.getElementById('r2').value;
}

  var e = document.getElementById("ddlLocation");
  var strLocation = e.options[e.selectedIndex].text;



  alert('Thank you. The form information has been received');
  console.log(nameBox + ", " + emailBox + ", " + streetBox + ", " + cityBox + ", " + strState + ", " + zipBox + ", " + rate_value + ", " + strLocation);
}
