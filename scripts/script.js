let total = 0;
let adoptionFee = 123.45; 
//Since both onclicks use this, I figure I just make a separate variable for it. Later on if needed I can implement unique prices for specific dog listings.

function dogPictureInfo(name, breed, fee) {
  alert(`Name: ${name}\nBreed: ${breed}\nAdoption Fees: $${fee}`);
}

function adoptionTotal(fee) {
  total+=fee;
  alert(`Total Adoption Fee: $${total.toFixed(2)}`);

  /* Wanted to add the names to an array so I can check if I should
     add to the total value, or subtract from the total value when the array contains the name, but I am 
     not sure how to get the alt attribute from the img element within a specific 'doggie-cel' parent element */
}
