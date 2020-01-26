

/*jquery form handler*/
$("form").submit(function(){
  let text = $("#name").val()
  let text2 = $("#email").val();
  let text3 = $("#street-add").val();
  let text4 = $("#city").val();
  let text5 = $("#zip").val();
  let select = $("input:radio[name=first-time]:checked").val();
  let state = $("#region").children("option:selected").val();
  let location = $("#location").children("option:selected").val();
  console.log('name:' + text + ' email: ' + text2 + ' Street address: ' + text3  + ' City: ' + text4  + ' Zip Code: ' +  text5 + 'first time: ' + select + ' state: ' + state + ' Pickup location: ' + location);
  alert("Your form has been submitted");
});

/*-Javascript form handler for Assignment 8*/

//form.addEventListener('submit', function(event)  {
  //event.preventDefault();
  /*let content = document.getElementById('form');*/
  //let text = document.getElementById('name').value;
  //let text2 = document.getElementById('email').value;
  //let text3 = document.getElementById('street-add').value;
  //let text4 = document.getElementById('city').value;
  //let text5 = document.getElementById('zip').value;
  //let select = document.getElementById('region');
  //let state = select.options[select.selectedIndex].value;
  //let selectCity = document.getElementById('location');
  //let location = selectCity.options[selectCity.selectedIndex].value;
  //let firstTime = document.getElementsByName("first-time");
  //let adopter = "";
    //for(i = 0; i < firstTime.length; i++) {
        //if(firstTime[i].checked) {
          //adopter = firstTime[i].value;
          //document.getElementById("")      = " "+firstTime[i].value;
      //  }
    //}
  //console.log('name:' + text + ' email: ' + text2 + ' Street address: ' + text3  + ' City: ' + text4  + ' Zip Code: ' +  text5 + ' State: ' + state +' Pickup Location: ' + location + ' First Time Adopter? ' + adopter);
  //alert('Thank you. The form information has been received.');

//});
