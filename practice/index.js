if (typeof window !== 'undefined') {
  console.log('You are on the browser')
} else {
  console.log('You are on the server')
}

let result = 0;

function dogInfo(name, breed, fee) {
  result = "Dogs name: " + name + ",  " +
           "Breed: " + breed + ",  " +
           "Adoption fee: " + fee;
}
dogInfo("Murphy", "Bulldog", "$123.45");
alert(result);
console.log(result);

/*
//freeCodeCamp tutorial
const title = document.querySelector(".title");
const btn = document.querySelector("button");

  btn.addEventListener("click", changeColor)
    function changeColor() {
      title.style.color = "blue";
    }

function btnAdder() {
  const fee = 123.45;
  const desc = "Adoption fee is: $"
  let total = desc + fee;

  alert(total);
}
*/
const element = document.getElementById("myBtn");
element.addEventListener("click", myFunction);

function myFunction() {
  document.getElementById("demo").window.alert()= "Hello World";
}

//Create click handlers on each dogs's button that will add to the total.
//Alert the total.


/* HTML upper shopping cart
<div class="cart">
  <span class="b-cart">
    <img src="images/cart-icon.svg" alt="Image shopping cart." width=50%>
  </span><span class="b-cart">$1234.56</span>
  <span class="c-cart">
    <button class="cart" type="button" Name="checkout">Checkout</button>
  </span>
</div>
*/
