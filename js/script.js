function getDogInfo(myBreed, myIndex) {
    alert(
        "Name: " + getDogName(myIndex) +
        "\nBreed: "+ myBreed +
        "\nCost: " + getDogCost(myIndex)
    );
}
function updateTotal(myIndex) {
    console.log($('#cart-total').html());

    let myCost = getDogCost(myIndex);
    let runningTotal = $('#cart-total').html();
    // // alert("MyCost should update to " + myCost);
    myCost = stringToDouble(myCost) + stringToDouble(runningTotal);
    $('#cart-total').text("$" + myCost);

    alert("You have added " + getDogName(myIndex)+ " to your cart.");

    alertTotal();
}
function alertTotal() {
    alert("Shopping Cart Total: " + $('#cart-total').html());
}
function getDogName(myIndex){
    return $($('.thumbnail-content-wrap > h3')[myIndex]).html();
    // return document.getElementsByClassName("thumbnail-content-wrap")[myIndex].getElementsByTagName("h3")[0].textContent;
}
function getDogCost(myIndex){
    return $($('.cost-double')[myIndex]).html();
}
function stringToDouble(myString) {
    let text = myString.trim();
    let result = text.replace('$','');
    return parseFloat(result);
}
function makeBlog(){
    const blogList = [
        {
            title: 'title',
            image: 'image',
            paragraph: 'paragraph'
        }
    ];
    const heading = document.createElement('h3');
    document.body.append(heading);
    alert('It Works!')
}


