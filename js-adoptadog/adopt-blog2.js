// 3.4.21 refactor to reduce lines of code
const blogPageContainer = document.createElement('blogPageContainer');
// blogPageContainer.textContent = "Adoptadog Blog";
document.getElementsByTagName('div')[0].appendChild(blogPageContainer);

const h1 = document.createElement('h1');
h1.textContent = "Adoptadog Blog";
document.getElementsByTagName('blogPageContainer')[0].appendChild(h1);

const blogElements = [
    { img : "images/blog-1.jpg", h2 : "Traveling With Your Dog",   p : "XLorem1 ipsum dolor sit amet consectetur adipisicing elit. Praesentium aspernatur necessitatibus molestias natus voluptates dolorem, delectus ab vero iure nam rerum tempore eligendi modi alias sequi consectetur explicabo deserunt, veniam, molestiae voluptas itaque. Magni ipsam facilis pariatur? Ad numquam a eum vel rem impedit, laboriosam perspiciatis, ipsam qui omnis laudantium totam officiis commodi autem iusto minima. Deserunt, amet labore aperiam tenetur incidunt voluptatum dolores iste blanditiis ducimus eligendi perspiciatis corporis, id iusto suscipit enim quod repudiandae inventore veniam, molestiae sunt sint!<br><br>  Corporis beatae soluta eveniet, blanditiis voluptates porro nesciunt veniam perferendis nam suscipit obcaecati rerum consectetur nostrum aliquam, sint vero?"},
    { img : "images/blog-2.jpg", h2 : "How To Walk Multiple Dogs", p : "Lorem2 ipsum dolor sit amet consectetur adipisicing elit. Praesentium aspernatur necessitatibus molestias natus voluptates dolorem, delectus ab vero iure nam rerum tempore eligendi modi alias sequi consectetur explicabo deserunt, veniam, molestiae voluptas itaque. Magni ipsam facilis pariatur? Ad numquam a eum vel rem impedit, laboriosam perspiciatis, ipsam qui omnis laudantium totam officiis commodi autem iusto minima. Deserunt, amet labore aperiam tenetur incidunt voluptatum dolores iste blanditiis ducimus eligendi perspiciatis corporis, id iusto suscipit enim quod repudiandae inventore veniam, molestiae sunt sint!<br><br>  Corporis beatae soluta eveniet, blanditiis voluptates porro nesciunt veniam perferendis nam suscipit obcaecati rerum consectetur nostrum aliquam, sint vero?"},
    { img : "images/blog-3.jpg", h2 : "Teach Your Dog To Fetch",   p : "Lorem3 ipsum dolor sit amet consectetur adipisicing elit. Praesentium aspernatur necessitatibus molestias natus voluptates dolorem, delectus ab vero iure nam rerum tempore eligendi modi alias sequi consectetur explicabo deserunt, veniam, molestiae voluptas itaque. Magni ipsam facilis pariatur? Ad numquam a eum vel rem impedit, laboriosam perspiciatis, ipsam qui omnis laudantium totam officiis commodi autem iusto minima. Deserunt, amet labore aperiam tenetur incidunt voluptatum dolores iste blanditiis ducimus eligendi perspiciatis corporis, id iusto suscipit enim quod repudiandae inventore veniam, molestiae sunt sint!<br><br>  Corporis beatae soluta eveniet, blanditiis voluptates porro nesciunt veniam perferendis nam suscipit obcaecati rerum consectetur nostrum aliquam, sint vero?"}    
];

const populateBlogPage = function() {
    for (let i = 0; i < blogElements.length; i++) {
        let blogElement = blogElements[i];

        const img = document.createElement('img');
        img.src = blogElement.img;

        img.setAttribute('alt', 'Descripion of featured dog.');
        // img.setAttribute('srcset', 'images/blog-1.jpg 600w, images/blog-1.jpg 300w');
        img.setAttribute('sizes', '(max-width: 600px) 200px, 400px');
        document.getElementsByTagName('blogPageContainer')[0].appendChild(img);

        const h2 = document.createElement('h2');
        h2.textContent = blogElement.h2;
        h2.setAttribute('class', 'dog-blog');
        document.getElementsByTagName('blogPageContainer')[0].appendChild(h2);

        const p = document.createElement('p');
        p.textContent = blogElement.p;
        document.getElementsByTagName('blogPageContainer')[0].appendChild(p);
        console.log(blogElement);
    }};

    populateBlogPage(blogElements);


