$(function(){
  console.log("DOM is ready, javascript loading")

  $('img').mouseenter(function(){
    console.log("mouse has entered")
    $(this).fadeTo('slow', .75)
  }).mouseleave(function(){
    console.log("mouse has left")
    $(this).fadeTo('fast', 1)
  })
})


// function carttot(price) {
  // total = price + '#total-amt';
  // $('#total-amt').text('$' + price);
// }



// function carttot(price) {
//     totalCostArray.push (price);
//
//     let summer = (cost, totalCost) => cost + totalCost;
//     totalCostArray.push(0);
//     let total = (totalCostArray.reduce(summer));
//     // alert('Your total cost is $' + total);
//     $('#checkout-value').html('$' + total);
// }

// <h2 id="total-amt" onload="ckttot()">$0.00</h2>
//
// <a href="#link" onclick="carttot(price = 135)" class="adopt-link">Adopt</a>
// // $(function(){
// //   console.log("DOM is still working")
// //
// //   $('carttot(price)').click(function(e) {
// //
// //   })
// //
// // })
//
// function carttot(price) {
//   total = price + total;
//   $('#total-amt').text('$' + price)
// }
