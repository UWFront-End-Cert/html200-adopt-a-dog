// Arrays by dog info type
let dogString;
let dogName = ['Murphy', 'Poppy', 'Jack', 'Duffy', 'Lucas', 'Jake', 'Angus', 'Violet', 'Piper', 'Maxiumus', 'Luna', 'Stella']
let dogBreed = ['hound', 'terrier', 'beagle', 'shepard', 'labrador', 'boxer', 'retriever', 'chihuahua']
let dogPrice = [100, 101, 102, 103, 104, 105, 106, 107, 108, 109, 110, 200]

function whichDog(n, b, p) {
  let dogString = dogName[n] + ', ' + dogBreed[b]  + ', $' + dogPrice[p];
  //console.log(dogString);
  alert(dogString);
  //return dogString; <-- works w/o a return...? do i need this line?
}

// Cost Calculator
let total = 0;

function costCalculator(x) {
  total += x;
  //return total; return not necessary. code stops at return. ok to have a function w/o a return?
  alert('Total Cost: $' + total);
}
