
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

  //Create an array with all dogs in the page
  let dogArray = document.getElementsByClassName('dog-card-details');
  console.log(dogArray);

  //Finds the dog name in the loop to compare
  // console.log(dogArray[0].firstElementChild.innerHTML.toLowerCase());


  //Loop through this array and identify the dogName

  for (let i = 0; i < dogArray.length; i++){
    let dogFinder = dogArray[i].firstElementChild.innerHTML.toLowerCase();
    console.log(dogFinder);

    if (dogName === dogFinder[i]) {
      alert('Found the dog' + dogName + ' ' + dogFinder)
    } else {
      alert(dogName + ' was compared to ' + dogFinder);
    }
  }
}
