const container = document.getElementById('container')
const blogInfo = [{
        'image': 'images/blog-1.jpg',
        'alt': 'Person viewing the Grand Canyon with their dog',
        'h3': 'Traveling With Your Dog',
        'p': 'Iduciendisite quo magnatem iuntum quid quaest ea am, tenderumet adis dolenem quidustrum fuga. Faceaquae estioria derum recuptatur, cum volore, undipsa doloreium hillupta aut es ut alitatuscit ommossum haritatur arum qui officae videbiti corporeium faccull oribus es quidignis ipietus explam',
        'p2': 'Uptiusd andesci qui nem aut vendion ectur? Debis que explaut laborenia que doluptur, con et labor abor sant poreperum dio quat que doluptatur aut voluptassim quisciatquam ea ad qui con nes cus esere dolut hicto teni solutenis alit ulparume nonseca estorer spernam voluptassim quisciatquam ea ad qui con nes cus esere dolut hicto teni solutenis alit ulparume nonseca estorer spernam.'

    },

    {
        'image': 'images/blog-2.jpg',
        'alt': 'Multiple dogs sitting while on leashes',
        'h3': 'How To Walk Multiple Dogs',
        'p': 'Iduciendisite quo magnatem iuntum quid quaest ea am, tenderumet adis dolenem quidustrum fuga. Faceaquae estioria derum recuptatur, cum volore, undipsa doloreium hillupta aut es ut alitatuscit ommossum haritatur arum qui officae videbiti corporeium faccull oribus es quidignis ipietus explam',
        'p2': 'Uptiusd andesci qui nem aut vendion ectur? Debis que explaut laborenia que doluptur, con et labor abor sant poreperum dio quat que doluptatur aut voluptassim quisciatquam ea ad qui con nes cus esere dolut hicto teni solutenis alit ulparume nonseca estorer spernam voluptassim quisciatquam ea ad qui con nes cus esere dolut hicto teni solutenis alit ulparume nonseca estorer spernam.'
    },

    {
        'image': 'images/blog-3.jpg',
        'alt': 'Person playing ball with their dog in the sunset',
        'h3': 'Teach Your Dog To Fetch!',
        'p': 'Iduciendisite quo magnatem iuntum quid quaest ea am, tenderumet adis dolenem quidustrum fuga. Faceaquae estioria derum recuptatur, cum volore, undipsa doloreium hillupta aut es ut alitatuscit ommossum haritatur arum qui officae videbiti corporeium faccull oribus es quidignis ipietus explam',
        'p2': 'Uptiusd andesci qui nem aut vendion ectur? Debis que explaut laborenia que doluptur, con et labor abor sant poreperum dio quat que doluptatur aut voluptassim quisciatquam ea ad qui con nes cus esere dolut hicto teni solutenis alit ulparume nonseca estorer spernam voluptassim quisciatquam ea ad qui con nes cus esere dolut hicto teni solutenis alit ulparume nonseca estorer spernam.'
    }
]

for (let i = 0; i < blogInfo.length; i++) {
    const article = document.createElement('article');
    article.setAttribute('class', 'blog');
    container.appendChild(article);


    const image = document.createElement('img');
    image.setAttribute('src', 'images/blog-1.jpg');
    image.setAttribute('alt', 'Person viewing the Grand Canyon with their dog');
    article.appendChild(image);

    const blogDiv = document.createElement('div');
    article.appendChild(blogDiv);

    const blogHeader = document.createElement('h3');
    blogHeader.innerHTML = '<h3>Traveling With Your Dog</h3>';
    blogDiv.appendChild(blogHeader);

    const paragraph1 = document.createElement('p');
    paragraph1.innerHTML = '<p>Iduciendisite quo magnatem iuntum quid quaest ea am, tenderumet adis dolenem quidustrum fuga. Faceaquae estioria derum recuptatur, cum volore, undipsa doloreium hillupta aut es ut alitatuscit ommossum haritatur arum qui officae videbiti corporeium faccull oribus es quidignis ipietus explam</p>';
    blogDiv.appendChild(paragraph1);

    const paragraph2 = document.createElement('p');
    paragraph2.innerHTML = '<p>Uptiusd andesci qui nem aut vendion ectur? Debis que explaut laborenia que doluptur, con et labor abor sant poreperum dio quat que doluptatur aut voluptassim quisciatquam ea ad qui con nes cus esere dolut hicto teni solutenis alit ulparume nonseca estorer spernam voluptassim quisciatquam ea ad qui con nes cus esere dolut hicto teni solutenis alit ulparume nonseca estorer spernam.</p>';
    blogDiv.appendChild(paragraph2);
}