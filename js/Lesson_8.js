window.onload = function()
{
    document.querySelectorAll(".showmore").forEach(function (p) {
      p.querySelector("a").addEventListener("click", function () {
        p.classList.toggle("show");
        this.textContent = p.classList.contains("show") ? "Show Less" : "Show More";
      });
    });


    const validate = (email) => {
    const expression = /(?!.*\.{2})^([a-z\d!#$%&'*+\-\/=?^_`{|}~\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF]+(\.[a-z\d!#$%&'*+\-\/=?^_`{|}~\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF]+)*|"((([ \t]*\r\n)?[ \t]+)?([\x01-\x08\x0b\x0c\x0e-\x1f\x7f\x21\x23-\x5b\x5d-\x7e\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF]|\\[\x01-\x09\x0b\x0c\x0d-\x7f\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF]))*(([ \t]*\r\n)?[ \t]+)?")@(([a-z\d\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF]|[a-z\d\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF][a-z\d\-._~\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF]*[a-z\d\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])\.)+([a-z\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF]|[a-z\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF][a-z\d\-._~\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF]*[a-z\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])\.?$/i;

    return expression.test(String(email).toLowerCase())
  }

  function validate_user_name(value){
    var length = value.length;
    for (var i = 0; i < length; i++) {
      if (!(value.charAt(i) >= '0' && value.charAt(i) <= '9') || (value.charAt(i) >= 'a' && value.charAt(i) <= 'z') || (value.charAt(i) >= 'A' && value.charAt(i) <= 'Z')) {
        // alert("username must be made of characters and numbers only");
        return false;
      }
    }
    return true;
  }
  var picture_elems = document.getElementsByClassName("list-pics");

    var purchase_elems = document.getElementsByClassName("adopt-btn");

    for(var i = 0; i < purchase_elems.length; i++){
      purchase_elems[i].addEventListener('click', function(){
        // get price of selected dog
        var dogPrice_str = this.parentElement.parentElement.getElementsByClassName('adopt-price')[0].textContent;
        var dogPrice_int = parseFloat(dogPrice_str.substring(1));
        //get current total price 
        var curTotalPrice_str = document.getElementsByClassName('header-price')[0].textContent;
        var curTotalPrice_int = parseFloat(curTotalPrice_str.substring(1));
        //total price information update
        var totalPrice = dogPrice_int + curTotalPrice_int;
        document.getElementsByClassName('header-price')[0].innerHTML = "$" + totalPrice;

        alert("Total Price:"+ totalPrice);
      })
    }
      
    document.getElementsByClassName("submit-btn")[0].addEventListener('click', function(){
      
      var user_name = document.getElementById("name").value;

      var email = document.getElementById("email").value;

      var address = document.getElementById("address").value;

      var city = document.getElementById("city").value;

      var zipcode = document.getElementById("zipcode").value;

      var state = document.getElementById("state").value;

      var pickup_location = document.getElementById("pickup-location").value;
      
      var is_first_adopted_yes = document.getElementById("yes");

      var is_first_adopted_no = document.getElementById("yes");

      if (user_name == (null || ''))
      {
        alert("Please input user name.");
        return;
      }

      if (email == (null || ''))
      {
        alert("Please input email address.");
        return;
      }
      else if (!validate(email))
      {
        alert("Please input a valid email address.");
        return;
      }

      if (city == (null || ''))
      {
        alert("Please input city name.");
        return;
      }

      if (zipcode == (null || ''))
      {
        alert("Please select zip code.");
        return;
      }

      if (zipcode == (null || ''))
      {
        alert("Please select zip code.");
        return;
      }
      
      if (is_first_adopted_yes.checked == false && is_first_adopted_no.checked == false)
      {
        alert("Please check if you first time adopt or not.");
        return;
      }

      alert("Thank you. The form information has been received");

      var object = {
        user_name: user_name,
        email: email,
        address: address,
        city: city,
        zipcode: zipcode,
        pickup_location: pickup_location,
        is_first_adopted: is_first_adopted_yes.checked == true? "yes":"no"
      }
      console.log(object);

    });

    document.getElementById("yes").addEventListener('click', function (){

      document.getElementById("no").checked = false;

    });

    document.getElementById("no").addEventListener('click', function (){

      document.getElementById("yes").checked = false;
      
    });   

}

//lesson6
document.querySelectorAll(".showmore").forEach(function (p) {
    p.querySelector("a").addEventListener("click", function () {
      p.classList.toggle("show");
      this.textContent = p.classList.contains("show") ? "Show Less" : "Show More";
    });
});

    
function alertDogInfo(name, breed, adoptionFee) {
    let txt = 'Name: ' + name + '\nBreed: ' + breed + '\nAdoption fee: ' + adoptionFee;
      alert(txt);
}