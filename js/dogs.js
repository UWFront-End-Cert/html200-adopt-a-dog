function pictureInfo(dog, breed, price) {
    const result = 'Name: ' + dog + ' Breed: ' + breed + ' Price: ' + price;
    alert(result);
}

let total = 0;
function Price(price) {
    total = price + total;
    alert('Total Cost to Adopt $' + total);

    $('.adopt-button').click(function(){
        $('.price').text('$' + total);
      });
} 

