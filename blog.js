const fields = [
    {
        name: 'Traveling with Your Dog',
        text: 'Iduciendisite quo magnatem iuntum quid quaest ea am, tenderumet adis dolenem quidustrum fuga. Faceaquae estioria derum recuptatur, cum volore, undipsa doloreium hillupta aut es ut alitatuscit ommossum haritatur arum qui officae videbiti corporeium faccull oribus es quidignis ipietus explam sus am aut amet ant fugiatum, utem non reptat ad magnienecto volorent fugia nonsedi gendand itatquos as magnimpor aut molor autatia ad est officimus accae et omnia cus, od qui ate',
        text2: 'Iduciendisite quo magnatem iuntum quid quaest ea am, tenderumet adis dolenem quidustrum fuga. Faceaquae estioria derum recuptatur, cum volore, undipsa doloreium hillupta aut es ut alitatuscit ommossum haritatur arum qui officae videbiti',
        imglink: '../html200-adopt-a-dog/images/blog-1.jpg'
    },
    {
        name: 'How to Walk Multiple Dogs',
        text: 'Iduciendisite quo magnatem iuntum quid quaest ea am, tenderumet adis dolenem quidustrum fuga. Faceaquae estioria derum recuptatur, cum volore, undipsa doloreium hillupta aut es ut alitatuscit ommossum haritatur arum qui officae videbiti corporeium faccull oribus es quidignis ipietus explam sus am aut amet ant fugiatum, utem non reptat ad magnienecto volorent fugia nonsedi gendand itatquos as magnimpor aut molor autatia ad est officimus accae et omnia cus, od qui ate',
        text2: 'Iduciendisite quo magnatem iuntum quid quaest ea am, tenderumet adis dolenem quidustrum fuga. Faceaquae estioria derum recuptatur, cum volore, undipsa doloreium hillupta aut es ut alitatuscit ommossum haritatur arum qui officae videbiti',
        imglink: '../html200-adopt-a-dog/images/blog-2.jpg'
    },
    {
        name: 'Teach Your Dog to Fetch',
        text: 'Iduciendisite quo magnatem iuntum quid quaest ea am, tenderumet adis dolenem quidustrum fuga. Faceaquae estioria derum recuptatur, cum volore, undipsa doloreium hillupta aut es ut alitatuscit ommossum haritatur arum qui officae videbiti corporeium faccull oribus es quidignis ipietus explam sus am aut amet ant fugiatum, utem non reptat ad magnienecto volorent fugia nonsedi gendand itatquos as magnimpor aut molor autatia ad est officimus accae et omnia cus, od qui ate',
        text2: 'Iduciendisite quo magnatem iuntum quid quaest ea am, tenderumet adis dolenem quidustrum fuga. Faceaquae estioria derum recuptatur, cum volore, undipsa doloreium hillupta aut es ut alitatuscit ommossum haritatur arum qui officae videbiti',
        imglink: '../html200-adopt-a-dog/images/blog-3.jpg'
    }
];



for (let i = 0; i < fields.length; i += 1) {
    const field = fields[i];
    const blogsection = document.createElement('section');
    blogsection.setAttribute('class', "sectionblog");

    const clearfix = document.createElement('div');
    clearfix.setAttribute('class', "clearfix");


    const blogimg = document.createElement('img');
    blogimg.setAttribute('src', field.imglink);
    blogimg.setAttribute('class', "mainimage");
    clearfix.appendChild(blogimg);

    const title = document.createElement('title');
    title.setAttribute('title', field.name);
    title.textContent = field.name;
    title.setAttribute('class', "mainh1");

    clearfix.appendChild(title);

    const firstP = document.createElement('P');
    firstP.setAttribute('class', "mainp");
    firstP.innerText = field.text;
    clearfix.appendChild(firstP);

    const secondP = document.createElement('P');
    secondP.innerText = field.text2;
    secondP.setAttribute('class', "mainp");
    clearfix.appendChild(secondP);
    blogsection.appendChild(clearfix);
    document.body.appendChild(blogsection);


}
