$('article').on('mouseover', function (e) {
    $(this).removeClass('noshow');
    $(this).addClass('show');
})

$('article').on('mouseout', function (e) {
    $(this).removeClass('show');
    $(this).addClass('noshow');
})

$('.dog-button').on('click', function (e) {
    $(this).parent().addClass('adopted');
})