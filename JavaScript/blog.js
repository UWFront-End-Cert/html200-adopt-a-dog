const blogs = [
    {
        imgSrc: 'images/blog-1.jpg',
        imgAlt: 'Woman hugging her dog at a canyon',
        idNum: 'blog-1',
        title: 'Traveling With Your Dog',
        p1: 'Iduciendisite quo magnatem iuntum quid quaest ea am, tenderumet' +
        ' adis dolenem quidustrum fuga. Faceaquae estioria derum recuptatur,' +
        ' cum volore, undipsa doloreium hillupta aut es ut alitatuscit' +
        ' ommossum haritatur arum qui officae videbiti corporeium faccull' +
        ' oribus es quidignis ipietus explam sus am aut amet ant fugiatum,' +
        ' utem non reptat.',
        p2: 'Uptiusd andesci qui nem aut vendion ectur? Debis que explaut' +
        ' laborenia que doluptur, con et labor abor sant poreperum dio quat' +
        ' que doluptatur aut voluptassim quisciatquam ea ad qui con nes cus' +
        ' esere dolut hicto teni solutenis alit ulparume nonseca estorer' +
        ' spernam voluptassim quisciatquam ea ad qui con nes cus esere dolut' +
        ' hicto teni solutenis alit ulparume nonseca estorer spernam.'
    },
    {
        imgSrc: 'images/blog-2.jpg',
        imgAlt: 'Many dogs on seperate leashes all held by the same person',
        idNum: 'blog-2',
        title: 'How To Walk Multiple Dogs',
        p1: 'Iduciendisite quo magnatem iuntum quid quaest ea am, tenderumet' +
        ' adis dolenem quidustrum fuga. Faceaquae estioria derum recuptatur,' +
        ' cum volore, undipsa doloreium hillupta aut es ut alitatuscit' +
        ' ommossum haritatur arum qui officae videbiti corporeium faccull' +
        ' oribus es quidignis ipietus explam sus am aut amet ant fugiatum,' +
        ' utem non reptat.',
        p2: 'Uptiusd andesci qui nem aut vendion ectur? Debis que explaut' +
        ' laborenia que doluptur, con et labor abor sant poreperum dio quat' +
        ' que doluptatur aut voluptassim quisciatquam ea ad qui con nes cus' +
        ' esere dolut hicto teni solutenis alit ulparume nonseca estorer' +
        ' spernam voluptassim quisciatquam ea ad qui con nes cus esere dolut' +
        ' hicto teni solutenis alit ulparume nonseca estorer spernam.'
    },
    {
        imgSrc: 'images/blog-3.jpg',
        imgAlt: 'A woman playing fetch with her dog with a beautiful sunset' +
        ' in the background',
        idNum: 'blog-3',
        title: 'Teach Your Dog To Fetch!',
        p1: 'Iduciendisite quo magnatem iuntum quid quaest ea am, tenderumet' +
        ' adis dolenem quidustrum fuga. Faceaquae estioria derum recuptatur,' +
        ' cum volore, undipsa doloreium hillupta aut es ut alitatuscit' +
        ' ommossum haritatur arum qui officae videbiti corporeium faccull' +
        ' oribus es quidignis ipietus explam sus am aut amet ant fugiatum,' +
        ' utem non reptat.',
        p2: 'Uptiusd andesci qui nem aut vendion ectur? Debis que explaut' +
        ' laborenia que doluptur, con et labor abor sant poreperum dio quat' +
        ' que doluptatur aut voluptassim quisciatquam ea ad qui con nes cus' +
        ' esere dolut hicto teni solutenis alit ulparume nonseca estorer' +
        ' spernam voluptassim quisciatquam ea ad qui con nes cus esere dolut' +
        ' hicto teni solutenis alit ulparume nonseca estorer spernam.'
    }
];

const root = document.getElementById('main-content');

for (let i = 0; i < blogs.length; i++) {
    const blog = blogs[i];

    const img = document.createElement('img');
    img.setAttribute('class', 'top-spacer blog-img');
    img.setAttribute('src', blog.imgSrc);
    img.setAttribute('alt', blog.imgAlt);

    const h4 = document.createElement('h4');
    h4.setAttribute('class', 'occupy-solo');
    h4.textContent = blog.title;

    const p1 = document.createElement('p');
    p1.textContent = blog.p1;

    const p2 = document.createElement('p');
    p2.textContent = blog.p2;

    const article = document.createElement('article');
    article.setAttribute('id', blog.idNum);
    article.setAttribute('class', 'main top-spacer');
    article.appendChild(h4);
    article.appendChild(p1);
    article.appendChild(p2);

    const div = document.createElement('div');
    div.setAttribute('class', 'divide');
    div.appendChild(img);
    div.appendChild(article);

    root.appendChild(div);
}
