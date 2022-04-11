/* Lesson 4 Assignment 2 */
const dogName = ["Murphy", "Poppy", "Jack", "Duffy", "Lucas", "Jake", "Angus", "Violet", "Piper", "Maximus", "Luna", "Stella"];
//console.log(dogName);

const breed = ["Bulldog", "Bichon Frise", "Beagle", "Terrier Mix", "Lab Mix", "Labrador Retriever", "Boxer", "Chocolate Lab", "Golden Retriever", "Irish Terrier", "Yellow Lab", "Chihuahua"];
//console.log(breed);

const fee = [123.45, 123.45, 123.45, 123.45, 123.45, 123.45, 123.45, 123.45, 123.45, 123.45, 123.45, 123.45];
//console.log(fee);

let dogProfile = 0;
let dogProfileFunction = dogBark();

function dogBark(dogName = "Murphy", breed = "Bulldog", fee = "123.45") {
  dogProfile = `Dog profile: ${dogName}, Breed: ${breed}, Adoption fee: $${fee}`;
}
alert(dogProfile);
console.log(dogProfile);

/*
let result = 0;

function murphyInfo() {
  const x = "Murphy"
  const y = "Bulldog"
  const j = "$123.45"

  result = "Dogs name: " + x + ",  " +
           "Breed: " + y + ",  " +
           "Adoption fee: " + j;

  alert(result);
  console.log(result);
}

function poppyInfo() {
  const x = "Poppy"
  const y = "Bichon Frise"
  const j = "$123.45"

  result = "Dogs name: " + x + ",  " +
           "Breed: " + y + ",  " +
           "Adoption fee: " + j;

  alert(result);
  console.log(result);
}

function jackInfo() {
  const x = "Jack"
  const y = "Beagle"
  const j = "$123.45"

  result = "Dogs name: " + x + ",  " +
           "Breed: " + y + ",  " +
           "Adoption fee: " + j;

  alert(result);
  console.log(result);
}

function duffyInfo() {
  const x = "Duffy"
  const y = "Terrier Mix"
  const j = "$123.45"

  result = "Dogs name: " + x + ",  " +
           "Breed: " + y + ",  " +
           "Adoption fee: " + j;

  alert(result);
  console.log(result);
}

function lucasInfo() {
  const x = "Lucas"
  const y = "Lab Mix"
  const j = "$123.45"

  result = "Dogs name: " + x + ",  " +
           "Breed: " + y + ",  " +
           "Adoption fee: " + j;

  alert(result);
  console.log(result);
}

function jakeInfo() {
  const x = "Jake"
  const y = "Labrador Retriever"
  const j = "$123.45"

  result = "Dogs name: " + x + ",  " +
           "Breed: " + y + ",  " +
           "Adoption fee: " + j;

  alert(result);
  console.log(result);
}

function angusInfo() {
  const x = "Angus"
  const y = "Boxer"
  const j = "$123.45"

  result = "Dogs name: " + x + ",  " +
           "Breed: " + y + ",  " +
           "Adoption fee: " + j;

  alert(result);
  console.log(result);
}

function violetInfo() {
  const x = "Violet"
  const y = "Chocolate Lab"
  const j = "$123.45"

  result = "Dogs name: " + x + ",  " +
           "Breed: " + y + ",  " +
           "Adoption fee: " + j;

  alert(result);
  console.log(result);
}

function piperInfo() {
  const x = "Piper"
  const y = "Golden Retriever"
  const j = "$123.45"

  result = "Dogs name: " + x + ",  " +
           "Breed: " + y + ",  " +
           "Adoption fee: " + j;

  alert(result);
  console.log(result);
}

function maximusInfo() {
  const x = "Maximus"
  const y = "Irish Terrier"
  const j = "$123.45"

  result = "Dogs name: " + x + ",  " +
           "Breed: " + y + ",  " +
           "Adoption fee: " + j;

  alert(result);
  console.log(result);
}

function lunaInfo() {
  const x = "Luna"
  const y = "Yellow Lab"
  const j = "$123.45"

  result = "Dogs name: " + x + ",  " +
           "Breed: " + y + ",  " +
           "Adoption fee: " + j;

  alert(result);
  console.log(result);
}

function stellaInfo() {
  const x = "Stella"
  const y = "Chihuahua"
  const j = "$123.45"

  result = "Dogs name: " + x + ",  " +
           "Breed: " + y + ",  " +
           "Adoption fee: " + j;

  alert(result);
  console.log(result);
}
*/


/* Click Handlers on each dog's button that will add to the total. */
// Adopt button
const aFee = 123.45;
const desc = "Adoption fee is: $"
let total = desc + aFee;
let result = 0;
let myFunction = btnAdder();


function btnAdder() {
  result = total;

}
alert(result);
  console.log(result);
