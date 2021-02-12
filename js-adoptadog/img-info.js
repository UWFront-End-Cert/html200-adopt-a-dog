// html from index.html that has button click calls to the  js functions 
            //     <div class="item">
            //     <img src="images/murphy-card.jpg" onclick="dogInfo('Murphy ','Dog ',123.45)" alt="Descripion of featured dog.">
            //     <h2>Murphy</h2>
            //     <p><strong>Cost to Adopt: </strong>$123.45</p>
            //     <p>Kilsie eitislissi zposesko cha. Abjlkseee jlkt isani stylesheet lked eialse. Lipsseis jkj eiso spiroot, lkjlke kjkeise. Kilsie eitislissi zposesko cha.</p>    
            //     <p><a onclick="feeTotal(123.45)">Adopt</a></p>
            // </div>
            // <div class="item">
            //     <img src="images/poppy-card.jpg" onclick="dogInfo('Poppy ','Dog ',123.45)" alt="Descripion of featured dog.">
            //     <h2>Poppy</h2>
            //     <p><strong>Cost to Adopt: </strong>$123.45</p>
            //     <p>Kilsie eitislissi zposesko cha. Abjlkseee jlkt isani stylesheet lked eialse. Lipsseis jkj eiso spiroot, lkjlke kjkeise. Kilsie eitislissi zposesko cha.</p>    
            //     <p><a onclick="feeTotal(123.45)">Adopt</a></p>
            // </div>


// 
// Link JavaScript to your site.
// Create click handlers that alerts the dog’s information when clicking on the dog’s photo.
//     You will need to pass in the params in the click handler of the dog’s name, breed and adoption fees.
// Create click handlers on each dog’s button that will add to the total.
// Alert this total.


let dogName;
let dogBreed;
let dogAdoptFee;

dogInfo = function(dogName,dogBreed,dogAdoptFee) {
  alert(dogName + 'is a ' + dogBreed + 'with an adoption fee of $' + dogAdoptFee);
}


let dogAdoptRunningTotal = 0;

const feeTotal = function(dogAdoptFee) {

  dogAdoptRunningTotal += dogAdoptFee;
    alert(dogAdoptRunningTotal);
 }


// console.log(feeTotal(200.22));
// alert(feeTotal(200.22));
// alert(feeTotal(100.33));
// feeTotal(10.33);
// feeTotal(1000.33);
// feeTotal(109.3);

