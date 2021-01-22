// 
// Link JavaScript to your site.
// Create click handlers that alerts the dog’s information when clicking on the dog’s photo.
//     You will need to pass in the params in the click handler of the dog’s name, breed and adoption fees.
// Create click handlers on each dog’s button that will add to the total.
// Alert this total.


let dogName;
let dogBreed;
let dogAdoptFee;

dogInfo = function(dogName,dogBreed,dogAdoptFee) {
  alert(dogName + 'is a ' + dogBreed + 'with an adoption fee of $' + dogAdoptFee);
}


let dogAdoptRunningTotal = 0;

const feeTotal = function(dogAdoptFee) {

  dogAdoptRunningTotal += dogAdoptFee;
    alert(dogAdoptRunningTotal);
 }


// console.log(feeTotal(200.22));
// alert(feeTotal(200.22));
// alert(feeTotal(100.33));
// feeTotal(10.33);
// feeTotal(1000.33);
// feeTotal(109.3);

