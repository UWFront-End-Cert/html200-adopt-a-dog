function showDogInfo(breed, name, adoptionFee) {
    alert(`Dog Information:\nBreed: ${breed}\nName: ${name}\nAdoption Fee: $${adoptionFee}`);
}

let count = 1;

function addTotal(adoptionFee) {

    result = 123.45 * count++;

    const totalDisplay = document.getElementById('totalDisplay');
    totalDisplay.textContent = `Total: $${result}`;

    alert('Total: $'+result);
}

document.addEventListener("DOMContentLoaded", function() {

    const form = document.getElementById("dogForm");

    form.addEventListener("submit", function(event) {
        event.preventDefault();

        const name = document.getElementById("applicantName").value;
        const email = document.getElementById("emailAddress").value;
        const address = document.getElementById("streetAddress").value;
        const city = document.getElementById("city").value;
        const state = document.getElementById("state").value;
        const zipcode = document.getElementById("zipcode").value;
        const area = document.getElementById("area").value;
        

        console.log("Name:", name);
        console.log("Email:", email);
        console.log("Address:", address);
        console.log("City:", city);
        console.log("State:", state);
        console.log("Pick up location:", area);

        // Get the selected value from the radio buttons
        const adopterOptions = document.getElementsByName("adopter");
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