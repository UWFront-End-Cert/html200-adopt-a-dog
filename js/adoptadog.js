function dogInfo(name, breed, fee) {
    alert(name + ' is a ' + breed + ' and costs $' + fee + ' to adopt!');
    }

    let feeTotal = 0;

    function adoptionTotal(fee) {
      feeTotal = fee + feeTotal;
      alert('Total adoption fees: ' + '$' + feeTotal);
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
  //On Click event
  //form handler submission
  //dynamic blog
  //cart running total