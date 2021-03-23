
function info(name, Dogs, price) {
  alert(name + ',' + ' ' + Dogs + ',' + ' ' + price);
  }

let total = 0;

function dogprice(price) {
  total = price + total;
  alert('Total:' + ' ' + '$' + total);
}
const obj = {}; //declaring empty object
function adoptionConfirmation(event) {
  alert('Thank you. The form information has been received');
  event.preventDefault();
  const formData = document.getElementById('checkoutForm');
  console.log(formData.elements);
  for (let i = 0; i < formData.elements.length - 1; i++) {
    // console.log(formData.elements[i].value);
    // console.log(formData.elements[i].id);
    const key = formData[i].id
    const value = formData[i].value
    obj[key] = value;
  }
  console.log(obj);
}
