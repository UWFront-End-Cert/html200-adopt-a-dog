// click on dog image, alerts name, breed, price
function dogInfo(name, breed, price) {
  alert(name + ',' + ' ' + breed + ',' + ' ' + price);
  }


// click on Adopt button, alerts total of Adopt button clicks
let total = 0;

function priceTotal(price) {
  total = price + total;
  alert('Total:' + ' ' + '$' + total);
}