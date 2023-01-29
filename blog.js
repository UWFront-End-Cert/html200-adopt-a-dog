//blog objects
const blogs = [
    {
        imageSrc: "images/blog-1.jpg",
        imageAlt: "Human and a dog overlooking a canyon",
        blogArticleTitle: "Traveling with Your Dog",
        p1: "Iduciendisite quo magnatem iuntum quid quaest ea am, tenderumet adis dolenem quidustrum fuga. Faceaquae estioria derum recuptatur, cum volore, undipsa doloreium hillupta aut es ut alitatuscit ommossum haritatur arum qui officae videbiti corporeium faccull oribus es quidignis ipietus explam sus am aut amet ant fugiatum, utem non reptat.",
        p2:  "Uptiusd andesci qui nem aut vendion ectur? Debis que explaut laborenia que doluptur, con et labor abor sant poreperum dio quat que doluptatur aut voluptassim quisciatquam ea ad qui con nes cus esere dolut hicto teni solutenis alit ulparume nonseca estorer spernam voluptassim quisciatquam ea ad qui con nes cus esere dolut hicto teni solutenis alit ulparume nonseca estorer spernam."
    },
    {
        imageSrc: "images/blog-2.jpg",
        imageAlt: "Multiple dogs on leashes, held by a hand",
        blogArticleTitle: "How to Walk Multiple Dogs",
        p1: "Iduciendisite quo magnatem iuntum quid quaest ea am, tenderumet adis dolenem quidustrum fuga. Faceaquae estioria derum recuptatur, cum volore, undipsa doloreium hillupta aut es ut alitatuscit ommossum haritatur arum qui officae videbiti corporeium faccull oribus es quidignis ipietus explam sus am aut amet ant fugiatum, utem non reptat.",
        p2:  "Uptiusd andesci qui nem aut vendion ectur? Debis que explaut laborenia que doluptur, con et labor abor sant poreperum dio quat que doluptatur aut voluptassim quisciatquam ea ad qui con nes cus esere dolut hicto teni solutenis alit ulparume nonseca estorer spernam voluptassim quisciatquam ea ad qui con nes cus esere dolut hicto teni solutenis alit ulparume nonseca estorer spernam."
    },
    {
        imageSrc: "images/blog-3.jpg",
        imageAlt: "Fetching scene in the sunset",
        blogArticleTitle: "Teach Your Dog To Fetch",
        p1: "Iduciendisite quo magnatem iuntum quid quaest ea am, tenderumet adis dolenem quidustrum fuga. Faceaquae estioria derum recuptatur, cum volore, undipsa doloreium hillupta aut es ut alitatuscit ommossum haritatur arum qui officae videbiti corporeium faccull oribus es quidignis ipietus explam sus am aut amet ant fugiatum, utem non reptat.",
        p2:  "Uptiusd andesci qui nem aut vendion ectur? Debis que explaut laborenia que doluptur, con et labor abor sant poreperum dio quat que doluptatur aut voluptassim quisciatquam ea ad qui con nes cus esere dolut hicto teni solutenis alit ulparume nonseca estorer spernam voluptassim quisciatquam ea ad qui con nes cus esere dolut hicto teni solutenis alit ulparume nonseca estorer spernam."
    }
]
//define main blog body"
const mainBlog = document.getElementById("mainBlog");

//insert blog tiles with contents loop
for (let x=0; x<blogs.length; x+=1){
    const blogObject = blogs[x];
    //creates blog container
    const blogContainer = document.createElement('div');
    blogContainer.className = "blog-tile";
    mainBlog.appendChild(blogContainer);
    //gets the blog tile container
    // const blogContainer = document.getElementById("blog-tile");
    const blogImage = document.createElement('img');
    blogImage.setAttribute("src", blogObject.imageSrc);
    blogImage.setAttribute("alt", blogObject.imageAlt);
    // blogImage.src = "images/blog-3.jpg";
    // blogImage.setAttribute("alt", object.imageAlt);
    blogContainer.appendChild(blogImage);
    const blogTitle = document.createElement('h3');
    // blogTitle.textContent = "Teach Your Dog To Fetch";
    blogTitle.textContent = blogObject.blogArticleTitle;
    blogContainer.appendChild(blogTitle);
    // blogContainer.insertBefore(blogImage, blogTitle);
    const blogP1 = document.createElement("p");
    blogP1.textContent = blogObject.p1;
    blogContainer.appendChild(blogP1);
    blogContainer.appendChild(document.createElement("br"));
    blogContainer.appendChild(document.createElement("br"));
    const blogP2 = document.createElement("p");
    blogP2.textContent = blogObject.p2;
    blogContainer.appendChild(blogP2);
}