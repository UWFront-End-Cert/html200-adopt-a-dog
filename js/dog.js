//Dog Info//

function doggoInfo(name, detail, price) {
  alert(`This is ${name}, they are the ${detail}. They cost ${price}.`);
}

//Shopping Cart//

let runningTotal = 0;

function cost(price) {
    runningTotal += price;
    $('.cart-amount').text("$" + runningTotal);
    alert('Your new total is ' + runningTotal);
}

//Hover Effect//

$("div.doggo-grid ,div.dog-item").hover(
       function(){ $(this).addClass('hover-picture') },
       function(){ $(this).removeClass('hover-picture') }
)
