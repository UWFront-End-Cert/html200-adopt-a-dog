function showInfo(name, breed, cost) {
  alert(name + ', ' + breed + ', '+ 'is cost '+ cost);
}

let total = 0;

function addTotal(x) {
  total += x;
  alert('Added to cart!');
  $("#totalCost").text('$' + Number(total));
}



$('.dog-profiles img').hover(function() {
  $(this).toggleClass('dog-profiles-shadow');
});
