function dogCardTotalOnClick(name, breed, dogPrice) {
    alert("This dog's name is " + name + " and its breed is " + breed + " and the adoption fees are: " + dogPrice);
}

let cartTotal = 0;

let blogPosts = [
    {image_url:"images/blog-1.jpg", image_alt: "woman and dog sitting",title: "Traveling With Your Dog", text: ["Iduciendisite quo magnatem iuntum quid quaest ea am, tenderumet adis dolenem quidustrum fuga. Faceaquae estioria derum recuptatur, cum volore, undipsa doloreium hillupta aut es ut alitatuscit ommossum haritatur arum qui officae videbiti corporeium faccull oribus es quidignis ipietus explam sus am aut amet ant fugiatum, utem non reptat.", "Uptiusd andesci qui nem aut vendion ectur? Debis que explaut laborenia que doluptur, con et labor abor sant poreperum dio quat que doluptatur aut voluptassim quisciatquam ea ad qui con nes cus esere dolut hicto teni solutenis alit ulparume nonseca estorer spernam voluptassim quisciatquam ea ad qui con nes cus esere dolut hicto teni solutenis alit ulparume nonseca estorer spernam."]}, 
    {image_url:"images/blog-2.jpg", image_alt: "dogs on leashes with dog walker",title: "How To Walk Multiple Dogs", text: ["Iduciendisite quo magnatem iuntum quid quaest ea am, tenderumet adis dolenem quidustrum fuga. Faceaquae estioria derum recuptatur, cum volore, undipsa doloreium hillupta aut es ut alitatuscit ommossum haritatur arum qui officae videbiti corporeium faccull oribus es quidignis ipietus explam sus am aut amet ant fugiatum, utem non reptat.", "Uptiusd andesci qui nem aut vendion ectur? Debis que explaut laborenia que doluptur, con et labor abor sant poreperum dio quat que doluptatur aut voluptassim quisciatquam ea ad qui con nes cus esere dolut hicto teni solutenis alit ulparume nonseca estorer spernam voluptassim quisciatquam ea ad qui con nes cus esere dolut hicto teni solutenis alit ulparume nonseca estorer spernam."]}, 
    {image_url:"images/blog-3.jpg", image_alt: "woman with dog playing fetch at sunset",title: "Teach Your Dog To Fetch!", text: ["Iduciendisite quo magnatem iuntum quid quaest ea am, tenderumet adis dolenem quidustrum fuga. Faceaquae estioria derum recuptatur, cum volore, undipsa doloreium hillupta aut es ut alitatuscit ommossum haritatur arum qui officae videbiti corporeium faccull oribus es quidignis ipietus explam sus am aut amet ant fugiatum, utem non reptat.", "Uptiusd andesci qui nem aut vendion ectur? Debis que explaut laborenia que doluptur, con et labor abor sant poreperum dio quat que doluptatur aut voluptassim quisciatquam ea ad qui con nes cus esere dolut hicto teni solutenis alit ulparume nonseca estorer spernam voluptassim quisciatquam ea ad qui con nes cus esere dolut hicto teni solutenis alit ulparume nonseca estorer spernam."]}
]

function dogCardPriceOnClick(dogPrice) {
    cartTotal = cartTotal + dogPrice;
    alert ("New price is " + cartTotal);
}

function javascriptTest() {
    alert("code reached");
    let newNode = document.createElement("div");
    let newNodeText = document.createTextNode("Dog Card Javascript");
    let sectionLeft = document.getElementById("homepage-section-left")
    sectionLeft.appendChild(newNode.appendChild(newNodeText));
}

function createBlogPosts() {
    blogPosts.forEach(e => {
        let article = document.createElement("article");
        let aside = document.createElement("aside");
        let image = document.createElement("img");
        let heading = document.createElement("h2");
        let paragraph1 = document.createElement("p");
        let paragraph2 = document.createElement("p");
        let headingText = document.createTextNode(e.title);
        let paragraphText1 = document.createTextNode(e.text[0]);
        let paragraphText2 = document.createTextNode(e.text[1]);
        article.classList.add("blog-post");
        aside.classList.add("blog-post-text");
        image.classList.add("blog-post-image");
        image.src = e.image_url;
        image.alt = e.image_alt;
        heading.appendChild(headingText);
        paragraph1.appendChild(paragraphText1);
        paragraph2.appendChild(paragraphText2);
        aside.appendChild(heading);
        aside.appendChild(paragraph1);
        aside.appendChild(paragraph2);
        article.appendChild(image);
        article.appendChild(aside);
        document.getElementById("blog-main").appendChild(article);
    })
}

function onSubmit() {
    alert("Thank you. The form information has been received");
}

