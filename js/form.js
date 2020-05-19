function getForm(){
  alert("form submitted");
}


const btn = document.getElementById('btn');
btn.addEventListener('click', getForm);





const form =
{
  name:'',
  email: '',
  streetaddress:'',
  city:'',
  state:'',
  zipcode:0
}

function getInfo() {
  console.log(form.obj);
}
