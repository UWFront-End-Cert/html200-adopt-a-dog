//Dog Info//

function doggoInfo(name, detail, price) {
  alert(`This is ${name}, they are the ${detail}. They cost $${price}.`);
}

//Shopping Cart//

let runningTotal = 0;

function cost(price) {
    let total = 0;
    total += price;
    runningTotal += price;
    $('.running-amount').text(`$${runningTotal.toFixed(2)}`);
    alert(runningTotal)
}
