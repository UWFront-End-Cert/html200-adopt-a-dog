// button click
let total = 0;

// alert when the dog's pic is clicked on
function dogInfo(str) {
  alert(str);
}

// alert with total cost
// this will eventually need to persist across pages
function totalCost(cost) {
  total += cost;
  alert('Your total is: $' + total);
}

// effect the dogtile on hover
$('.dogtile').hover(
  function(e){
    $(this).css('border', '2px dashed blue');
  }, function(){
    $(this).css('border', '1px solid black');
  }
);

// when a button is clicked on, add the cost to the total and update the text at the top (class .cost)
$('button').click(function(e) {
  $('.cost').text('$' + total);
});
