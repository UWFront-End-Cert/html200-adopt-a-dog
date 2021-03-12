let dogName;
let breed;
let dogFee;

dogInfo = function(dogName, breed, dogFee) {
  alert(dogName + '' + breed + 'adoption fee is $' + dogFee);
}


let adoptCart = 0;

const feeTotal = function(dogFee) {

  adoptCart += dogFee;
    alert(adoptCart);
 }
