/*Dog info alert*/
function dogInfo(name, breed, cost) {
  alert('More on this dog:\n' + name + '\n' + breed + '\n' + cost + ' to adopt');
}

/*Adopt button cost alert*/
let total = 0;

function totalCost(x) {
  let newTotal = total += x;
  alert('$' + newTotal);
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
