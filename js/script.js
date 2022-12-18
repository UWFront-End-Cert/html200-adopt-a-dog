function getDogInfo(myBreed, myIndex) {
    alert(
        "Name: " + getDogName(myIndex) +
        "\nBreed: "+ myBreed +
        "\nCost: " + getDogCost(myIndex)
    );
}
function updateTotal(myIndex) {
    let myCost = stringToDouble(getDogCost(myIndex));
    let runningTotal = document.getElementsByClassName("cart-total");
    // alert("MyCost should update to " + myCost)
    myCost = myCost + stringToDouble(runningTotal[0].textContent);
    runningTotal[0].innerHTML = "$" + myCost;

    alert("You have added " + getDogName(myIndex)+ " to your cart.");

    alertTotal();
}
function alertTotal() {
    alert("Shopping Cart Total: " + document.getElementsByClassName("cart-total")[0].textContent);
}
function getDogName(myIndex){
    return document.getElementsByClassName("thumbnail-content-wrap")[myIndex].getElementsByTagName("h3")[0].textContent;
}
function getDogCost(myIndex){
    return document.getElementsByClassName("cost-double")[myIndex].textContent;
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


