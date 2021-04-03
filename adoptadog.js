let dogName;
let dogBreed;
let adoptFee;

// dogProfile = function() {
//   alert('I am working');
// }
dogProfile = function(dogName,dogBreed,adoptFee) {
  // console.log(click);
  alert('Name: ' + dogName + ' Breed: ' + dogBreed + ' Adoption Fee: ' + adoptFee);
}

let adoptRunningTotal = 0;

let adoptFeeTotal = function(adoptFee) {

  adoptRunningTotal += adoptFee;
    alert(adoptRunningTotal);
    $('span').text('$' + adoptRunningTotal);
}
