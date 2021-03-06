
// alert("Hello");
const container = document.getElementById('container')

let blogContent = [
    {'blogImg':"images/blog-1.jpg" , 
     'blogAltText':'Man viewing the Grand Canyon with his dog',
     'blogHeader':'Traveling with Your Dog',
     'blogP1':'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque blandit lectus non nisl feugia tristique. Cras massa purus, pharetra at diam vel, tincidunt volutpat metus. Cras sed rutrum dolor, id maximus felis. Nullam pulvinar ex non lectus tempus, id euismod lectus ullamcorper. Sed eleifend augue et libero faucibus semper. Curabitur dapibus enim elit, in molestie nisl euismod vel. In efficitur lacinia lorem, suscipit blandit est volutpat nec.',
     'blogP2':'Nunc vitae libero laoreet, elementum lacus sed, ultricies nibh. Nam elementum commodo erat, lobortis iaculis justo elementum eget. Mauris id lacus massa. In maximus elit euligula cursus consequat. Nullam a massa eu mi fringilla ornare sodales non augue. Lorem ipsum dolor sit amet, consectetur adipiscing elit. In a dolor ut nulla mattis eleifend id a metus. In porta orci nec pellentesque ullamcorper. Phasellus sodales ipsum et lacus eleifend, nec sodales lacus aliquet.'
    },

    {'blogImg':"images/blog-2.jpg" , 
    'blogAltText':'Multiple dogs on leash outside',
    'blogHeader':'How to Walk Multiple Dogs',
    'blogP1':'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque blandit lectus non nisl feugia tristique. Cras massa purus, pharetra at diam vel, tincidunt volutpat metus. Cras sed rutrum dolor, id maximus felis. Nullam pulvinar ex non lectus tempus, id euismod lectus ullamcorper. Sed eleifend augue et libero faucibus semper. Curabitur dapibus enim elit, in molestie nisl euismod vel. In efficitur lacinia lorem, suscipit blandit est volutpat nec.',
    'blogP2':'Nunc vitae libero laoreet, elementum lacus sed, ultricies nibh. Nam elementum commodo erat, lobortis iaculis justo elementum eget. Mauris id lacus massa. In maximus elit euligula cursus consequat. Nullam a massa eu mi fringilla ornare sodales non augue. Lorem ipsum dolor sit amet, consectetur adipiscing elit. In a dolor ut nulla mattis eleifend id a metus. In porta orci nec pellentesque ullamcorper. Phasellus sodales ipsum et lacus eleifend, nec sodales lacus aliquet.'
   },

   {'blogImg':"images/blog-2.jpg" , 
   'blogAltText':'Multiple dogs on leash outside',
   'blogHeader':'How to Walk Multiple Dogs',
   'blogP1':'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque blandit lectus non nisl feugia tristique. Cras massa purus, pharetra at diam vel, tincidunt volutpat metus. Cras sed rutrum dolor, id maximus felis. Nullam pulvinar ex non lectus tempus, id euismod lectus ullamcorper. Sed eleifend augue et libero faucibus semper. Curabitur dapibus enim elit, in molestie nisl euismod vel. In efficitur lacinia lorem, suscipit blandit est volutpat nec.',
   'blogP2':'Nunc vitae libero laoreet, elementum lacus sed, ultricies nibh. Nam elementum commodo erat, lobortis iaculis justo elementum eget. Mauris id lacus massa. In maximus elit euligula cursus consequat. Nullam a massa eu mi fringilla ornare sodales non augue. Lorem ipsum dolor sit amet, consectetur adipiscing elit. In a dolor ut nulla mattis eleifend id a metus. In porta orci nec pellentesque ullamcorper. Phasellus sodales ipsum et lacus eleifend, nec sodales lacus aliquet.'
  }
];


for (let i = 0; i<blogContent.length; i++) {
  
// each blog is assigned to an aritcle which are enclosed in a container
    let blogArticle = document.createElement('article');
    blogArticle.setAttribute('id', 'blog');
    blogArticle.setAttribute('class', 'blog');
    container.appendChild(blogArticle);

//children of the article include the image and a div for the hdr and paragraphs
    let blogImage = document.createElement('img');
    blogImage.setAttribute('src', 'images/blog-2.jpg');
    blogImage.setAttribute('alt', 'Man viewing the Grand Canyon with his dog');
    blogArticle.appendChild(blogImage);

    let blogDiv = document.createElement('div');
    blogDiv.setAttribute('id', 'blog-text');
    blogDiv.setAttribute('class', 'blog-text');
    blogArticle.appendChild(blogDiv);

// children of the div include the header and two paragraphs
    let blogH2 = document.createElement('h2');
    blogH2.setAttribute('id', 'blogHeader');
    blogH2.innerHTML = 'blogHeader';
    blogDiv.appendChild(blogH2);

    let blogPar1 = document.createElement('p');
    blogPar1.setAttribute('id', 'blog-par1');
    blogPar1.innerHTML = 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque blandit lectus non nisl feugia tristique. Cras massa purus, pharetra at diam vel, tincidunt volutpat metus. Cras sed rutrum dolor, id maximus felis. Nullam pulvinar ex non lectus tempus, id euismod lectus ullamcorper. Sed eleifend augue et libero faucibus semper. Curabitur dapibus enim elit, in molestie nisl euismod vel. In efficitur lacinia lorem, suscipit blandit est volutpat nec.';
    blogDiv.appendChild(blogPar1);

    let blogPar2 = document.createElement('p');
    blogPar2.setAttribute('id', 'blog-par2');
    blogPar2.innerHTML = 'Nunc vitae libero laoreet, elementum lacus sed, ultricies nibh. Nam elementum commodo erat, lobortis iaculis justo elementum eget. Mauris id lacus massa. In maximus elit euligula cursus consequat. Nullam a massa eu mi fringilla ornare sodales non augue. Lorem ipsum dolor sit amet, consectetur adipiscing elit. In a dolor ut nulla mattis eleifend id a metus. In porta orci nec pellentesque ullamcorper. Phasellus sodales ipsum et lacus eleifend, nec sodales lacus aliquet.';
    blogDiv.appendChild(blogPar2);



}