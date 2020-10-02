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
//   alert('Total Cost: $' + total);
// }

//refactor running cart total in jQuery

$('.add-to-cart button').click(function (e) { //get button. set event istener to a function
  function costCalculator(x) {
    total += x;
    alert('Total Cost: $' + total);
  }
})

//OPO
//get "add-to-cart button" element
//create event handler function for a function
// write function costCalculator inside previous function
//(how to write a function in a function in jQuery?)


//function call costCalculator is not recognized in the HTML file. 



//get dogPrice array ?? (this JS code should move to file: ada-01.js)
