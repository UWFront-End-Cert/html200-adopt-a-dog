$(document).ready(function(){

    const formatter = new Intl.NumberFormat('en-US', {
        minimumFractionDigits: 2,
        maximumFractionDigits: 2,
    });

    let total = 0.00;

    $('.dog-holder').hover(function(e) {
        $('img', this).addClass('dog-border');
    }, function(e) {
        $('img', this).removeClass('dog-border');
    })
    $('.dog-holder').click(function(e) {
        const name = $('h3', this).text();
        const breed = "breed unknown";
        const fee = "$" + $('a', this).data('fee');
        alert('Name: ' + name + '\nBreed: ' + breed + '\nFee: ' + fee);
    })
    $('.adopt-button').click(function(e) {
        e.stopPropagation();
        if ($(this).data('availability') == "t") {
            total += $(this).data('fee');
            alert("$" + formatter.format(total));
            $(this).data('availability', "f");
            $('#sum').text("$" + formatter.format(total));
        } else {
            alert("You have already selected this dog for adoption.");
        }
    })

});
