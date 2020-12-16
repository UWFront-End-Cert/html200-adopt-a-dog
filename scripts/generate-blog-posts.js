const arrayOfBlogObjects = [

    {
        containterBlogClass: 'container-blog',
        containerBlogImageSrc: 'images/blog-1.jpg',
        blogPostClass: 'blog-post',
        blogPostHeader: 'Traveling With Your Dog',
        
    },

    {
        containterBlogClass: 'container-blog',
        containerBlogImageSrc: 'images/blog-2.jpg',
        blogPostClass: 'blog-post',
        blogPostHeader: 'How To Walk Multiple Dogs',
      
    },

    {
        containterBlogClass: 'container-blog',
        containerBlogImageSrc: 'images/blog-3.jpg',
        blogPostClass: 'blog-post',
        blogPostHeader: 'Teach Your Dog To Fetch!',
      
    },

]

const blogBlock = document.getElementById("blog-title-page");
console.log(blogBlock);

for(let i =0; i <arrayOfBlogObjects.length; i +=1) {
    
    const blog = arrayOfBlogObjects[i];
  

    const containerBlogDiv = document.createElement('div');
    containerBlogDiv.className = blog.containterBlogClass;
    blogBlock.appendChild(containerBlogDiv);

    const containerBlogImage = document.createElement('img');
    containerBlogImage.src = blog.containerBlogImageSrc;
    containerBlogDiv.appendChild(containerBlogImage);

    const blogPostDiv = document.createElement('div');
    blogPostDiv.className = blog.blogPostClass;
    containerBlogDiv.appendChild(blogPostDiv);

    
    const blogPostHeader = document.createElement('h3');
    blogPostHeader.textContent = blog.blogPostHeader;
    blogPostDiv.appendChild(blogPostHeader);

    const blogPostFirstP= document.createElement('p');
    blogPostFirstP.setAttribute('style', 'white-space: pre;');
    blogPostFirstP.textContent = " Iduciendisite quo magnatem iuntum quid quaest ea am, tenderumet adis dolenem quidustrum fuga Faceaquae estioria \r\n";
    blogPostFirstP.textContent += "derum recuptatur, cum volore,undipsa doloreium hillupta aut es ut alitatuscit ommossum haritatur arum qui officae videbiti\r\n";
    blogPostFirstP.textContent += "corporeium faccull oribus es quidignis ipietus explam sus am aut amet ant fugiatum, utem non reptat Uptiusd andesci qui nem aut vendion ectur \r\n"
    blogPostFirstP.textContent += "Debis que explaut laborenia que doluptur, con et labor abor sant poreperum dio quat que doluptatur aut voluptassim quisciatquam ea ad qui con nes \r\n "
    blogPostFirstP.textContent += "cus esere doluthicto teni solutenis alit ulparume nonseca estorer spernam voluptassim quisciatquam ea ad qui con nes cus esere dolut hicto teni \r\n solutenis alit ulparume nonseca estorer spernam. \r\n"
    blogPostHeader.appendChild(blogPostFirstP);




}



