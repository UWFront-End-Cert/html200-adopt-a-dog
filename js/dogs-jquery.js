$('.grey-border').on('mouseover', function (e) {
    $(this).removeClass('grey-border');
    $(this).addClass('green-border');
})

$('article').on('mouseout', function (e) {
    $(this).removeClass('green-border');
    $(this).addClass('grey-border');
})

$('.dogs button').on('click', function(e) {
    $(this).parent().addClass('chosen');
})