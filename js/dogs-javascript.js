// alert info about the dog when user clicks on the image based on onclick in HTML
function dogInfo(dog, breed, cost) {
  const result = 'This dog is named ' + dog + '.  ' + dog + ' is a ' + breed + ' and will cost $' + cost + '.';
  alert(result);
}

// calculate and alert the cummulative adoption costs and update the total cost in header when adopt button is clicked
let totalCost = 0;
function sumCost(cost) {
totalCost = parseFloat((cost + totalCost).toFixed(2)); 
alert('Total Adoption Fees: $' + totalCost);

//Update total cost in header with cummulative amount 

$('.dog-button').click(function(){
  $('.total').text(totalCost);
});

// set total cost in header to 0 when Clear Selection button is clicked
$('.clear-dogs').click(function(){
  $('.total').text('$0.00');
  // $(totalCost).val(0);
});

$('.clear-more-dogs').click(function(){
  $('.total').text('$0.00');
  // $(totalCost).val(0);
});

}

// change the border on dog tiles to BLUE when user mouses over the article

$('article').on('mouseover', function (e) {
  $(this).removeClass('noshow');
  $(this).addClass('show');
})

$('article').on('mouseout', function (e) {
  $(this).removeClass('show');
  $(this).addClass('noshow');
})

$('.dog-button').on('click', function (e) {
  $(this).parent().addClass('adopted');
})

// //clear selected adoption change the border to gray and the dollar amount in the header to 0 when the user clicks on the clear selection button
$('.clear-dogs').click(function (e) {
  $('article').removeClass('adopted');
  $('article').addClass('noshow');
})

$('.clear-more-dogs').click(function (e) {
  $('article').removeClass('adopted');
  $('article').addClass('noshow');
})