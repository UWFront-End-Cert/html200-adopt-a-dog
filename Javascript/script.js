function dogPhotoClick(dogName, dogBreed, adoptionFees) {

  alert(dogName + ' is a ' + dogBreed + '. Adoption cost is $' + adoptionFees + '.');

}

var total = 0;

function dogButtonClick() {

  total = total + 123.45;
}

document.addEventListener("click", function() {alert('Your total is $' + total); });

$(function(){
       let addItem = 0;
       $('.adopt').click(function adoptadog() {
           addItem += 123.45;
           let cart = addItem.toFixed(2);
           $('#grand').text(cart);
       })
   });
