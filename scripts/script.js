function dogInfo(name, breed, cost) {
  alert('About this dog:' + '\n' + name + '\n' + breed + '\n' + cost);
}

let total = 0;

function adoptFees(x) {
  total += x;
  alert('Your total: $' + total);
}

$('.dog-box').hover(function(e) {
  $('img', this).toggleClass('dog-box-effect');
})
