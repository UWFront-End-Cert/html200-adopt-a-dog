
function get_form_info() {
    // let name = document.getElementsByName("adopter-name")[0].value;
    // console.log("Name of adopter: ", name);

    let search_list = [
        ['First Time adopter? ', 'first-time-adopter'],
    ];

    console.log(
        'Name of adopter: ',
        $("input[name='adopter-name']").val()
    )

    console.log(
        'Email of adopter: ',
        $("input[name='adopter-email']").val()
    )
    console.log(
        'Street Address of adopter: ',
        $("input[name='adopter-street-address']").val()
    )
    console.log(
        'City of adopter: ',
        $("input[name='adopter-city']").val()
    )
    console.log(
        'State of adopter: ',
        $("#adopter-state").children("option:selected").val()
    )
    console.log(
        'ZIP of adopter: ',
        $("input[name='adopter-zip']").val()
    )

    console.log(
        'First Time adopter? ',
        $("input[name='first-time-adopter']:checked").val()
    )

    console.log(
        'Picking up at',
        $("#pickup-location").children("option:selected").val()
    )
}


$(".add-to-cart").on("click", function(e) {
        e.preventDefault();
        alert("Thank you. The form information has been received.");
        get_form_info();
    }
)