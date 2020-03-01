/* Dog Info */
function showInfo(name,breed,fee) {
  let result = (name + ' is a ' + breed + ' and can be adopted for ' + fee + '.');
  alert(result);
}


/* Totals with Javascript */
/*
let total = 0;
function addTotal(fee) {
  let result = ('Your total is $' + (total += fee));
  alert(result);
}
*/


/* Totals with jQuery */
let total = 0;

$('.addTotal').
  click(function() {
  total += 150;
  $('#totalFee').text('$' + total);
  alert('Added to cart');
});



/* Checkout Form — JavaScript */
/*
function submitInfo() {
    let entries1 = document.getElementsByTagName('input');
    let entries2 = document.getElementsByTagName('select');

    alert('Thank you! The form information has been received.');

    let a;
    for (a = 0; a < entries1.length; a++) {
    console.log(entries1[a].value);
    }

    let b;
    for (b = 0; b < entries2.length; b++) {
    console.log(entries2[b].value);
    }
  }
  */


/* Checkout Form — jQuery */
$('#submitForm').
  click(function() {
  alert('Thank you! The form information has been received.');
  console.log($('form').serialize());
});


/* Adding jQuery to Dog Tiles */
$('.dog-profiles img').
  mouseenter(function() {
  $(this).animate({opacity: '0.25'}, 'linear');
});

$('.dog-profiles img').
  mouseleave(function() {
  $(this).animate({opacity: '1'}, 'linear');
})

/* Source for jQuery selectors:
https://www.w3schools.com/jquery/trysel.asp */
