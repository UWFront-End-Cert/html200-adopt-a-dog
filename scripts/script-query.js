// Effects
$(function() {
    console.log('DOM is ready, javascript loading!');

        $('.top-logo').hover(function(){
            $(this).fadeOut(400);  
            $(this).fadeIn(400);
        });

        $('.motto').click(function(){
            $(this).fadeOut(500);  
            $(this).fadeIn(500);    
        });

        $('header').hover(function(e){
            e.preventDefault();
            $('.head-image-filter').toggleClass('head-image');
        });

        // Hover effect on dog tiles
        $('.dog-card').hover(function(){
            $(this).toggleClass('border');
        });

        $('.total').css('font-weight', 'bold');

        // Hover effect on images to make the design more consistant
        $('img.card, .home-intro-wider, .blog_article__image, .blog-image').mouseenter(function(){
            console.log("mouse has entered")
            $(this).fadeTo('slow', .50);
        }).mouseleave(function(){
            console.log("mouse has left");
            $(this).fadeTo('fast', 1);
        });
       
        $('input[value="Adopt"], .checkout-btn, .btn-primary').hover(function(){
            $(this).css('color','#a1c349');
            $(this).css('background-color', '#fff');
            $(this).css('border', '1px solid #a1c349');
        });
    
        $('input[value="Adopt"], .checkout-btn, .btn-primary').mouseleave(function(){
            $(this).css('color', '#fff');
            $(this).css('background-color', '#a1c349');
        });
    
        $('button').addClass('invert').hover(function(){
            $(this).css('color', '#0a3d61');
            $(this).css('background-color', '#fff');
            $(this).css('border', '1px solid #0a3d61');
        });
        $('.invert').mouseleave(function(){
            $(this).css('color', '#fff');
            $(this).css('background-color', '#0a3d61')
        });

        $('footer').click(function(){
            $(this).fadeOut();
            $(this).fadeOut('slow');
            $(this).fadeOut(2000);
        });

        $('.whole-content, .dogs, .blog, .form').click(function(){
            $('footer').fadeIn();
            $('footer').fadeIn(3000);
        });
        
    // Total from cart is tracked
    $(function(){
        let addItem = 0;
        $('.adopt').click(function adoptadog() {
            addItem += 123.45;
            let cart = addItem.toFixed(2);
//             $('.total').text(cart);
            $('#grand').text(cart);
        })
     });

    // Form data is handled, in the console
    $('#form').submit(function(event) {
          console.log($(this).serializeArray());
            event.preventDefault();
     });
    

    // Click event on adopt tiles
    $(function(){
        $('#murphy').click(function(){
            alert('Name: Murphy, Breed: Boxer, Cost: $123.45');
        });
        $('#poppy').click(function(){
            alert('Name: Poppy, Breed: Asian Terrier, Cost: $123.45');
        });
        $('#jack').click(function(){
            alert('Name: Jack, Breed: Beagle, Cost: $123.45');
        });
        $('#duffy').click(function(){
            alert('Name: Duffy, Breed: American Bulldog, Cost: $123.45');
        });
        $('#lucas').click(function(){
            alert('Name: Lucas, Breed: Labrador, Cost: $123.45');
        });
        $('#jake').click(function(){
            alert('Name: Jake, Breed: English Pointer/Rhodesian, Cost: $123.45');
        });
        $('#angus').click(function(){
            alert('Name: Angus, Breed: Bullmastiff, Cost: $123.45');
                            });
        $('#violet').click(function(){
            alert('Name: Violet, Breed: Field Spaniel, Cost: $123.45');
        });
        $('#pipper').click(function(){
            alert('Name: Pipper, Breed: Golder Retriever, Cost: $123.45');
        });
        $('#maximus').click(function(){
            alert('Name: Maximus, Breed: Mixed Terrier, Cost: $123.45');
        });
        $('#luna').click(function(){
            alert('Name: Luna, Breed: Akbash, Cost: $123.45');
        });
        $('#stella').click(function(){
            alert('Name: Stella, Breed: Chihuahua, Cost: $123.45');
        });
    });
    
 })
