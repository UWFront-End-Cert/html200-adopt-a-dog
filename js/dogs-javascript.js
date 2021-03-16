// alert info about the dog when user clicks on the image based on onclick in HTML
function dogInfo(dog, breed, cost) {
  const result = 'This dog is named ' + dog + '.  ' + dog + ' is a ' + breed + ' and will cost $' + cost + '.';
  alert(result);
}

// calculate and alert the cummulative adoption costs and update the total cost in header when adopt button is clicked
let totalCost = 0;
function sumCost(cost) {
totalCost = parseFloat((cost + totalCost).toFixed(2)); 
alert('Total Adoption Fees: $' + totalCost.toFixed(2));

//Update total cost in header with cummulative amount 

$('.dog-button').click(function(){
  $('.total').text('$'+totalCost.toFixed(2));
});

// set total cost in header to 0 when Clear Selection button is clicked
$('.clear-dogs').click(function(){
  $('.total').text('$0.00');
});

$('.clear-more-dogs').click(function(){
  $('.total').text('$0.00');
});

}

// change the border on dog tiles to Green and background to light blue when user mouses over the article
$('article').on('mouseover', function (e) {
  $(this).removeClass('noshow');
  $(this).addClass('show');
})

// change the border on dog tiles to Gray and no background when user mouses off the article
$('article').on('mouseout', function (e) {
  $(this).removeClass('show');
  $(this).addClass('noshow');
})

// permanently change the border on dog tiles to Green, background to light green and button text to adopted when clicks on the adopt button
$('.dog-button').on('click', function (e) {
  $(this).parent().addClass('adopted');
  $(this).text('Adopted');
})

// refresh page to clear tile formatting and total Cost amts when Clear Selection button is clicked
$('.clear-dogs').click(function (e) {
  location.href = "./index.html";
  })

$('.clear-more-dogs').click(function (e) {
  location.href = "./dogs.html";
})

// //clear selected adoption change the border to gray and the dollar amount in the header to 0 when the user clicks on the clear selection button
// $('.clear-dogs').click(function (e) {
//   $('article').removeClass('adopted');
//   $('article').addClass('noshow');
//   $('.dog-button').text('Adopt');
// })

// $('.clear-more-dogs').click(function (e) {
//   $('article').removeClass('adopted');
//   $('article').addClass('noshow');
//   $('.dog-button').text('Adopt');
// })