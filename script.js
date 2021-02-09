
// Creates an Array of all the dog's information
//I need to find what number(dog) I'm looking for

    // function infoRipper() {
    //   let dogArray = document.getElementsByClassName('dog-card-details');
    //   console.log(dogArray);
    //   console.log(dogArray[0].innerText);
    //   alert("itworks");
    // }

//inforipper is pulling the wrong information. infoRipper is pulling the last one
//If only there was a way to pass it a parameter to check from? hmm

    // function infoRipper1() {
    //   let elem = document.getElementById('first-pup')
    //   console.log(elem);
    //   console.log(elem.innerText);
    //   alert("I should call Murphy");
    // }
    //
    // function infoRipper() {
    //   let elem = document.getElementById('second-pup')
    //   console.log(elem);
    //   console.log(elem.innerText);
    //   alert("I should Call Poppy");
    // }

function infoRipper(dogName) {
  let dogArray = document.getElementsByClassName('dog-card-details');

  for (let i = 0; i < dogArray.length; i++){
    let dogFinder = dogArray[i].firstElementChild.innerText.toLowerCase();

    // The [i] in the comparison was breaking the loop
    // if (dogName === dogFinder[i]) {
    //   alert(dogName + ' === ' + dogFinder)
    //   break;
    // } else {
    //   alert(dogName + ' != ' + dogFinder);
    //   break;
    // }

    if (dogName === dogFinder) {
      alert(dogArray[i].innerText);
    }
  }
}
