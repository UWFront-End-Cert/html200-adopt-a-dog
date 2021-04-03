const blogContainer = document.createElement('blogContainer');
// blogPageContainer.textContent = "Adoptadog Blog";
document.body.appendChild(blogContainer);

const h2 = document.createElement('h2');
h2.textContent = "Adoptadog Blog";
document.getElementsByTagName('blogContainer')[0].appendChild(h2);
h2.classList.add('blogheading');

const blogPosts = [
    { img : "images/blog-1.jpg", h3 : "Traveling With Your Dog",   p : "Lorem1 ipsum dolor sit amet consectetur adipisicing elit. Praesentium aspernatur necessitatibus molestias natus voluptates dolorem, delectus ab vero iure nam rerum tempore eligendi modi alias sequi consectetur explicabo deserunt, veniam, molestiae voluptas itaque. Magni ipsam facilis pariatur? Ad numquam a eum vel rem impedit, laboriosam perspiciatis, ipsam qui omnis laudantium totam officiis commodi autem iusto minima. Deserunt, amet labore aperiam tenetur incidunt voluptatum dolores iste blanditiis ducimus eligendi perspiciatis corporis, id iusto suscipit enim quod repudiandae inventore veniam, molestiae sunt sint!<br><br>  Corporis beatae soluta eveniet, blanditiis voluptates porro nesciunt veniam perferendis nam suscipit obcaecati rerum consectetur nostrum aliquam, sint vero?"},
    { img : "images/blog-2.jpg", h3 : "How To Walk Multiple Dogs", p : "Lorem2 ipsum dolor sit amet consectetur adipisicing elit. Praesentium aspernatur necessitatibus molestias natus voluptates dolorem, delectus ab vero iure nam rerum tempore eligendi modi alias sequi consectetur explicabo deserunt, veniam, molestiae voluptas itaque. Magni ipsam facilis pariatur? Ad numquam a eum vel rem impedit, laboriosam perspiciatis, ipsam qui omnis laudantium totam officiis commodi autem iusto minima. Deserunt, amet labore aperiam tenetur incidunt voluptatum dolores iste blanditiis ducimus eligendi perspiciatis corporis, id iusto suscipit enim quod repudiandae inventore veniam, molestiae sunt sint!<br><br>  Corporis beatae soluta eveniet, blanditiis voluptates porro nesciunt veniam perferendis nam suscipit obcaecati rerum consectetur nostrum aliquam, sint vero?"},
    { img : "images/blog-3.jpg", h3 : "Teach Your Dog To Fetch",   p : "Lorem3 ipsum dolor sit amet consectetur adipisicing elit. Praesentium aspernatur necessitatibus molestias natus voluptates dolorem, delectus ab vero iure nam rerum tempore eligendi modi alias sequi consectetur explicabo deserunt, veniam, molestiae voluptas itaque. Magni ipsam facilis pariatur? Ad numquam a eum vel rem impedit, laboriosam perspiciatis, ipsam qui omnis laudantium totam officiis commodi autem iusto minima. Deserunt, amet labore aperiam tenetur incidunt voluptatum dolores iste blanditiis ducimus eligendi perspiciatis corporis, id iusto suscipit enim quod repudiandae inventore veniam, molestiae sunt sint!<br><br>  Corporis beatae soluta eveniet, blanditiis voluptates porro nesciunt veniam perferendis nam suscipit obcaecati rerum consectetur nostrum aliquam, sint vero?"}
];

const blogs = function() {
    for (let i = 0; i < blogPosts.length; i++) {
        let blogPost = blogPosts[i];

        const img = document.createElement('img');
        img.src = blogPost.img;
        img.setAttribute('alt', 'Blog Post Featured Photo.');
        img.setAttribute('sizes', '(max-width: 20rem) 200px, 400px');
        document.getElementsByTagName('blogContainer')[0].appendChild(img);
        img.classList.add('blogimgs');

        const h3 = document.createElement('h3');
        h3.textContent = blogPost.h3;
        document.getElementsByTagName('blogContainer')[0].appendChild(h3);
        h3.classList.add('blogsubheads');

        const p = document.createElement('p');
        p.textContent = blogPost.p;
        document.getElementsByTagName('blogContainer')[0].appendChild(p);
        console.log(blogPost);
        p.classList.add('container8');
    }};

    blogs(blogPosts);

// document.body.appendChild(div1);
//
// const h2 = document.createElement('h2');
// h2.textContent = "Adoptadog Blog";
// document.body.appendChild(h2);
//
//
// const img1 = document.createElement('img');
// img.src = "images/blog-1.jpg";
// // img.setAttribute('alt', 'Blog Featured Photos.');
// // img.setAttribute('sizes', '(max-width: 20rem)');
// document.body.appendChild(img1);


// const dogBlogs = [
//   { img : "images/blog-1.jpg", h3 : "Traveling With Your Dog", p : "Iduciendisite quo magnatem iuntum quid quaest ea am, tenderumet adis dolenemquidustrum fuga. Faceaquae estioria derum recuptatur, cum volore, undipsa doloreiumhillupta aut es ut alitatuscit ommossum haritatur arum qui officae videbiti corporeiumfaccull oribus es quidignis ipietus explam sus am aut amet ant fugiatum, utem non reptat."},
//   { img : "images/blog-2.jpg", h3 : "How To Walk Multiple Dogs", p : "Iduciendisite quo magnatem iuntum quid quaest ea am, tenderumet adis dolenemquidustrum fuga. estioria derum recuptatur, cum volore, undipsa doloreiumhillupta aut es ut alitatuscit ommossum haritatur arum qui officae videbiti corporeiumfaccull oribus es quidignis ipietus explam sus am aut amet ant fugiatum, utem non reptat."},
//   { img : "images/blog-3.jpg", h3 : "Teach Your Dog To Fetch", p : "Iduciendisite quo magnatem iuntum quid quaest ea am, tenderumet adis dolenemquidustrum fuga. Faceaquae estioria derum recuptatur, cum volore, undipsa doloreiumhillupta aut es ut alitatuscit ommossum haritatur arum qui officae videbiti corporeiumfaccull oribus es quidignis ipietus explam sus am aut amet ant fugiatum, utem non reptat."}
// ];
//
// const postDogBlogs = function() {
//   for (let i = 0; i < dogBlogs.length; i++) {
//     let dogBlog = dogBlog[i];
//
//     const img = document.createElement('img');
//     img.src = dogBlog.img;
//     img.setAttribute('alt', 'Blog Featured Photos.');
//     img.setAttribute('sizes', '(max-width: 20rem)');
//     document.getElementsByTagName('div')[0].appendcChild(img);
//
//     const h3 = document.createElement('h3');
//     h3.textContent = dogBlog.h2;
//     document.getElementsByTagName('div')[0].appendcChild(h3);
//
//     const p = document.createElement('p');
//     p.textContent = dogBlog.p;
//     document.getElementsByTagName('div')[0].appendcChild(p);
//     // h3.setAttribute('class, ')
//   }
// };
//
// postDogBlogs(dogBlogs);

// div.appendChild(img1);



// function insertAfter(referenceNode, newNode) {
//   referenceNode.parentNode.insertBefore(newNode, referenceNode.nextSibling);
// }
//
// let nav = document.getElementById("nav");
// insertAfter("nav", "div");


// document.body.appendChild(content);
// div.appendChild(content);





// const blogImage = document.createElement("img");
//
// blogImage.src =








//
//   const h2 = document.createElement
//
// div.appendChild