// next 20+ lines are working perfect but need styling, do not remove
// const blogElements = [
//     { img : "images/blog-1.jpg", h2 : "Traveling With Your Dog",   p : "Lorem1 ipsum dolor sit amet consectetur adipisicing elit. Praesentium aspernatur necessitatibus molestias natus voluptates dolorem, delectus ab vero iure nam rerum tempore eligendi modi alias sequi consectetur explicabo deserunt, veniam, molestiae voluptas itaque. Magni ipsam facilis pariatur? Ad numquam a eum vel rem impedit, laboriosam perspiciatis, ipsam qui omnis laudantium totam officiis commodi autem iusto minima. Deserunt, amet labore aperiam tenetur incidunt voluptatum dolores iste blanditiis ducimus eligendi perspiciatis corporis, id iusto suscipit enim quod repudiandae inventore veniam, molestiae sunt sint!<br><br>  Corporis beatae soluta eveniet, blanditiis voluptates porro nesciunt veniam perferendis nam suscipit obcaecati rerum consectetur nostrum aliquam, sint vero?"},
//     { img : "images/blog-2.jpg", h2 : "How To Walk Multiple Dogs", p : "Lorem2 ipsum dolor sit amet consectetur adipisicing elit. Praesentium aspernatur necessitatibus molestias natus voluptates dolorem, delectus ab vero iure nam rerum tempore eligendi modi alias sequi consectetur explicabo deserunt, veniam, molestiae voluptas itaque. Magni ipsam facilis pariatur? Ad numquam a eum vel rem impedit, laboriosam perspiciatis, ipsam qui omnis laudantium totam officiis commodi autem iusto minima. Deserunt, amet labore aperiam tenetur incidunt voluptatum dolores iste blanditiis ducimus eligendi perspiciatis corporis, id iusto suscipit enim quod repudiandae inventore veniam, molestiae sunt sint!<br><br>  Corporis beatae soluta eveniet, blanditiis voluptates porro nesciunt veniam perferendis nam suscipit obcaecati rerum consectetur nostrum aliquam, sint vero?"},
//     { img : "images/blog-3.jpg", h2 : "Teach Your Dog To Fetch",   p : "Lorem3 ipsum dolor sit amet consectetur adipisicing elit. Praesentium aspernatur necessitatibus molestias natus voluptates dolorem, delectus ab vero iure nam rerum tempore eligendi modi alias sequi consectetur explicabo deserunt, veniam, molestiae voluptas itaque. Magni ipsam facilis pariatur? Ad numquam a eum vel rem impedit, laboriosam perspiciatis, ipsam qui omnis laudantium totam officiis commodi autem iusto minima. Deserunt, amet labore aperiam tenetur incidunt voluptatum dolores iste blanditiis ducimus eligendi perspiciatis corporis, id iusto suscipit enim quod repudiandae inventore veniam, molestiae sunt sint!<br><br>  Corporis beatae soluta eveniet, blanditiis voluptates porro nesciunt veniam perferendis nam suscipit obcaecati rerum consectetur nostrum aliquam, sint vero?"}    
// ];

// for (let i = 0; i < blogElements.length; i++) {
//     let blogElement = blogElements[i];

//     const img = document.createElement('img');
//     img.src = blogElement.img;

//     document.getElementsByTagName('div')[0].appendChild(img);

//     const h2 = document.createElement('h2');
//     h2.textContent = blogElement.h2;
//     document.getElementsByTagName('div')[0].appendChild(h2);


//     const p = document.createElement('p');
//     p.textContent = blogElement.p;
//     document.getElementsByTagName('div')[0].appendChild(p);
// }    

// ************* below here is reference only *********

    // const label = document.createElement('label');
    // label.textContent = field.label;
    // label.setAttribute('for', field.name);

    // const input = document.createElement('input');
    // input.setAttribute('id', field.name);

    // form.appendChild(label);
    // form.appendChild(input);

/* <div id="_images"></div>
<script>
var images = {  // images with properties
    image1 : {url:'http://image1',property:'value'},
    image2 : {url:'http://image2',props:[],else:'val'}
}
for(var i in images){
    var image = new Image();
    image.src = images[i].url;
    // put image anywhere you want
    document.getElementById('_images').appendChild(image)
}
</script> */


// var div = document.createElement('div');
// div.textContent = "Sup, y'all?";
// div.setAttribute('class', 'note');
// document.body.appendChild(div);

// let h2 = document.createElement("h2");
// let content = document.createTextNode("Welcome to the Adopt a Blog");
// h2.appendChild(content);
// let element = document.getElementById("div1");
// element.appendChild(h2);
