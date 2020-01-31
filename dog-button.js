

let total = 0
function dogFees(name, breed, fee) {
   total = total + fee
   $('#total').text(total);
   let result = "Dog name: " + name + " Breed: " + breed + " Fees: " + fee
   alert(result);
}

/*hover effect on dog tiles*/
$('.col-1').hover(function(e){
  $(this).addClass('tile-border');
})
$('.col-1').mouseleave(function(e){
  $(this).toggleClass('tile-border');
})





let footer = document.querySelector('footer');
document.body.appendChild(footer);
