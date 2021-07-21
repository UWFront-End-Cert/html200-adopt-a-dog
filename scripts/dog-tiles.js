
$(function () {
 
    $(".card").mouseenter(function(){
        $(this).fadeTo('slow', .75)     //card will fade to 75% on mouseenter
    }).mouseleave(function(){
        $(this).fadeTo('fast', 1)       //card will fade back to 100% on mouseleave
    })

    $(".btnAdopt").click(function(){
            $(this).animate({
            opacity: '0.5'              //button's opacity changes to 50%
        })
    })
})
