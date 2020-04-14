
let totalPrice = 0;
function dogInfo(name, breed, price) {
  let message = name + ' ,' +  breed + ', '+  price;
  alert(message);
}

function addToCart(price) {
  totalPrice += price;
alert(`Total Amount is:  ${totalPrice}` );
}
