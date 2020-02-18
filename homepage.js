let total = 0;

function addToCart () {
  total = 123.45 + total;
  //alert(total)
  $('#cost').text("$"+total);
}

function dogImage (dogName, dogBreed, dogCost) {
  alert (dogName + ", " + dogBreed + ", " + dogCost)
}
