//Dog Info//

function doggoInfo(name, detail, price) {
  alert(`This is ${name}, they are the ${detail}. They cost $${price}.`);
}

//Shopping Cart//

let runningTotal = 0;

function cost(price) {
    runningTotal += price;
    $('.cart-amount').text("$" + runningTotal);
    alert("Your new total is " + runningTotal);
}
