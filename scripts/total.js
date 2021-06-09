
let fee = 123.45;

function runningTotal()
{
    if(document.getElementsByClassName("btnAdopt"))
    {
        alert('Your total is:  $' + fee.toFixed(2).replace(/\d(?=(\d{3})+\.)/g, '$&,'));
    }
    fee = Number(fee) + 123.45;
}