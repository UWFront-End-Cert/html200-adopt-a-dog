function totalCost(x, y) {
  let numberOne = 123.45;
  let numberTwo = 1234.56;
  let result = 0;
  result = numberOne + numberTwo;
  alert(result);
}

function showDogInfo(x,y,z) {
  let dogName = x;
  let dogBreed = y;
  let adoptionFee = Number(z);
  let result = 0;
  result = dogName + " " + dogBreed + " " + adoptionFee;
  alert(result);
}

function clickAlert() {
  alert("Thank you. The form information has been received.")
}

const section = document.createElement('section');
document.body.appendChild(section);

let i = 7;
for(let i = 0; i < 7; i++) {
  const newDiv = document.createElement('div');
  section.appendChild(newDiv);
}

let arr = ['gridContainer', 'grid-item-4', 'grid-item-5', 'grid-item-6', 'grid-item-7',
'grid-item-8', 'grid-item-9']

for(let i = 0; i < arr.length; i++) {
  
}
