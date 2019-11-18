/*Dog info alert*/
function dogInfo(name, breed, cost) {
  alert('More on this dog:\n' + name + '\n' + breed + '\n' + cost + ' to adopt');
}

/*Adopt button cost alert and cart total*/
let total = 0;

function totalCost(x) {
  total += x;
  alert('$' + total);
  $("#cart_total").text('$' + Number(total));
}

/*Dog tile hover border on index and dogs pages*/
$('.box-home').hover(
  function() {
    $( this ).toggleClass('box-border');
}
);

$('.box').hover(
  function() {
    $( this ).toggleClass('box-border');
}
);

/*Cart total*/
