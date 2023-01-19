let name = document.getElementsByTagName('h2')[0].innerHTML;
let price = document.getElementsByTagName('p')[1].innerHTML;
let breed = document.getElementsByTagName('p')[2].innerHTML;

function adoptInfo() {
  alert(name + ' \n' + price + ' \n' + breed);
}

function buy() {
  let cost = 123.45;
  let total = 0;
  let costTotal = total + cost;
  alert("Your total is $" + costTotal);
}
