$('.flex').hover(function (e) {
    $('img', this).addClass('img-border');
})

$('.flexi').hover(function (e) {
    $('img', this).addClass('img-border');
})

$('.flex img').css({
    "border-color": "#C1E0FF",
    "border-weight": "5px",
    "border-style": "solid"
    });

$('.adoptIntro').hover(function (e) {
    $('img', this).addClass('introPic-border');
});

$('.preview').hover(function (e) {
    $('img', this).addClass('preview-border');
});

$('.adopt').click(function (e) {
    $(this).hide();
});