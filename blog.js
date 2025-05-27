let blogContents = [
    {
        title: 'Traveling With Your Dog',
        photo: 'images/blog-1.jpg',
        altText: 'a person and a dog are looking at the Grand Canyon',
        paragraph1: 'Iduciendisite quo magnatem iuntum quid quaest ea am, tenderumet adis dolenem quidustrum fuga. Faceaquae estioria derum recuptatur, cum volore, undipsa dolereium hillupta aut es ut alitatuscit ommossum haritatur arum qui officae videbiti corporeium faccull oribus es quidignis ipietus explam sus am aut amet ant fugiatum, utem non reptat.',
        paragraph2: 'Uptiusd andesci qui nem aut vendion ectur? Debis que explaut laborenia que doluptur, con et labor abor sant poreperum dio quat que doluptautr aut voluptassim quisclatquam ea ad qui con nes cus esere dolut hicto teni solutenis alit ulparume nonseca estorer spernam voluptassim quisciatquam ea ad qui con nes cus esere dolut hicto teni solutenis alit ulparume nonseca estorer spernam.'
    },
    {
        title: 'How to Walk Multiple Dogs',
        photo: 'images/blog-2.jpg',
        altText: 'four dogs are looking at the same direction',
        paragraph1: 'Iduciendisite quo magnatem iuntum quid quaest ea am, tenderumet adis dolenem quidustrum fuga. Faceaquae estioria derum recuptatur, cum volore, undipsa dolereium hillupta aut es ut alitatuscit ommossum haritatur arum qui officae videbiti corporeium faccull oribus es quidignis ipietus explam sus am aut amet ant fugiatum, utem non reptat.',
        paragraph2: 'Uptiusd andesci qui nem aut vendion ectur? Debis que explaut laborenia que doluptur, con et labor abor sant poreperum dio quat que doluptautr aut voluptassim quisclatquam ea ad qui con nes cus esere dolut hicto teni solutenis alit ulparume nonseca estorer spernam voluptassim quisciatquam ea ad qui con nes cus esere dolut hicto teni solutenis alit ulparume nonseca estorer spernam.'
    },
    {
        title: 'Teach Your Dog To Fetch!',
        photo: 'images/blog-3.jpg',
        altText: 'a woman is teaching a dog to fetch a ball',
        paragraph1: 'Iduciendisite quo magnatem iuntum quid quaest ea am, tenderumet adis dolenem quidustrum fuga. Faceaquae estioria derum recuptatur, cum volore, undipsa dolereium hillupta aut es ut alitatuscit ommossum haritatur arum qui officae videbiti corporeium faccull oribus es quidignis ipietus explam sus am aut amet ant fugiatum, utem non reptat.',
        paragraph2: 'Uptiusd andesci qui nem aut vendion ectur? Debis que explaut laborenia que doluptur, con et labor abor sant poreperum dio quat que doluptautr aut voluptassim quisclatquam ea ad qui con nes cus esere dolut hicto teni solutenis alit ulparume nonseca estorer spernam voluptassim quisciatquam ea ad qui con nes cus esere dolut hicto teni solutenis alit ulparume nonseca estorer spernam.'
    }
];

const main = document.createElement('main');
document.body.appendChild(main);

const heading = document.createElement('h2');
heading.textContent = 'Adoptadog Blog';
main.appendChild(heading); //heading appears BEFORE blog posts

for (let i = 0; i < blogContents.length; i ++) {
    let content = blogContents[i];

    let blog = document.createElement('article');
    blog.className = "blog-container";

    let contentInfo = document.createElement('div');
    contentInfo.className = "blog-info";


    let title = document.createElement('h3');
    title.textContent = content.title;

    let photo = document.createElement('img');
    photo.src = content.photo;
    photo.alt = content.altText;

    let paragraph1 = document.createElement('p');
    paragraph1.textContent = content.paragraph1;

    let paragraph2 = document.createElement('p');
    paragraph2.textContent = content.paragraph2;

    contentInfo.appendChild(title);
    contentInfo.appendChild(paragraph1);
    contentInfo.appendChild(paragraph2);

    blog.appendChild(photo);
    blog.appendChild(contentInfo);

    main.appendChild(blog);
}