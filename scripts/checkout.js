

function initialize() {
    $('.checkout-form').submit(
        function(e) {
            e.preventDefault()
            const data = $(this).serializeArray()
            console.log(data)
        }
    )
}

$(document).ready(initialize) 