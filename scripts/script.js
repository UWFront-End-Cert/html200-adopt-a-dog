function dogCardTotalOnClick(name, breed, dogPrice) {
    alert("This dog's name is " + name + " and its breed is " + breed + " and the adoption fees are: " + dogPrice);
}

let cartTotal = 0;

let blogPosts = [
    {image_url:"images/blog-1.jpg", image_alt: "woman and dog sitting",title: "Traveling With Your Dog", text: ["Iduciendisite quo magnatem iuntum quid quaest ea am, tenderumet adis dolenem quidustrum fuga. Faceaquae estioria derum recuptatur, cum volore, undipsa doloreium hillupta aut es ut alitatuscit ommossum haritatur arum qui officae videbiti corporeium faccull oribus es quidignis ipietus explam sus am aut amet ant fugiatum, utem non reptat.", "Uptiusd andesci qui nem aut vendion ectur? Debis que explaut laborenia que doluptur, con et labor abor sant poreperum dio quat que doluptatur aut voluptassim quisciatquam ea ad qui con nes cus esere dolut hicto teni solutenis alit ulparume nonseca estorer spernam voluptassim quisciatquam ea ad qui con nes cus esere dolut hicto teni solutenis alit ulparume nonseca estorer spernam."]}, 
    {image_url:"images/blog-2.jpg", image_alt: "dogs on leashes with dog walker",title: "How To Walk Multiple Dogs", text: ["Iduciendisite quo magnatem iuntum quid quaest ea am, tenderumet adis dolenem quidustrum fuga. Faceaquae estioria derum recuptatur, cum volore, undipsa doloreium hillupta aut es ut alitatuscit ommossum haritatur arum qui officae videbiti corporeium faccull oribus es quidignis ipietus explam sus am aut amet ant fugiatum, utem non reptat.", "Uptiusd andesci qui nem aut vendion ectur? Debis que explaut laborenia que doluptur, con et labor abor sant poreperum dio quat que doluptatur aut voluptassim quisciatquam ea ad qui con nes cus esere dolut hicto teni solutenis alit ulparume nonseca estorer spernam voluptassim quisciatquam ea ad qui con nes cus esere dolut hicto teni solutenis alit ulparume nonseca estorer spernam."]}, 
    {image_url:"images/blog-3.jpg", image_alt: "woman with dog playing fetch at sunset",title: "Teach Your Dog To Fetch!", text: ["Iduciendisite quo magnatem iuntum quid quaest ea am, tenderumet adis dolenem quidustrum fuga. Faceaquae estioria derum recuptatur, cum volore, undipsa doloreium hillupta aut es ut alitatuscit ommossum haritatur arum qui officae videbiti corporeium faccull oribus es quidignis ipietus explam sus am aut amet ant fugiatum, utem non reptat.", "Uptiusd andesci qui nem aut vendion ectur? Debis que explaut laborenia que doluptur, con et labor abor sant poreperum dio quat que doluptatur aut voluptassim quisciatquam ea ad qui con nes cus esere dolut hicto teni solutenis alit ulparume nonseca estorer spernam voluptassim quisciatquam ea ad qui con nes cus esere dolut hicto teni solutenis alit ulparume nonseca estorer spernam."]}
]

