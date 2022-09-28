let total = 0;

function dogCost(price) {
  total = total + Number(price);
  alert(total.toFixed(2));
  let p = total.toFixed(2);
  document.getElementById("cart-total").innerHTML = "$" + p;
}

function dogInfo (name, cost, breed) {
  alert(`Name: "${name}"  Cost: "${cost}"  Breed: "${breed}"`);
}
