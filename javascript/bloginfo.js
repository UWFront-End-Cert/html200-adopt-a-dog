//Refactor the blog page to generate the blog posts dynamically from JavaScript.
//There are a few methods to do this, but some advice...
//Start small. Work on getting just a headline on the page, then start adding more pieces of the blog posts, the attributes, etc. 
//Before working on multiple posts, generate one. Once you have one, see if you can figure out how you can write code that can do what you did over and over again.
//If you can, leverage loops to generate the multiple posts.
//You can save the blog post information (headline, link to image, and blog text) in an object and reference it. Even better would be to create an array of the blog objects and loop through them to get at the information you need.
//Reference the form building exercise in the slides as a guide for how this might work.

const blog = [
    {
        title: "Travelling with Your Dog",
        source: "./images/blog-1.jpg",
        alt: "person with dog on cliff",
        content: "Iduciendisite quo magnatem iuntum quid quaest ea am, tenderumet adis dolenem quidustrum fuga. Faceaquae estioria derum recuptatur, cum volore, undipsa doloreium hillupta aut es ut alitatuscit ommossum haritatur arum qui officae videbiticorporeium faccull oribus es quidignis ipietus explam sus am aut amet ant fugiatum, utem non reptat. Uptiusd andesci qui nem aut vendion ectur? Debis que explaut laborenia que doluptur, con et labor abor sant poreperum dio quat que doluptatur aut voluptassim quisciatquam ea ad qui con nes cus esere dolut hicto teni solutenis alit ulparumenonseca estorer spernam voluptassim quisciatquam ea ad qui con nes cus esere dolut hicto teni solutenis alit ulparume nonseca estorer spernam."
    }, 
    {
        title: "How to Walk Multiple Dogs",
        source: "./images/blog-2.jpg",
        alt: "four dogs in chain on street",
        content: "Iduciendisite quo magnatem iuntum quid quaest ea am, tenderumet adis dolenem quidustrum fuga. Faceaquae estioria derum recuptatur, cum volore, undipsa doloreium hillupta aut es ut alitatuscit ommossum haritatur arum qui officae videbiticorporeium faccull oribus es quidignis ipietus explam sus am aut amet ant fugiatum, utem non reptat. Uptiusd andesci qui nem aut vendion ectur? Debis que explaut laborenia que doluptur, con et labor abor sant poreperum dio quat que doluptatur aut voluptassim quisciatquam ea ad qui con nes cus esere dolut hicto teni solutenis alit ulparumenonseca estorer spernam voluptassim quisciatquam ea ad qui con nes cus esere dolut hicto teni solutenis alit ulparume nonseca estorer spernam."
    }, 
    {
        title: "Teach Your Dog To Fetch!",
        source: "./images/blog-3.jpg",
        alt: "dog with person play ball during sunset",
        content: "Iduciendisite quo magnatem iuntum quid quaest ea am, tenderumet adis dolenem quidustrum fuga. Faceaquae estioria derum recuptatur, cum volore, undipsa doloreium hillupta aut es ut alitatuscit ommossum haritatur arum qui officae videbiticorporeium faccull oribus es quidignis ipietus explam sus am aut amet ant fugiatum, utem non reptat. Uptiusd andesci qui nem aut vendion ectur? Debis que explaut laborenia que doluptur, con et labor abor sant poreperum dio quat que doluptatur aut voluptassim quisciatquam ea ad qui con nes cus esere dolut hicto teni solutenis alit ulparumenonseca estorer spernam voluptassim quisciatquam ea ad qui con nes cus esere dolut hicto teni solutenis alit ulparume nonseca estorer spernam."
    }
]


for (let i = 0; i < blog.length; i++) {
     //locate the section
    const section = document.getElementById('blogs');
    //add an article to the section with the defined classes for CSS
    const article = document.createElement('article');
    article.setAttribute('class','blogitem');

    //add image to article
    const blogimage = document.createElement('img');
    blogimage.setAttribute('src', blog[i].source)
    blogimage.setAttribute('class','blogimage col span_5_of_12')
    blogimage.setAttribute('alt','person with dog on cliff')
    article.appendChild(blogimage);

    //create a sub section inside the article
    const blogtext = document.createElement('blogtext');
    blogtext.setAttribute('class','col span_7_of_12')

    //add title to the sub section
    const blogtitle = document.createElement('h3');
    blogtitle.textContent = blog[i].title;
    blogtext.appendChild(blogtitle);

    //add context to the sub section
    const blogcontent = document.createElement('p');
    blogcontent.textContent = blog[i].content;
    blogtext.appendChild(blogcontent);

    //add subsection to the article
    article.appendChild(blogtext);

    //add article to the section
    section.appendChild(article);
}
