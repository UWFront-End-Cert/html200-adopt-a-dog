function initialize() {
    jQuery('.col').hover(
        function addShadow() {
            $(this).css("box-shadow", "0px 0px 12px #707070")
        },
        function removeShadow() {
            $(this).css("box-shadow", "none")
        }
    )
}

$(document).ready(initialize)
