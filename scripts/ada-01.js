// Arrays by dog info type
let dogString;
let dogName = ['Murphy', 'Poppy', 'Jack', 'Duffy', 'Lucas', 'Jake', 'Angus', 'Violet', 'Piper', 'Maxiumus', 'Luna', 'Stella']
let dogBreed = ['hound', 'terrier', 'beagle', 'shepard', 'labrador', 'boxer', 'retriever', 'chihuahua']
let dogPrice = [100, 101, 102, 103, 104, 105, 106, 107, 108, 109, 110, 200]

function whichDog(n, b, p) {
  dogString = dogName[n] + ', ' + dogBreed[b]  + ', $' + dogPrice[p];
  //console.log(dogString);
  alert(dogString);
  //return dogString; <-- works w/o a return...? do i need this line?
  // Answer: we don't need function whichDog to return anything. It accepts the arguements and does something to them. We don't need the function to send anything in addition to what it's already doing.
}

// Cost Calculator
let total = 0;
// function costCalculator(x) {
//   total += x;
// }

//refactor running cart total in jQuery

// $('.add-to-cart').click(function (e) { //get button. set event listener to a function
//   function costCalculator(x) {
//   total += x;
// }
//   alert('Total Cost: $' + total);
// });

function costCalculator(x) {
  total += x;
  // alert('new total: $' + total);
}



//How to pass $amount to costCalculator from adopt html button?
$('.add-to-cart').click(function() {
  costCalculator(dogPrice[0]);
  console.log('total = ' + total);
});

//OPO
//get "add-to-cart button" element
//create event handler function for a function. (click, alert new total)
//~~~Can't put costCalculator in the event handler function??? (how to w/o function call costCalculator is not recognized in the HTML file??
