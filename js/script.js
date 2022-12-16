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
const form = document.getElementById('my-form');
    form.addEventListener('submit', function(event) {
        event.preventDefault();
        // let reqBody = {};
        alert(`Thank you. The form information has been received ${event.timeStamp}`);
        // let form = document.getElementsByTagName('form');
        // Object.keys(form.elements).forEach(key => {
        //     let element = form.elements[key];
        //     if (element.type !== "submit") {
        //         reqBody[element.name] = element.value;
        //     }
        // });
        // console.log(reqBody);
        
        
        // for(let i = 0; i < inputlist.length; i ++){
        //     console.log(inputlist);
        // }
        console.log(
            "Name: " + document.getElementsByName('checkoutName')[0].value +
            "\nEmail: " + document.getElementsByName('checkoutEmail')[0].value +
            "\nAddress: " + document.getElementsByName('checkoutAddress')[0].value +
            "\nCity: " + document.getElementsByName('checkoutCity')[0].value +
            "\nState: " + document.getElementsByName('checkoutState')[0].value +
            "\nZip: " + document.getElementsByName('checkoutZip')[0].value +
            "\nFirst Time: " + document.getElementsByName('checkoutFirstTime')[0].value +
            "\nPickup Location: " + document.getElementsByName('checkoutLocation')[0].value
        );
    });