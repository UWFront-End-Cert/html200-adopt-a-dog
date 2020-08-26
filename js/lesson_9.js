$(document).ready(function(){
    
    $(".item-lists").hover(function () {
        // $(this).css({'box-shadow': '5px 10px 8px 10px #888888'}).css({'outline': '2px solid #7CAF3F'}).css("color", "orange");
        $(this).css({'box-shadow': '5px 10px 8px 10px #888888', 'outline': '2px solid #7CAF3F', 'color': 'orange'});
    }, function () {
        // $(this).css({'box-shadow': 'none'}).css({'outline': 'none'}).css("color", "purple");
        $(this).css({'box-shadow': 'none', 'outline': 'none', 'color': 'purple'});
    });

    $('.list-pics').hover(function() {
        // $(this).animate({ backgroundSize: '200%',  }, 50);
        // $(this).css({ 'background-size':'200% 200%'});
        // $(this).animate({ 'zoom': 1.2 }, 400);
        $(this).css({ 'size': 'cover', 'transform': 'scale(1.2)'});
        
    }, function() {
        // $(this).animate({ 'zoom': 1 }, 400);
        // $(this).animate({
        //     'background-size': '10%'
        // }, 400)
        $(this).css({ 'size': 'cover', 'transform': 'scale(1.0)'});
    });

    // $('.adopt-btn').mousedown(function(e) {
    //     $(this).prepend("<span class='radio-ripple'></span>");
    //     $(this).find('span').addClass('is-active').fadeIn('fast');
    //   }).mouseup(function(e) {
    //     $(this).find('span').addClass('is-active').fadeOut('fast');
    //   });

    // $(".adopt-btn").on('click',function (e) {
    $(".adopt-btn").mousedown(function(e) {
  
        // Remove any old one
        $(".ripple").remove();
      
        // Setup
        var posX = $(this).offset().left,
            posY = $(this).offset().top,
            buttonWidth = $(this).width(),
            buttonHeight =  $(this).height();
        
        // Add the element
        $(this).prepend("<span class='ripple'></span>");
      
        
       // Make it round!
        if(buttonWidth >= buttonHeight) {
          buttonHeight = buttonWidth;
        } else {
          buttonWidth = buttonHeight; 
        }
        
        // Get the center of the element
        var x = e.pageX - posX + 50;
        var y = e.pageY - posY + 200;
        
       
        // Add the ripples CSS and start the animation
        $(".ripple").css({
          width: buttonWidth,
          height: buttonHeight,
          top: y + 'px',
          left: x + 'px'
        }).addClass("rippleEffect");
      });

    // $('.adopt-btn').on('mousedown', function (e) {
    
    //     // Click coordinates.
    //     var css = {
    //         top: e.clientX,
    //         left: e.clientX
    //     };
    
    //     $('.ripple', this).css(css).addClass('ripple--animate');
    
    //     return true;
    // });
    
    // $('.ripple').on('transitionend', function () {
    //     $(this).removeClass('ripple--animate');
    // });
    const validate = (email) => {
        const expression = /(?!.*\.{2})^([a-z\d!#$%&'*+\-\/=?^_`{|}~\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF]+(\.[a-z\d!#$%&'*+\-\/=?^_`{|}~\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF]+)*|"((([ \t]*\r\n)?[ \t]+)?([\x01-\x08\x0b\x0c\x0e-\x1f\x7f\x21\x23-\x5b\x5d-\x7e\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF]|\\[\x01-\x09\x0b\x0c\x0d-\x7f\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF]))*(([ \t]*\r\n)?[ \t]+)?")@(([a-z\d\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF]|[a-z\d\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF][a-z\d\-._~\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF]*[a-z\d\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])\.)+([a-z\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF]|[a-z\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF][a-z\d\-._~\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF]*[a-z\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])\.?$/i;
    
        return expression.test(String(email).toLowerCase())
      }


    $('.submit-btn').on('click', function (e) {
      
        
        var user_name = $('#name').val();

      var email = $('#email').val();

      var address = $('#address').val();

      var city = $('#city').val();

      var zipcode = $('#zipcode').val();

      var state = $('#state').val();

      var pickup_location = $('#pickup-location').val();
      
      var is_first_adopted_yes = $('#yes');

      var is_first_adopted_no = $('#yes');

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

    $(".adopt-btn").mouseup(function(e) {
        var dogPrice_str = this.parentElement.parentElement.getElementsByClassName('adopt-price')[0].textContent;
        var dogPrice_int = parseFloat(dogPrice_str.substring(1));
        var curTotalPrice_str = $('.header-price').val();
        var curTotalPrice_int;
        if (curTotalPrice_str == (null || ""))
            curTotalPrice_int = 0;
        else
            curTotalPrice_int= parseFloat(curTotalPrice_str.substring(1));

        var totalPrice = dogPrice_int + curTotalPrice_int;
        $('.header-price').val("$" + totalPrice.toFixed(2));
        alert("Total Price:"+ totalPrice);
    });
    
    document.querySelectorAll(".showmore").forEach(function (p) {
      p.querySelector("a").addEventListener("click", function () {
        p.classList.toggle("show");
        this.textContent = p.classList.contains("show") ? "Show Less" : "Show More";
      });

    });    
});

function alertDogInfo(name, breed, adoptionFee) {
    let txt = 'Name: ' + name + '\nBreed: ' + breed + '\nAdoption fee: ' + adoptionFee;
      alert(txt);
}
