form.addEventListener('submit', function(event)  {
  event.preventDefault();
  /*let content = document.getElementById('form');*/
  let text = document.getElementById('name').value;
  let text2 = document.getElementById('email').value;
  let text3 = document.getElementById('street-add').value;
  let text4 = document.getElementById('city').value;
  let text5 = document.getElementById('zip').value;
  let select = document.getElementById('region');
  let state = select.options[select.selectedIndex].value;
  let selectCity = document.getElementById('location');
  let location = selectCity.options[selectCity.selectedIndex].value;
  let firstTime = document.getElementsByName("first-time-adopter");
  let adopter = "";
    for(i = 0; i < firstTime.length; i++) {
        if(firstTime[i].checked) {
          adopter = firstTime[i].value;
          //document.getElementById("")      = " "+firstTime[i].value;
        }
    }

  console.log('name:' + text + ' email: ' + text2 + ' Street address: ' + text3  + ' City: ' + text4  + ' Zip Code: ' +  text5 + ' State: ' + state +' Pickup Location: ' + location + ' First Time Adopter? ' + adopter);
  alert('Thank you. The form information has been received.');

});
