
let total = 0;
document.getElementById("total").innerHTML = "$"+total;

function add_dog(price) {
  total = total + price;
  document.getElementById("total").innerHTML = "$"+total;
  alert("Added to cart\nTotal: " + total);
}

function dog_pic(name, breed, fee) {
  alert("Name: " + name+ "\nBreed: " + breed + "\nFee: " +fee);
}
