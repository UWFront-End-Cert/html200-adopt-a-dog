$('.dog-holder').hover(function(e) {
    $('img', this).addClass('dog-border');
}, function(e) {
    $('img', this).removeClass('dog-border');
})
