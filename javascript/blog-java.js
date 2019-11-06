/*h2 headline*/
const blurb = document.createElement("h2");
blurb.className = "intro_blurb";
blurb.textContent = "Adoptadog blog";
document.body.appendChild(blurb);
const footer = document.getElementById("blog-footer");
document.body.insertBefore(blurb, footer);

/*container*/
const container = document.createElement("div");
document.body.insertBefore(container, footer);

/*article*/
const article = document.createElement("article");
article.className = "blog_article";
container.appendChild(article);

/*first blog image*/
const image = document.createElement("IMG");
image.className = "blog_photo";
image.setAttribute("src", "images/blog-1.jpg");
image.setAttribute("alt", "Girl hugging her dog as they sit on a cliff overlooking the Grand Canyon.")
article.appendChild(image);

/*h3 subhead*/
const header = document.createElement("h3");
header.textContent = "Traveling With Your Dog";
article.appendChild(header);

/*firt paragraph text*/
const para1 = document.createElement("p");
para1.textContent = "Iduciendisite quo magnatem iuntum quid quaest ea am, tenderumet adis dolenem quidustrum fuga. Faceaquae estioria derum recuptatur, cum volore, undipsa doloreium hillupta aut es ut alitatuscit ommossum haritatur arum qui officae videbiti corporeium faccull oribus es quidignis ipietus explam sus am aut amet ant fugiatum, utem non reptat.";
article.appendChild(para1);

/*second paragraph text*/
const para2 = document.createElement("p");
para2.textContent = "Uptiusd andesci qui nem aut vendion ectur? Debis que explaut laborenia que doluptur, con et labor abor sant poreperum dio quat que doluptatur aut voluptassim quisciatquam ea ad qui con nes cus esere dolut hicto teni solutenis alit ulparume nonseca estorer spernam voluptassim quisciatquam ea ad qui con nes cus esere dolut hicto teni solutenis alit ulparume nonseca estorer spernam.";
article.appendChild(para2);

/*loop blog post generation*/
const blogObjects = [
    {
        image: "images/blog-2.jpg",
        header: "How to Walk Multiple Dogs",
        para1: "Iduciendisite quo magnatem iuntum quid quaest ea am, tenderumet adis dolenem quidustrum fuga. Faceaquae estioria derum recuptatur, cum volore, undipsa doloreium hillupta aut es ut alitatuscit ommossum haritatur arum qui officae videbiti corporeium faccull oribus es quidignis ipietus explam sus am aut amet ant fugiatum, utem non reptat.",
        para2: "Uptiusd andesci qui nem aut vendion ectur? Debis que explaut laborenia que doluptur, con et labor abor sant poreperum dio quat que doluptatur aut voluptassim quisciatquam ea ad qui con nes cus esere dolut hicto teni solutenis alit ulparume nonseca estorer spernam voluptassim quisciatquam ea ad qui con nes cus esere dolut hicto teni solutenis alit ulparume nonseca estorer spernam."
    },
    {
        image: "images/blog-3.jpg",
        header: "Teach Your Dog to Fetch!",
        para1: "Iduciendisite quo magnatem iuntum quid quaest ea am, tenderumet adis dolenem quidustrum fuga. Faceaquae estioria derum recuptatur, cum volore, undipsa doloreium hillupta aut es ut alitatuscit ommossum haritatur arum qui officae videbiti corporeium faccull oribus es quidignis ipietus explam sus am aut amet ant fugiatum, utem non reptat.",
        para2: "Uptiusd andesci qui nem aut vendion ectur? Debis que explaut laborenia que doluptur, con et labor abor sant poreperum dio quat que doluptatur aut voluptassim quisciatquam ea ad qui con nes cus esere dolut hicto teni solutenis alit ulparume nonseca estorer spernam voluptassim quisciatquam ea ad qui con nes cus esere dolut hicto teni solutenis alit ulparume nonseca estorer spernam."
    }
];

const dogBlog = document.createElement("article");
container.appendChild(dogBlog);

for (let i = 0; i < blogObjects.length; i += 1) {
    const object = blogObjects[i];

    const image = document.createElement("IMG");
    image.setAttribute("for", object.image);

    const header = document.createElement("h3");
    header.setAttribute("for", object.header);

    const para1 = document.createElement("p");
    para1.setAttribute("for", object.para1);

    const para2 = document.createElement("p");
    para2.setAttribute("for", object.para2);

    dogBlog.appendChild(image);
    dogBlog.appendChild(header);
    dogBlog.appendChild(para1);
    dogBlog.appendChild(para2);

}
