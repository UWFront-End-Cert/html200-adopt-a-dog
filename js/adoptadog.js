function dogInfo(name, breed, fee) {
    alert(name + ' is a ' + breed + ' and costs $' + fee + ' to adopt!');
    }

let feeTotal = 0;

function adoptionTotal(fee) {
  feeTotal = fee + feeTotal;
  alert('Total adoption fees: ' + '$' + feeTotal);
  $('#cart-total').text('$' + feeTotal); //leveraged jQuery to get the cart total working.
  }

const obj = {}; //declaring empty object
function adoptionConfirmation(event) {
  alert('Thank you. The form information has been received');
  event.preventDefault();
  const formData = document.getElementById('checkoutForm');
  console.log(formData.elements);
  for (let i = 0; i < formData.elements.length - 1; i++) {
    // console.log(formData.elements[i].value);
    // console.log(formData.elements[i].id);
    const key = formData[i].id
    const value = formData[i].value
    obj[key] = value;   
  }
  console.log(obj);
}

function formDataProvider() {
      const nameData = document.getElementById('name').value;
      console.log('Name: ' + nameData + '.');
      const emailAddress = document.getElementById('email').value;
      console.log('email: ' + emailAddress + '.');
      const homeAddress = document.getElementById('address').value;
      console.log('address: ' + homeAddress);
      const cityLocation = document.getElementById('city').value;
      console.log('city: ' + cityLocation + '.');
      const stateLocation = document.getElementById('state').value;
      console.log('state: ' + stateLocation + '.');
      const zipCode = document.getElementById('zip').value;
      console.log('zipcode: ' + zipCode + '.');
      if (document.getElementById('no').checked) {
      console.log('first time adopter.');
      }
      if (document.getElementById('yes').checked) {
        console.log('Not first time adopter.');
      }
    }
// console.log($('img'))
$(function(){
  console.log('DOM is ready, javascript loading!')
  $('.ulnav').hide().delay(100).show('slow')
})

$('.box').mouseenter(function(){
  console.log('mouse has entered')
  $(this).css('box-shadow', '10px 10px 10px #888');
}).mouseleave(function(){
  console.log('mouse has left')
  $(this).css('box-shadow', 'none');
})

// $('img').hover(function() {
//   $(this).css("cursor", "pointer");
//   $(this).toggle({
//     effect: "scale",
//     percent: "90%"
//   },200);
// }, function() {
//    $(this).toggle({
//      effect: "scale",
//      percent: "80%"
//    },200);
// });

$('.dogcardbutton').mouseenter(function(){
  console.log('mouse has entered')
  $(this).fadeTo('slow', .75)
  $(this).text('Woof!')
}).mouseleave(function(){
  console.log('mouse has left')
  $(this).fadeTo('fast', 1)
  $(this).text('Adopt')
})

// $('article img').mouseenter(function(){
//   console.log('mouse has entered')
//   $(this).fadeTo('slow', .75)
// }).mouseleave(function(){
//   console.log('mouse has left')
//   $(this).fadeTo('fast', 1)
// })

$('.dogcardimg').hover(function(){
  $(this).addClass('imgzoom');
  }, function(){
  $(this).removeClass('imgzoom');
  });

  //things to do:
  //cart running total

// let total = 0;
// function adopt(price){
//   total = price + total;
//   console.log("Total:", total);

//   $("#cart-total").text(total.toFixed(2));
// }