// Paragraph 1 of Lorem Ipsum text example
const lorem_ipsum_generator_01 = 'Iduciendisite quo magnatem iuntum quid quaest ea am, ' +
'tenderumet adis dolenem quidustrum fuga. Faceaquae estioria derum recuptatur, cum volore, ' +
'undipsa doloreium hillupta aut es ut alitatuscit ommossum haritatur arum qui officae ' +
'videbiti corporeium faccull oribus es quidignis ipietus explam sus am aut amet ant fugiatum, utem non reptat.'

// Paragraph 2 of Lorem Ipsum text example
const lorem_ipsum_generator_02 = 'Uptiusd andesci qui nem aut vendion ectur? Debis que explaut laborenia que doluptur, ' +
'con et labor abor sant poreperum dio quat que doluptatur aut voluptassim quisciatquam ' + 
'ea ad qui con nes cus esere dolut hicto teni solutenis alit ulparume nonseca estorer ' + 
'spernam voluptassim quisciatquam ea ad qui con nes cus esere dolut hicto teni solutenis ' + 
'alit ulparume nonseca estorer spernam.'

// Create array for function
const array_for_blog = [
    {
        'image': 'blog-1.jpg',
        'alt_for_image': 'dog at grand canyon with owner',
        'article_title': 'Traveling With Your Dog',
        'paragraph1': lorem_ipsum_generator_01,
        'paragraph2': lorem_ipsum_generator_02
    },

    {
        'image': 'blog-2.jpg',
        'alt_for_image': 'four dogs on leash',
        'article_title': 'How To Walk Multiple Dogs',
        'paragraph1': lorem_ipsum_generator_01,
        'paragraph2': lorem_ipsum_generator_02
    },

    {
        'image': 'blog-3.jpg',
        'alt_for_image': 'dog at grand canyon with owner',
        'article_title': 'Teach Your Dog to Fetch!',
        'paragraph1': lorem_ipsum_generator_01,
        'paragraph2': lorem_ipsum_generator_02
    }
]

const element_main = document.getElementById('main-content');

// Function will not have parameters because it's for a singular purpose:
// to fulfill the requirements for this blog page.
function render_dog_blog() {
    
    for (let i = 0; i < array_for_blog.length; i++) {

        // Create section
        let section = document.createElement('section');
        section.setAttribute('class', 'blog-entry');

        // Create Image, append it to 'blog-entry' section
        let image = document.createElement('img');
        image.setAttribute('src', './images/' + array_for_blog[i].image);
        image.setAttribute('alt', array_for_blog[i].alt_for_image);
        section.appendChild(image);
        
        // Create 'content-intro' div, append it to 'blog-entry' section
        let content = document.createElement('div');
        content.setAttribute('class', 'content-intro');
        section.appendChild(content);
    
        // Create article, append it to 'content-intro' div
        let article = document.createElement('article');
        content.appendChild(article);
        
        // Create header, append it to article element
        let header2 = document.createElement('h2');
        header2.textContent = array_for_blog[i].article_title;
        article.appendChild(header2);
    
        // Create paragraph 1, append it to article element
        let paragraph1 = document.createElement('p');
        paragraph1.textContent = array_for_blog[i].paragraph1;
        article.appendChild(paragraph1);
        
        // Create paragraph 1, append it to article element
        let paragraph2 = document.createElement('p');
        paragraph2.textContent = array_for_blog[i].paragraph2;
        article.appendChild(paragraph2);
    
        // append whole section to main, with attribute 'main-content'
        element_main.appendChild(section);
    }
}

render_dog_blog();