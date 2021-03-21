function clickHandler(str) {
    alert(str);
};

function thankYou(str) {
    alert('Thank you. The form information has been received');
}

//A Home effect that gives the tile an outline, or give it a box shadow
$(function () {
    console.log('The page has loaded');
    $('h3').hover(function () {
        $(this).css('box-shadow', '3px 3px 3px #A52A2A');
    });
});

//Add a ripple effect to your button.
$('button').click(function () {
    $(this).animate({
        left: '20px',
        fontSize: '14px',
    }, function () {
        //annimation complete
    });
});

//Zooms in on the dog photo.
$(function () {
    $('img').mouseover(function () {
        $(this).animate({ width: '300px', height: '150px' }, 100);
    }); $('img').mouseout(function () {
        $(this).animate({ width: '100%', height: '15rem' }, 100);
    });
});





















