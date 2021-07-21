//*****************************************************/
//*******intentionally leaving this code in page******/
//****************************************************/
// let fee = 123.45;

// function runningTotal()
// {
//     if(document.getElementsByClassName("btnAdopt"))
//     {
//         alert('Your total is:  $' + fee.toFixed(2).replace(/\d(?=(\d{3})+\.)/g, '$&,'));

//     }
//     fee = Number(fee) + 123.45;
// }


$(document).ready(function(){

    let fee = 123.45

    $('.btnAdopt').click(function(){
        $('.total').each(function(){
            $(this).text("$ " + fee.toFixed(2))
        })
        fee = fee + 123.45
    })
})
