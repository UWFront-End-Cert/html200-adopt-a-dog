//  3-2-21 for L8 copied from adopt-blog.js for refactoring 


let h1AdoptBlog = "Adoptadog Blog";
document.getElementById("h1-adopt-blog").innerHTML = h1AdoptBlog


let h2aAdoptBlog = "Traveling With Your Dog"
let p1aAdoptBlog = "Lorem ipsum dolor sit amet consectetur adipisicing elit. Praesentium aspernatur necessitatibus molestias natus voluptates dolorem, delectus ab vero iure nam rerum tempore eligendi modi alias sequi consectetur explicabo deserunt, veniam, molestiae voluptas itaque. Magni ipsam facilis pariatur? Ad numquam a eum vel rem impedit, laboriosam perspiciatis, ipsam qui omnis laudantium totam officiis commodi autem iusto minima. Deserunt, amet labore aperiam tenetur incidunt voluptatum dolores iste blanditiis ducimus eligendi perspiciatis corporis, id iusto suscipit enim quod repudiandae inventore veniam, molestiae sunt sint!<br><br>  Corporis beatae soluta eveniet, blanditiis voluptates porro nesciunt veniam perferendis nam suscipit obcaecati rerum consectetur nostrum aliquam, sint vero?";
let imgA = "images/blog-1.jpg" 

let h2bAdoptBlog = "How To Walk Multiple Dogs"
let p1bAdoptBlog = "Lorem ipsum dolor sit amet consectetur adipisicing elit. Praesentium aspernatur necessitatibus molestias natus voluptates dolorem, delectus ab vero iure nam rerum tempore eligendi modi alias sequi consectetur explicabo deserunt, veniam, molestiae voluptas itaque. Magni ipsam facilis pariatur?<br><br> Ad numquam a eum vel rem impedit, laboriosam perspiciatis, ipsam qui omnis laudantium totam officiis commodi autem iusto minima. Deserunt, amet labore aperiam tenetur incidunt voluptatum dolores iste blanditiis ducimus eligendi perspiciatis corporis, id iusto suscipit enim quod repudiandae inventore veniam, molestiae sunt sint!  Corporis beatae soluta eveniet, blanditiis voluptates porro nesciunt veniam perferendis nam suscipit obcaecati rerum consectetur nostrum aliquam, sint vero?";
let imgB = "images/blog-2.jpg" 

let h2cAdoptBlog = "Teach Your Dog To Fetch"
let p1cAdoptBlog = "Lorem ipsum dolor sit amet consectetur adipisicing elit. Praesentium aspernatur necessitatibus molestias natus voluptates dolorem, delectus ab vero iure nam rerum tempore eligendi modi alias sequi consectetur explicabo deserunt, veniam, molestiae voluptas itaque. Magni ipsam facilis pariatur? Ad numquam a eum vel rem impedit, laboriosam perspiciatis, ipsam qui omnis laudantium totam officiis commodi autem iusto minima.<br><br> Deserunt, amet labore aperiam tenetur incidunt voluptatum dolores iste blanditiis ducimus eligendi perspiciatis corporis, id iusto suscipit enim quod repudiandae inventore veniam, molestiae sunt sint!  Corporis beatae soluta eveniet, blanditiis voluptates porro nesciunt veniam perferendis nam suscipit obcaecati rerum consectetur nostrum aliquam, sint vero?";
let imgC = "images/blog-3.jpg" 



document.getElementById("h2a-adopt-blog").innerHTML = h2aAdoptBlog
document.getElementById("p1a-adopt-blog").innerHTML = p1aAdoptBlog
document.getElementById("img-a").src = imgA;

document.getElementById("h2b-adopt-blog").innerHTML = h2bAdoptBlog
document.getElementById("p1b-adopt-blog").innerHTML = p1bAdoptBlog
document.getElementById("img-b").src = imgB;

document.getElementById("h2c-adopt-blog").innerHTML = h2cAdoptBlog
document.getElementById("p1c-adopt-blog").innerHTML = p1cAdoptBlog
document.getElementById("img-c").src = imgC;


// let imgA = "(src="images/blog-1.jpg" alt="Descripion of featured dog."
// srcset="images/blog-1.jpg 600w,
//         images/blog-1.jpg 300w"
// sizes="(max-width: 600px) 200px,
//         400px"
// />
// )"



{/* <div id="_images"></div>
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
</script> */}