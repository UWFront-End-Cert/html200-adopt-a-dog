function infoAboutDogs(name, breed, fee) {
    alert(`name: ${name} \nbreed: ${breed} \nfee: ${fee}`); 
}

let currentTotal = 0; 

function runningTotal(fee) {
    currentTotal = currentTotal + fee;
    alert(`Your current total is $${currentTotal}`);
} 


let blogsArray = [
    {
      image: 'images/blog-1.jpg',
      heading: 'Traveling with your dog',
      p0: 'Do be do be do',
      p1: 'Cha cha cha'
    },
    {
      image: 'images/blog-2.jpg',
      heading: 'How to walk multiple dogs',
      p0: 'Blah dee blah blah',
      p1: 'Cannot sleep. Clowns will eat me.'
    },
    {
      image: 'images/blog-3.jpg',
      heading: 'Teach your dog to fetch!',
      p0: 'Something not too redundant',
      p1: 'Blah dee blah blah blah'
    }
  ];
  
  const foot = document.body.getElementsByClassName('bottom-container');
  console.log(foot);
  
  /*------------First blog post----------*/
  function blogBlog0(blogginOut) {
    const section0 = document.createElement('section');
    section0.setAttribute('id', 'blogPost0');
    document.body.appendChild(section0);
    section0.classList.add("blog-grid-1");
  
    const blog0 = blogsArray[0];
  
    const image0 = document.createElement('img');
    image0.src = blog0.image;
  
    const heading0 = document.createElement('h4');
    heading0.textContent = blog0.heading;
    heading0.classList.add('h4-blog');
  
    const p00 = document.createElement('p');
    p00.textContent = blog0.p0;
    p00.classList.add('blog-p');
  
    const p10 = document.createElement('p');
    p10.textContent = blog0.p1;
    p10.classList.add('blog-p');
  
    section0.appendChild(image0);
    section0.appendChild(heading0);
    section0.appendChild(p00);
    section0.appendChild(p10);
  }
  
  /*------------Second blog post----------*/
  function blogBlog1(blogginOut) {
    const section1 = document.createElement('section');
    section1.setAttribute('id', 'blogPost1');
    document.body.appendChild(section1);
    section1.classList.add("blog-grid-2");
  
    const blog1 = blogsArray[1];
  
    const image1 = document.createElement('img');
    image1.src = blog1.image;
  
    const heading1 = document.createElement('h4');
    heading1.textContent = blog1.heading;
    heading1.classList.add('h4-blog');
  
    const p01 = document.createElement('p');
    p01.textContent = blog1.p0;
    p01.classList.add('blog-p');
  
    const p11 = document.createElement('p');
    p11.textContent = blog1.p1;
    p11.classList.add('blog-p');
  
    section1.appendChild(image1);
    section1.appendChild(heading1);
    section1.appendChild(p01);
    section1.appendChild(p11);
  }
  
  /*------------Third blog post----------*/
  function blogBlog2(blogginOut) {
    const section2 = document.createElement('section');
    section2.setAttribute('id', 'blogPost2');
    document.body.appendChild(section2);
    section2.classList.add("blog-grid-3");
  
    const blog2 = blogsArray[2];
  
    const image2 = document.createElement('img');
    image2.src = blog2.image;
  
    const heading2 = document.createElement('h4');
    heading2.textContent = blog2.heading;
    heading2.classList.add('h4-blog');
  
    const p02 = document.createElement('p');
    p02.textContent = blog2.p0;
    p02.classList.add('blog-p');
  
    const p12 = document.createElement('p');
    p12.textContent = blog2.p1;
    p12.classList.add('blog-p');
  
    section2.appendChild(image2);
    section2.appendChild(heading2);
    section2.appendChild(p02);
    section2.appendChild(p12);
  }
  
  /*--------------Checkout--------------*/
  function thankYou(click) {
    alert("Thank you. The form information has been received");
  }