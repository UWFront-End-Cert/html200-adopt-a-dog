
/*Dog Info*/
function dogInfo(name, breed, price) {
  alert(`This is ${name}. They are a ${breed}. They cost ${price}.`);
}

/*Cart*/

let total = 0;

function totalCost(x) {
  total += x;
  alert('Your total is: ' + total);
  $("#header-price").text('$' + Number(total));
}

/*Hover*/

$('.hover').mouseover(function(){
    $(this).css('opacity','.2');

}).mouseout(function(){
    $(this).css('opacity','1');

});
