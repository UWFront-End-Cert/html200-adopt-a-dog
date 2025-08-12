const fields =[
    {
        image:      'images/blog-1.jpg',
        imageAlt:   'Dog sitting next to person overlooking a rock canyon.',
        title:      'Traveling With Your Dog',
        content:    `Iduciendisite quo magnatem iuntum quid quaest ea am, tenderumet adis dolenem
                    quidustrum fuga. Faceaquae estioria derum recuptatur, cum volore, undipsa doloreium
                    hillupta aut es ut alitatuscit ommossum haritatur arum qui officae videbiti corporeium
                    faccull oribus es quidignis ipietus explam sus am aut amet ant fugiatum, utem non reptat.
                    Uptiusd andesci qui nem aut vendion ectur? Debis que explaut laborenia que doluptur, con
                    et labor abor sant poreperum dio quat que doluptatur aut voluptassim quisciatquam ea ad
                    qui con nes cus esere dolut hicto teni solutenis alit ulparume nonseca estorer spernam
                    voluptassim quisciatquam ea ad qui con nes cus esere dolut hicto teni solutenis alit
                    ulparume nonseca estorer spernam.`
    },
    {
        image:      'images/blog-2.jpg',
        imageAlt:   'Four leashed dogs sitting and looking at the person walking them at outdoor courtyard.',
        title:      'How To Walk Multiple Dogs',
        content:    `Iduciendisite quo magnatem iuntum quid quaest ea am, tenderumet adis dolenem
                    quidustrum fuga. Faceaquae estioria derum recuptatur, cum volore, undipsa doloreium
                    hillupta aut es ut alitatuscit ommossum haritatur arum qui officae videbiti corporeium
                    faccull oribus es quidignis ipietus explam sus am aut amet ant fugiatum, utem non reptat.
                    Uptiusd andesci qui nem aut vendion ectur? Debis que explaut laborenia que doluptur, con
                    et labor abor sant poreperum dio quat que doluptatur aut voluptassim quisciatquam ea ad
                    qui con nes cus esere dolut hicto teni solutenis alit ulparume nonseca estorer spernam
                    voluptassim quisciatquam ea ad qui con nes cus esere dolut hicto teni solutenis alit
                    ulparume nonseca estorer spernam.`
    },
        {
        image:      'images/blog-3.jpg',
        imageAlt:   'Person standing and holding up a ball next to kneeling dog with a sunset colors in the background.',
        title:      'Teach Your Dog To Fetch!',
        content:    `Iduciendisite quo magnatem iuntum quid quaest ea am, tenderumet adis dolenem
                    quidustrum fuga. Faceaquae estioria derum recuptatur, cum volore, undipsa doloreium
                    hillupta aut es ut alitatuscit ommossum haritatur arum qui officae videbiti corporeium
                    faccull oribus es quidignis ipietus explam sus am aut amet ant fugiatum, utem non reptat.
                    Uptiusd andesci qui nem aut vendion ectur? Debis que explaut laborenia que doluptur, con
                    et labor abor sant poreperum dio quat que doluptatur aut voluptassim quisciatquam ea ad
                    qui con nes cus esere dolut hicto teni solutenis alit ulparume nonseca estorer spernam
                    voluptassim quisciatquam ea ad qui con nes cus esere dolut hicto teni solutenis alit
                    ulparume nonseca estorer spernam.`
    }
];

for (let i=0; i<fields.length; i+= 1) {
    const field=fields[i];

    const blogArticle = document.createElement('article');
    blogArticle.className = 'blog-article';

    const blogArticleImg = document.createElement('img');

    const blogArticleDiv = document.createElement('div');
    blogArticleDiv.className = 'blog-text';

    document.getElementsByClassName('main-content')[0].appendChild(blogArticle).appendChild(blogArticleImg);
    document.getElementsByClassName('main-content')[0].appendChild(blogArticle).appendChild(blogArticleDiv);

    blogArticleImg.src = field.image;
    blogArticleImg.width = '200';
    blogArticleImg.height = '200';
    blogArticleImg.alt = field.imageAlt;

    const blogArticleDivTitle = document.createElement('h3');
    const blogArticleDivContent = document.createElement('p');

    document.getElementsByClassName('main-content')[0].appendChild(blogArticle).appendChild(blogArticleDiv).appendChild(blogArticleDivTitle);
    document.getElementsByClassName('main-content')[0].appendChild(blogArticle).appendChild(blogArticleDiv).appendChild(blogArticleDivContent);

    blogArticleDivTitle.textContent = field.title;
    blogArticleDivContent.textContent = field.content;
};