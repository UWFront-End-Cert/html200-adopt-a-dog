
let total = 0

function clickPhoto(name, breed, cost) {
  let result = "Dog name: " + name + " Breed: " + breed + " Fees: " + cost
  alert(result);
}

function dogFees(fee) {
   total = total + fee
alert('Total cost $' + total);
}
/*insert title*/
document.getElementById("totale").innerHTML = "Traveling with Your Dog";


const postTitle = document.createElement('h3');
postTitle.textContent = 'Traveling with your Pupper';
const container = document.getElementsByClassName('blog')
document.body.insertBefore(postTitle, container);
