
function info(name, breed, price) {
  alert(name + ',' + ' ' + breed + ',' + ' ' + price);
  }


let total = 0;

function carttot(price) {
  total = price + total;
  alert('Total:' + ' ' + '$' + total);
  $('#total-amt').text('$' + total);
}
