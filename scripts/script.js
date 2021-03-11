/* Shows the dog info in an alert. */
function showDogInfo(dogName, dogBreed, adoptionFee) {
  let infoMessage = 'Name: ' + dogName + '\nBreed: ' + dogBreed + '\nAdoption Fee: ' + adoptionFee;
  alert(infoMessage);
}

/* Add the dog's adoption fee to the total price. */
let totalPrice = 0;
function addDogToTotal(adoptionFee) {
  totalPrice += adoptionFee;
  alert('Total cost: ' + totalPrice);
}

const allBlogData = {
  blogs: [
    {
      imageSource: './images/blog-1.jpg',
      imageAltText: 'Back-facing shot of a woman with a dog, and a scenic view in the background',
      title: 'Traveling With Your Dog',
      paragraphs: [
        'Iduciendisite quo magnatem iuntum quid quaest ea am, tenderumet adis dolenem quidustrum fuga. Faceaquae estioria derum recuptatur, cum volore, undipsa doloreium hillupta aut es ut alitatuscit ommossum haritatur arum qui officae videbiti corporeium faccull oribus es quidignis ipietus explam sus am aut amet ant fugiatum, utem non reptat.',
        'Uptiusd andesci qui nem aut vendion ectur? Debis que explaut laborenia que doluptur, con et labor abor sant poreperum dio quat que doluptatur aut voluptassim quisciatquam ea ad qui con nes cus esere dolut hicto teni solutenis alit ulparume nonseca estorer spernam voluptassim quisciatquam ea ad qui con nes cus esere dolut hicto teni solutenis alit ulparume nonseca estorer spernam.'
      ]
    },
    {
      imageSource: './images/blog-2.jpg',
      imageAltText: 'A group of dogs all on leashes',
      title: 'How to Walk Multiple Dogs',
      paragraphs: [
        'Iduciendisite quo magnatem iuntum quid quaest ea am, tenderumet adis dolenem quidustrum fuga. Faceaquae estioria derum recuptatur, cum volore, undipsa doloreium hillupta aut es ut alitatuscit ommossum haritatur arum qui officae videbiti corporeium faccull oribus es quidignis ipietus explam sus am aut amet ant fugiatum, utem non reptat.',
        'Uptiusd andesci qui nem aut vendion ectur? Debis que explaut laborenia que doluptur, con et labor abor sant poreperum dio quat que doluptatur aut voluptassim quisciatquam ea ad qui con nes cus esere dolut hicto teni solutenis alit ulparume nonseca estorer spernam voluptassim quisciatquam ea ad qui con nes cus esere dolut hicto teni solutenis alit ulparume nonseca estorer spernam.'
      ]
    },
    {
      imageSource: './images/blog-3.jpg',
      imageAltText: 'Black outline of a woman and a dog, with a red-orage sky in the background',
      title: 'Teach Your Dog To Fetch',
      paragraphs: [
        'Iduciendisite quo magnatem iuntum quid quaest ea am, tenderumet adis dolenem quidustrum fuga. Faceaquae estioria derum recuptatur, cum volore, undipsa doloreium hillupta aut es ut alitatuscit ommossum haritatur arum qui officae videbiti corporeium faccull oribus es quidignis ipietus explam sus am aut amet ant fugiatum, utem non reptat.',
        'Uptiusd andesci qui nem aut vendion ectur? Debis que explaut laborenia que doluptur, con et labor abor sant poreperum dio quat que doluptatur aut voluptassim quisciatquam ea ad qui con nes cus esere dolut hicto teni solutenis alit ulparume nonseca estorer spernam voluptassim quisciatquam ea ad qui con nes cus esere dolut hicto teni solutenis alit ulparume nonseca estorer spernam.'
      ]
    }
  ]
}

addBlogs();

function addBlogs() {
  console.log('Creating blog elements');
  const blogsToAdd = [];
  for (let i = 0; i < allBlogData.blogs.length; i++) {
    const blog = createBlog(allBlogData.blogs[i]);
    blogsToAdd.push(blog);
  }

  console.log('Adding blog elements');
  const section = document.getElementsByTagName('section')[0];
  for (let i = 0; i < blogsToAdd.length; i++) {
    section.appendChild(blogsToAdd[i]);
  }
}

function createBlog(blogData) {
  // 1. Create individual elements
  const blog = document.createElement('article');
  blog.className = 'blog';

  const blogImage = document.createElement('img');
  blogImage.src = blogData.imageSource;
  blogImage.alt = blogData.imageAltText;

  const blogContents = document.createElement('div');
  blogContents.className = 'blog-text';
  const blogTitle = document.createElement('h3');
  blogTitle.textContent = blogData.title;

  const blogTexts = [];
  for (let i = 0; i < blogData.paragraphs.length; i++) {
    const blogText = document.createElement('p');
    blogText.textContent = blogData.paragraphs[i];
    blogTexts.push(blogText);
  }

  // 2. Link the elements together
  blogContents.appendChild(blogTitle);
  for (let i = 0; i < blogTexts.length; i++) {
    blogContents.appendChild(blogTexts[i]);
  }

  blog.appendChild(blogImage);
  blog.appendChild(blogContents);

  return blog;
}
