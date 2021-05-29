$(document).ready(function(){
  $('.dog-card img').mouseenter(function(){
    $(this).fadeTo('slow', .75)
  }).mouseleave(function(){
    $(this).fadeTo('fast', 1)
  }).click(function(){
    dogInfo(eval($(this).siblings('h2').text()))
  })
  $('.dog-card span').click(function(){
    addTotal(eval($(this).siblings('h2').text()))
  })
})

const Murphy = ["Murphy", "Hound", "123.45"]
const Poppy = ["Poppy", "Bichon", "123.46"]
const Jack = ["Jack", "Terrier", "123.47"]
const Duffy = ["Duffy", "Bull Terrier", "123.48"]
const Lucas = ["Lucas", "Shepherd", "123.49"]
const Jake = ["Jake", "Yellow Lab", "123.51"]
const Angus = ["Angus", "Bulldog", "123.52"]
const Violet = ["Violet", "Chocolate Lab", "123.53"]
const Piper = ["Piper", "Shepherd", "123.54"]
const Maximus = ["Maximus", "Terrier", "123.55"]
const Luna = ["Luna", "Lab", "123.45", "123.56"]
const Stella = ["Stella", "Chihuahua", "123.57"]

// For initially setting the cart total:

let Total = 0;

// For the dog info alerts:
function dogInfo(dog) {
alert("This is " + dog[0] + ", a " + dog[1] + " that can be yours for only $" + dog[2] + "!");
}

// For modifying and alerting the customer's current Total:
function addTotal(dog) {
  Total = Total + Number(dog[2]);
  document.getElementById('total').innerHTML = "$" + Total.toFixed(2);
  alert("Thank you!  Your total is $" + Total.toFixed(2) + ".");
}
