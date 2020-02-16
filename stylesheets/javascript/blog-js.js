/*blog-header*/
const title = document.createElement('h2');
title.className = 'blog-header';
title.textContent = 'Adoptadog blog';
document.body.appendChild(title);
const footer = document.getElementById('universal-footer');
document.body.insertBefore(title, footer);

/*blog-section*/
const section = document.createElement('section');
section.className = 'blog-section';
document.body.insertBefore(section, footer);

/*blog-image-container*/
const imageContainer = document.createElement('div');
imageContainer.className = 'blog-image';
section.appendChild(imageContainer);

/*blog-body*/
const blogContainer = document.createElement('div');
blogContainer.className = 'blog-body';
section.appendChild(blogContainer);

/*image*/
const image = document.createElement('IMG');
image.className = 'image';
image.setAttribute('src', 'images/blog-1.jpg');
image.setAttribute('alt', 'Girl hugging her dog as they sit on a cliff overlooking the Grand Canyon.')
imageContainer.appendChild(image);

/*post-header*/
const header = document.createElement('h3');
header.className = 'post-header';
header.textContent = 'Traveling With Your Dog';
blogContainer.appendChild(header);

/*p-1*/
const line1 = document.createElement('p');
line1.textContent = 'Iduciendisite quo magnatem iuntum quid quaest ea am, tenderumet adis dolenem quidustrum fuga. Faceaquae estioria derum recuptatur, cum volore, undipsa doloreium hillupta aut es ut alitatuscit ommossum haritatur arum qui officae videbiti corporeium faccull oribus es quidignis ipietus explam sus am aut amet ant fugiatum, utem non reptat.';
blogContainer.appendChild(line1);

/*p-2*/
const line2 = document.createElement('p');
line2.textContent = 'Iduciendisite quo magnatem iuntum quid quaest ea am, tenderumet adis dolenem quidustrum fuga. Faceaquae estioria derum recuptatur, cum volore, undipsa doloreium hillupta aut es ut alitatuscit ommossum haritatur arum qui officae videbiti corporeium faccull oribus es quidignis ipietus explam sus am aut amet ant fugiatum, utem non reptat.';
blogContainer.appendChild(line2);



/*loop blog post generation*/
const blog = [
    {
        image: 'images/blog-2.jpg',
        alt: 'Four dogs on leashes, sitting and looking attentively at their walker',
        header: 'How to Walk Multiple Dogs',
        line1: 'Iduciendisite quo magnatem iuntum quid quaest ea am, tenderumet adis dolenem quidustrum fuga. Faceaquae estioria derum recuptatur, cum volore, undipsa doloreium hillupta aut es ut alitatuscit ommossum haritatur arum qui officae videbiti corporeium faccull oribus es quidignis ipietus explam sus am aut amet ant fugiatum, utem non reptat.',
        line2: 'Uptiusd andesci qui nem aut vendion ectur? Debis que explaut laborenia que doluptur, con et labor abor sant poreperum dio quat que doluptatur aut voluptassim quisciatquam ea ad qui con nes cus esere dolut hicto teni solutenis alit ulparume nonseca estorer spernam voluptassim quisciatquam ea ad qui con nes cus esere dolut hicto teni solutenis alit ulparume nonseca estorer spernam.'
    },
    {
        image: 'images/blog-3.jpg',
        alt: 'The silhouette of a girl and a dog at sunset, playing fetch',
        header: 'Teach Your Dog to Fetch!',
        line1: 'Iduciendisite quo magnatem iuntum quid quaest ea am, tenderumet adis dolenem quidustrum fuga. Faceaquae estioria derum recuptatur, cum volore, undipsa doloreium hillupta aut es ut alitatuscit ommossum haritatur arum qui officae videbiti corporeium faccull oribus es quidignis ipietus explam sus am aut amet ant fugiatum, utem non reptat.',
        line2: 'Uptiusd andesci qui nem aut vendion ectur? Debis que explaut laborenia que doluptur, con et labor abor sant poreperum dio quat que doluptatur aut voluptassim quisciatquam ea ad qui con nes cus esere dolut hicto teni solutenis alit ulparume nonseca estorer spernam voluptassim quisciatquam ea ad qui con nes cus esere dolut hicto teni solutenis alit ulparume nonseca estorer spernam.'
    }
];

for (let i = 0; i < blog.length; i += 1) {
    const object = blog[i];

    const section = document.createElement('section');
    section.className = 'blog-section';
    document.body.appendChild(section);
    const footer = document.getElementById('universal-footer');
    document.body.insertBefore(section, footer);

    const imageContainer = document.createElement('div');
    imageContainer.className = 'blog-image';

    const image = document.createElement('IMG');
    image.setAttribute('src', object.image);
    image.setAttribute('alt', object.alt);
    image.className = 'image';

    const blogContainer = document.createElement('div');
    blogContainer.className = 'blog-body';

    const header = document.createElement('h3');
    header.textContent = object.header;
    header.className = 'post-header';

    const line1 = document.createElement('p');
    line1.textContent = object.line1;

    const line2 = document.createElement('p');
    line2.textContent = object.line2;


    section.appendChild(imageContainer);
    imageContainer.appendChild(image);
    section.appendChild(blogContainer);
    blogContainer.appendChild(header);
    blogContainer.appendChild(line1);
    blogContainer.appendChild(line2);

}
