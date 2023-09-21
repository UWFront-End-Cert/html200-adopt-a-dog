//pre-jQuery
// function CalculateTotal(x){
//   total = previousTotal + x;
//   previousTotal = total;
//   alert('New total: $'+total);
// }

//jQuery Total
let total =0;
function calculateTotal(x){
  total +=x;
  $('#total').text('$ ' + Number(total));
}

function dogInfo(x, y, z){
  let info = (x+": "+y+" breed, adoption fees: "+z);
  alert(info);
}

$('.dog-tile').hover(function() {
  $('img', this).toggleClass('dog-tile-opacity');
  $( this ).toggleClass('dog-tile-border');
});

// let total = 0;

// function adoptFees(x) {
//   total += x;
//   $('#total').text('$ ' + Number(total));
// }
