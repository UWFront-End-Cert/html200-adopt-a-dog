$(function(){
  //console.log('jquery-scripts.js has loaded')
  $('.tile').mouseenter(function() {
    console.log("mouse hovering over dog tile")
    $(this).css("box-shadow", "5px 5px 5px -3px #093C60, 0px 5px 10px #093C60, -5px 5px 5px -3px #093C60")
    $(this).find('h3').animate({'font-size': '160%'},'medium')
  }).mouseleave(function() {
    console.log("mouse has left")
    $(this).css("box-shadow", "5px 5px 5px -3px #E6E6E6, 0px 5px 10px #E6E6E6, -5px 5px 5px -3px #E6E6E6")
    $(this).find('h3').animate({'font-size': '120%'},'medium')
  })
})
