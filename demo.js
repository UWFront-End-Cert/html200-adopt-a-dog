function showDogInfo(breed, name, adoptionFee) {
    alert(`Dog Information:\nBreed: ${breed}\nName: ${name}\nAdoption Fee: $${adoptionFee}`);
}

let count = 1;

function addTotal(adoptionFee) {
    result = 123.45 * count++;

    // Use jQuery to select the element with id 'totalDisplay'
    const totalDisplay = $('#totalDisplay');

    // Use text() method to set the content of the selected element
    totalDisplay.text(`Total: $${result}`);

    // Use alert() with the result
    alert(`Total: $${result}`);
}


var divsInSection = $('.grid-container').find('div');
divsInSection.mouseenter(function(){
    $(this).fadeTo('fast', .75)

}).mouseleave(function(){
    $(this).fadeTo('fast', 1)

})

$(document).ready(function(){
    $('#formSubmit').on("click", function(){
        const name = $('#applicantName').val();
        const email = $("#emailAddress").val();
        const address = $('#streetAddress').val();
        const city = $('#city').val();
        const state = $('#state').val();
        const zipcode = $('#zipcode').val();
        const area = $('#area').val();

        console.log("Name:", name);
        console.log("Email:", email);
        console.log("Address:", address);
        console.log("City:", city);
        console.log("State:", state);
        console.log("Zipcode:", zipcode);
        console.log("Pick up location:", area);

        // Get the selected value from the radio buttons
        const adopterOptions = $('[name="adopter"]');
        let selectedAdopter;
        for (const option of adopterOptions) {
            if (option.checked) {
                selectedAdopter = option.value;
            }
        }
        console.log("First Time Adopter:", selectedAdopter);
    });
});


function formSubmitted() {
    event.preventDefault();
    alert(`Thank you. The form information has been received.`);
}

const blogPosts = [
    {
        image: "images/blog-1.jpg",
        title: "Traveling With Your Dog",
        content: "Iduciendisite quo magnatem iuntum quid quaest ea am, tenderumet adis dolenem quidustrum fuga. Faceaquae estioria derum recuptatur, cum volore, undipsa doloreium hillupta aut es ut alitatuscit ommossum haritatur arum qui officae videbiti corporeium faccull oribus es quidignis ipietus explam sus am aut amet ant fugiatum, utem non reptat. Uptiusd andesci qui nem aut vendion ectur? Debis que explaut laborenia que doluptur, con et labor abor sant poreperum dio quat que doluptatur aut voluptassim quisciatquam ea ad qui con nes cus esere dolut hicto teni solutenis alit ulparume nonseca estorer spernam voluptassim quisciatquam ea ad qui con nes cus esere dolut hicto teni solutenis alit ulparume nonseca estorer spernam.",
    },
    {
        image: "images/blog-2.jpg",
        title: "How To Walk Multiple Dogs",
        content: "Iduciendisite quo magnatem iuntum quid quaest ea am, tenderumet adis dolenem quidustrum fuga. Faceaquae estioria derum recuptatur, cum volore, undipsa doloreium hillupta aut es ut alitatuscit ommossum haritatur arum qui officae videbiti corporeium faccull oribus es quidignis ipietus explam sus am aut amet ant fugiatum, utem non reptat. Uptiusd andesci qui nem aut vendion ectur? Debis que explaut laborenia que doluptur, con et labor abor sant poreperum dio quat que doluptatur aut voluptassim quisciatquam ea ad qui con nes cus esere dolut hicto teni solutenis alit ulparume nonseca estorer spernam voluptassim quisciatquam ea ad qui con nes cus esere dolut hicto teni solutenis alit ulparume nonseca estorer spernam.",
    },
    {
        image: "images/blog-3.jpg",
        title: "Teach Your Dog To Fetch!",
        content: "Iduciendisite quo magnatem iuntum quid quaest ea am, tenderumet adis dolenem quidustrum fuga. Faceaquae estioria derum recuptatur, cum volore, undipsa doloreium hillupta aut es ut alitatuscit ommossum haritatur arum qui officae videbiti corporeium faccull oribus es quidignis ipietus explam sus am aut amet ant fugiatum, utem non reptat. Uptiusd andesci qui nem aut vendion ectur? Debis que explaut laborenia que doluptur, con et labor abor sant poreperum dio quat que doluptatur aut voluptassim quisciatquam ea ad qui con nes cus esere dolut hicto teni solutenis alit ulparume nonseca estorer spernam voluptassim quisciatquam ea ad qui con nes cus esere dolut hicto teni solutenis alit ulparume nonseca estorer spernam.",
    },
];

const blogSection = document.getElementById("blog-posts");

for (let i = 0; i < blogPosts.length; i++) {
    const post = blogPosts[i];

    // Adding headline
    const titleElement = document.createElement("h2");
    titleElement.textContent = post.title;
    blogSection.appendChild(titleElement);

    // Adding text
    const contentElement = document.createElement("p");
    contentElement.textContent = post.content;
    blogSection.appendChild(contentElement);

    // Adding image
    const imageElement = document.createElement("img");
    imageElement.src = post.image;
    blogSection.appendChild(imageElement);
}