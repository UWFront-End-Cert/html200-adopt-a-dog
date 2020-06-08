function getForm(){
  alert("form submitted");
}


// const btn = document.getElementById('btn');
// btn.addEventListener('click', getForm);



const form =
{
  name:'',
  email:'',
  street:'',
  city:'',
  state:'',
  zip:'',
  firsttimeadopter:'',
  pickup:''
}





function getInfo() {


  form.name = document.getElementById('name').value;
  form.email = document.getElementById('email').value;
  form.street = document.getElementById('street').value;
  form.city = document.getElementById('city').value;
  form.state = document.getElementById('state-select').value;
  form.zip = document.getElementById('zip').value;
  form.pickup = document.getElementById('pickup').value;

  const radio = document.getElementsByName('firsttimeadopter');
  for(let i=0; i<radio.length; i++ ) {
    if(radio[i].checked) {
      form.firsttimeadopter = radio[i].value;
      break;
    }
  }
  // const radioNo = document.getElementById('radio2').value;
  // const radioYes = document.getElementById('radio1').value;
 console.log(form);
}
// jquery for form page
//console log form values
let $form = $('.form');




// let $form = $('.form');
let $name = $('.name');
let $email = $('.email');
let $street = $('.street');
let $city = $('.cities');
let $state = $('.state');
let $zipcode = $('.zipcode');
let $pickup = $('.pickup');





 $form.on('submit', function(e) {
   console.log($name.val());
   e.preventDefault()



 });
