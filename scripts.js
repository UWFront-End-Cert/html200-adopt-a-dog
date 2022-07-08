
function dogDeets(dogName, dogBreed, dogPrice) {
  alert(dogName + " - " + dogBreed + " - " + dogPrice)
}


let dogPrice = 123.45
let clickCount = document.querySelector(".add-to-cart");
let addToCartClicks = 0;

function totalCost() {
  addToCartClicks += 1;
  alert(dogPrice * addToCartClicks)
}



  /*

  let dogName = "Jake";
  let dogBreed = "Yellow Lab";
  let adoptionFee = "$123.45";
  let result = 0;

  alert(dogName + "  " + dogBreed + "  " + adoptionFee)


  <article class="dog-profile">
    <img src="images/jake-card.jpg" onclick="dogDeets()" alt="The head and shoulders of a yellow lab in three quarter view, wearing a brown collar,
    with a blurred beach background" >
    <div>
      <h3>Jake</h3>
      <h4>Cost to Adopt: $123.45</h4>
      <p>
      Corrum volorit iandae nimaxim cum restia volor reicid ut et etur sunt arum
      rendae pla endis re ea erum, qui doluptae
      </p>
    </div>

  function dogDeets() {
    let dogInfo = document.getElementsByClassName("dog-profile").innerText;

    console.log(dogInfo);
    }
    function numberSquarer() {
      let input = prompt('Enter a number');
      let exponent = 2;
      let result = 0;

      result = Number(input) ** 2;

      alert(result);
    }

    function numberMultiplier() {
      let x = prompt('Enter the first number');
      let y = prompt('Enter the second number');

      let result = 0;

      result = x*y;

      alert(result);
    }


    */
