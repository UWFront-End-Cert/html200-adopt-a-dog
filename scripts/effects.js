function initialize() {
    jQuery('.dog-card').hover(
        function addShadow() {
            $(this).css("box-shadow", "0px 0px 10px #999")
        },
        function removeShadow() {
            $(this).css("box-shadow", "none")
        }
    )

    $('.dog-grid .dog-card .dog-picture-wrapper .dog-picture').hover(
        function zoom() {
            $(this).css("transform", 'scale(1.2)')
        },
        function unzoom() {
            $(this).css("transform", 'scale(1.0)')
        }
    )

    $('.dog-link').click(
        function makeRipple() {
            $(this).rippleAnimation();
        }
    ) 
}

$(document).ready(initialize)
