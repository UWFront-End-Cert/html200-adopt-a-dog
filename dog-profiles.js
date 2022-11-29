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

//clicking Adopt button adds total to cart and alerts total
  let adoptButton = $('.adopt-button')
  for (let i = 0; i < adoptButton.length; i++){
    let button = adoptButton[i]
    button.addEventListener('click', adoptionFees)
  }
    let fees1 = 40.00;
    let fees = 0.00;
    let cartTotal =$('.cart-total')[0]
    function adoptionFees() {
        fees = Number(fees) + Number(fees1);
        console.log(fees);
        $('.cart-total')[0].textContent = "$" + fees + ".00"
        alert("Cart Total is $" + fees + ".00")
    }
