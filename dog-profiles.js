$(function(){
  console.log("DOM is READY, javascript a go")
  $('.profile-card').mouseenter(function(){
    console.log("adopt me!")
    $(this).addClass('profile-card-hover')
    $('.profile-card-hover > div').removeClass('adopt-button').addClass('adopt-button-hover')
  }).mouseleave(function(){
    console.log("please")
    $(this).removeClass('profile-card-hover')
    $('.adopt-button-hover').addClass('adopt-button').removeClass('adopt-button-hover')
  })
})
