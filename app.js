// click on dog image, alerts name, breed, price
function info(name, breed, price) {
  alert(name + ',' + ' ' + breed + ',' + ' ' + price);
  }


// click on Adopt button, alerts total of Adopt button clicks
let total = 0;

function carttot(price) {
  total = price + total;
  alert('Total:' + ' ' + '$' + total);
}
