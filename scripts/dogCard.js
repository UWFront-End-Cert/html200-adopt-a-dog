$('.dogcard').hover(function() {
    $( this ).toggleClass('dogcard-focus');
});

$('[name="Adopt"]').click(function() {
    $('.display-total').text('$' + cartCurrent);
});
