const main = document.createElement('main');
main.setAttribute('class', 'blog');
document.body.appendChild(main);

main.innerHTML = '<h1 class="blog__heading-one">Adoptadog Blog</h1>';

const fields = [
    {           
        blog: 'article',
        
        images: './images/blog-1.jpg',
        
        title: 'Traveling with your dog',
        
        content: 'Puppy kitty ipsum dolor sit good dog foot stick canary. Teeth Mittens grooming vaccine walk swimming nest good boy furry tongue heel furry treats fish. Cage run fast kitten dinnertime ball run foot park fleas throw house train licks stick dinnertime window. Yawn litter fish yawn toy pet gate throw Buddy kitty wag tail ball groom crate ferret heel wet nose Rover toys pet supplies.',
        
        content2: 'Pet Food pet supplies gimme five puppy cage food feathers food heel feathers running pet gate walk lazy dog Spike. Good Boy park lazy dog walk kibble Scooby snacks licks canary. Maine Coon Cat walk catch water dog slobber chew scratcher ID tag litter tuxedo dog house lazy cat park.',             
        
        alt: 'a young woman embracing a dog in the Gran Canyon'
    },
    
    {       
        blog: 'article',
        
        images:'./images/blog-2.jpg',
        
        title: 'How To Walk Multiple Dogs',
        
        content: 'Puppy kitty ipsum dolor sit good dog foot stick canary. Teeth Mittens grooming vaccine walk swimming nest good boy furry tongue heel furry treats fish. Cage run fast kitten dinnertime ball run foot park fleas throw house train licks stick dinnertime window. Yawn litter fish yawn toy pet gate throw Buddy kitty wag tail ball groom crate ferret heel wet nose Rover toys pet supplies.',
        
        content2: 'Pet Food pet supplies gimme five puppy cage food feathers food heel feathers running pet gate walk lazy dog Spike. Good Boy park lazy dog walk kibble Scooby snacks licks canary. Maine Coon Cat walk catch water dog slobber chew scratcher ID tag litter tuxedo dog house lazy cat park.',
        
        alt: 'a dog-keeper caring four dogs out in a street'
    }, 
    
    {
        blog: 'article',
        
        images: './images/blog-3.jpg',
        
        title: 'Teach Your Dog To Fetch!',
        
        content: 'Puppy kitty ipsum dolor sit good dog foot stick canary. Teeth Mittens grooming vaccine walk swimming nest good boy furry tongue heel furry treats fish. Cage run fast kitten dinnertime ball run foot park fleas throw house train licks stick dinnertime window. Yawn litter fish yawn toy pet gate throw Buddy kitty wag tail ball groom crate ferret heel wet nose Rover toys pet supplies.',
        
        content2: 'Pet Food pet supplies gimme five puppy cage food feathers food heel feathers running pet gate walk lazy dog Spike. Good Boy park lazy dog walk kibble Scooby snacks licks canary. Maine Coon Cat walk catch water dog slobber chew scratcher ID tag litter tuxedo dog house lazy cat park.',
        
        alt: 'a siluette of a teenage girl holding a ball and a dog ready to play in the sunset'
    }
    
];

    for (let i = 0; i < fields.length; i++) {
        const field = fields[i]; 

        const blog = document.createElement('article');
            blog.src = field.blog;
            blog.setAttribute('class', 'blog-article');
            main.appendChild(blog);
        
        const image = document.createElement('img');
            image.src = field.images;
            image.setAttribute('class', 'blog-image');
            image.setAttribute('alt', fields[i].alt);
            blog.appendChild(image);
        
        const title = document.createElement('h2');
            title.textContent = field.title;
            title.setAttribute('class', 'topic__heading');
            blog.appendChild(title);

        const par1 = document.createElement('p');
            par1.textContent = field.content;
            par1.setAttribute('class','p-one');
            blog.appendChild(par1);

        const par2 = document.createElement('p');
            par2.textContent = field.content2;
            par2.setAttribute('class', 'p-two');
            blog.appendChild(par2);

    }
