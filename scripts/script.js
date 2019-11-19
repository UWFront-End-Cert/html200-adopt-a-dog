function dogInfo(name, breed, cost) {
  alert('About this dog:' + '\n' + name + '\n' + breed + '\n' + cost);
}

$('.dog-box').hover(function(e) {
  $('img', this).toggleClass('dog-box-effect');
  $( this ).toggleClass('dog-box-border');
});

let total = 0;

function adoptFees(x) {
  total += x;
  $('#total').text('$ ' + Number(total));
}