let dogCards = [
    {image_url:"images/murphy-card.jpg", image_alt:"dog", name:"Murphy", cost:"123.45", text:"Corrum volorit iandae nimaxim cum restia volor reicid ut et etur sunt arum rendae pla endis re ea erum, qui doluptae"},
    {image_url:"images/poppy-card.jpg", image_alt:"dog", name:"Poppy", cost:"23.45", text:"Corrum volorit iandae nimaxim cum restia volor reicid ut et etur sunt arum rendae pla endis re ea erum, qui doluptae"},
    {image_url:"images/jack-card.jpg", image_alt:"dog", name:"Jack", cost:"54.45", text:"Corrum volorit iandae nimaxim cum restia volor reicid ut et etur sunt arum rendae pla endis re ea erum, qui doluptae"},
    {image_url:"images/duffy-card.jpg", image_alt:"dog", name:"Duffy", cost:"123.45", text:"Corrum volorit iandae nimaxim cum restia volor reicid ut et etur sunt arum rendae pla endis re ea erum, qui doluptae"},
    {image_url:"images/lucas-card.jpg", image_alt:"dog", name:"Lucas", cost:"123.45", text:"Corrum volorit iandae nimaxim cum restia volor reicid ut et etur sunt arum rendae pla endis re ea erum, qui doluptae"},
    {image_url:"images/jake-card.jpg", image_alt:"dog", name:"Jake", cost:"123.45", text:"Corrum volorit iandae nimaxim cum restia volor reicid ut et etur sunt arum rendae pla endis re ea erum, qui doluptae"},
    {image_url:"images/angus-card.jpg", image_alt:"dog", name:"Angus", cost:"123.45", text:"Corrum volorit iandae nimaxim cum restia volor reicid ut et etur sunt arum rendae pla endis re ea erum, qui doluptae"},
    {image_url:"images/violet-card.jpg", image_alt:"dog", name:"Violet", cost:"123.45", text:"Corrum volorit iandae nimaxim cum restia volor reicid ut et etur sunt arum rendae pla endis re ea erum, qui doluptae"},
    {image_url:"images/piper-card.jpg", image_alt:"dog", name:"Piper", cost:"123.45", text:"Corrum volorit iandae nimaxim cum restia volor reicid ut et etur sunt arum rendae pla endis re ea erum, qui doluptae"},
    {image_url:"images/maximus-card.jpg", image_alt:"dog", name:"Maximus", cost:"123.45", text:"Corrum volorit iandae nimaxim cum restia volor reicid ut et etur sunt arum rendae pla endis re ea erum, qui doluptae"},
    {image_url:"images/luna-card.jpg", image_alt:"dog", name:"Luna", cost:"123.45", text:"Corrum volorit iandae nimaxim cum restia volor reicid ut et etur sunt arum rendae pla endis re ea erum, qui doluptae"},
    {image_url:"images/stella-card.jpg", image_alt:"dog", name:"Stella", cost:"123.45", text:"Corrum volorit iandae nimaxim cum restia volor reicid ut et etur sunt arum rendae pla endis re ea erum, qui doluptae"}

]

function dogCardPriceOnClick() {
    alert ("This dog's price is " + this.cost);
}

function createDogCards() {
    dogCards.forEach(e => {
        let article = document.createElement("article");
        article.classList.add("dog-card");
        let image = document.createElement("img");
        image.classList.add("dog-card-image");
        image.src = e.image_url;
        image.alt = e.image_alt;
        let heading = document.createElement("h2");
        heading.classList.add("dog-card-heading");
        let price = document.createElement("p");
        let span = document.createElement("span");
        span.classList.add("dog-card-bold")
        span.appendChild(document.createTextNode("Cost to Adopt:"))
        let paragraph = document.createElement("p");
        let headingText = document.createTextNode(e.name);
        let dogCardDescription = document.createTextNode(e.text);
        let link = document.createElement("a");
        price.classList.add("dog-card-price-description");
        price.appendChild(span);
        price.appendChild(document.createTextNode("$" + e.cost));
        link.classList.add("dog-card-adopt-link");
        link.href = "checkout.html"
        let boundFunc = dogCardPriceOnClick.bind(e);
        link.addEventListener("click", boundFunc);
        link.appendChild(document.createTextNode("Adopt"));
        heading.appendChild(headingText);
        paragraph.appendChild(dogCardDescription);
        article.appendChild(image);
        article.appendChild(heading);
        article.appendChild(price);
        article.appendChild(paragraph)
        article.appendChild(link);
        document.querySelector("div.dog-card-display-full").appendChild(article);
    })
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

function homepageBlogPreview() {
    
}