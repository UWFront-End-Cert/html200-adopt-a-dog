function dogInfo(name, breed, cost) {
  alert('More on this dog:\n' + name + '\n' + breed + '\n' + cost + ' to adopt');
}

let total = 0;

function totalCost(x) {
  let newTotal = total += x;
  alert('$' + newTotal);
}

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
