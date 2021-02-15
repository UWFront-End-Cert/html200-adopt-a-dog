//console.log('it is totally working');

function dogInfo(name,breed,price) {
  //info = name + breed + price;
  info = `You can adopt ${name}, a ${breed}, for ${price}`;
  //info = 'Hi there!';
  alert(info);
}

let adoptTotal = 0;
let dogNum = 0

//a simple way of doing it
function total() {
  adoptTotal += 123.45;
  dogNum += 1;
  result = `With ${dogNum} dog(s) in your cart, your total is $${adoptTotal}`;
  alert(result);
}

//practicing an elaborate way of summarizing cart contents
let cartContents = [];
let adoptionTotal = 0;

function cartSummary(name) {
  cartContents.push(name); //need to figure out a way to prevent user from clicking on same dog twice
  let cartList = cartContents.join(', ');
  adoptionTotal += 123.45;
  result = `With ${name} added to the cart, your total is $${Number(adoptionTotal).toFixed(2)}. In your cart: ${cartList}`;

  alert(result);
}
