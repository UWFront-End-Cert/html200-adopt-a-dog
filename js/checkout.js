let adoptFee = 0;


function runningTotal(current) {
adoptFee = Math.round((adoptFee+current+ Number.EPSILON) * 100) / 100;        
alert('Your total adoption fees are currently '+adoptFee);
document.getElementById("finalAmount").innerHTML = adoptFee = Math.round((adoptFee+ Number.EPSILON) * 100) / 100;



function doginfo(name, breed, fee){
    alert('Hi my name is ' +name+ ', I am a ' +breed+ ' and I cost '+fee+' to adopt.');
}

}
