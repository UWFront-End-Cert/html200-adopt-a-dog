/* Lesson 4 Assignment 2 */

/* Click Handlers that alert the dog's info. when clicking on the dog's photo. */
/* Images can have same click handler */
/* Different arguments are passed into them in the html for each dog ex. dogInfo('Murphy', 123.45) */
/* Then handle data in JS function with parameters for ea. argument */
//addEventListener

const dogName = ["Murphy", "Poppy", "Jack", "Duffy", "Lucas", "Jake", "Angus", "Violet", "Piper", "Maximus", "Luna", "Stella"];

const breed = ["Bulldog", "Bichon Frise", "Beagle", "Terrier Mix", "Lab Mix", "Labrador Retriever", "Boxer", "Chocolate Lab", "Golden Retriever", "Irish Terrier", "Yellow Lab", "Chihuahua"];

const fee = [123.45, 123.45, 123.45, 123.45, 123.45, 123.45, 123.45, 123.45, 123.45, 123.45, 123.45, 123.45];

let arr = [["Murphy"], ["Bulldog"], [123.45]];

for (let i = 0; i < arr.length; i++) {
  for (let j = 0; j < arr[i].length; j++) {
    for (let k = 0; k < arr[j].length; k++)
    console.log(arr[i][j][k])
  }
}


// Click handler (HTML element is img, click handler is onclick="dogInfo(result)")

function dogInfo() {
  let dogs = ["dogName", "breed", "fee"];
}
console.log(result);
