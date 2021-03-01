const names = ['Murphy','Poppy','Jack','Duffy','Lucas','Jake','Angus','Violet','Piper','Maximus','Luna','Stella'];
const breed = ['German Shepherd/Bull','Cockapoo','Beagle','American Pitbull Terrier','notaboxer','Labrador Retriever','Bullmastiff','Labrador','Golden Retriever','Border Terrier','Labrador Retriever','Chihuahau'];
const costToAdopt = ['123.45','123.45','123.45','123.45','123.45','123.45','123.45','123.45','123.45','123.45','123.45','123.45'];

function puppyCard(x) {
  alert(names[x] + ' is ready to meet you!\n\n Breed: '+ breed[x] + '\n\n Cost to Adopt  $' + costToAdopt[x] );
}

let clicks = 0;
function adopt() {
  clicks += 1;
    function addToCart() {
      let adoptionCost = 123.45;
      let cartTotal = 0;
      let runner = adoptionCost * clicks;
      return runner;
    }
    console.log(addToCart());
    alert('Your cart total is: '+(addToCart()));
    document.getElementById("cartUpdate").innerHTML = "$" + addToCart().toFixed(2)
    };
