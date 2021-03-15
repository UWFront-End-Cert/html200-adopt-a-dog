function clickHandler(str) {
    alert(str);
}

const blogPosts = ['blog1', 'blog2', 'blog3'];

for (i = 0, i < blogPosts.length; i++) {

//Top blog for blog page

const blogs = document.createElement('article');
blogs.setAttribute('class', 'blog-item');

document.body.append(blogs);

const blogImage = document.createElement('img');
blogImage.src = "images/blog-1.jpg";
blogImage.alt = "A woman sitting looking out over the Grand Canyon with a dog";

const blogTitle = document.createElement('h2');
blogImage.title.textContent = 'Traveling With Your Dog';

const blogInfo1 = document.createElement('p');
blogInfo1.textContent = 'Iduciendisite quo magnatem iuntum quid quaest ea am, tenderumet adis dolenem quidustrum fuga. Faceaquae estioria derum recuptatur, cum volore, undipsa doloreium hillupta aut es ut alitatuscit ommossum haritatur arum qui officae videbiti corporeium faccull oribus es quidignis ipietus explam sus am aut amet ant fugiatum, utem non reptat.';

// Center blog for blog page
const blogImage = document.createElement('img');
blogImage.src = 'images/blog-2.jpg';
blogImage.alt = 'Four dogs sitting resting';

const blogTitle = document.createElement('h2');
blogImage.title.textContent = 'How To Walk Multiple Dogs';

const blogInfo1 = document.createElement('p');
blogInfo1.textContent = 'Iduciendisite quo magnatem iuntum quid quaest ea am, tenderumet adis dolenem quidustrum fuga. Faceaquae estioria derum recuptatur, cum volore, undipsa doloreium hillupta aut es ut alitatuscit ommossum haritatur arum qui officae videbiti corporeium faccull oribus es quidignis ipietus explam sus am aut amet ant fugiatum, utem non reptat.';

}
