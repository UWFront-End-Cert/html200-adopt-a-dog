const posts = [
  {
    title: 'Traveling With Your Dog',
    content1: 'Kickstarter cornhole celiac lumbersexual, authentic lomo butcher occupy cred 90s kogi ethical knausgaard VHS. Tote bag church-key normcore whatever master cleanse poke man braid. Intelligentsia organic XOXO asymmetrical, hexagon meditation you probably haven\'t heard of them master cleanse prism sustainable PBR&B tousled. Tilde migas etsy viral kinfolk, franzen shoreditch. Kogi normcore fingerstache, cloud bread selfies chillwave offal salvia unicorn. Banh mi wolf kickstarter kale chips street art aesthetic flexitarian slow-carb health goth jean shorts post-ironic snackwave cold-pressed keytar.',
    content2: 'Farm-to-table retro dreamcatcher, lo-fi photo booth man bun shoreditch subway tile yr shaman health goth. Raw denim twee keytar hoodie echo park. Pop-up coloring book plaid austin tbh cred letterpress bitters offal before they sold out meggings fashion axe hella art party gentrify. Selfies mixtape wayfarers pour-over raclette offal cliche poke unicorn banjo brunch. You probably haven\'t heard of them tousled whatever enamel pin ramps.',
    imagesrc: './images/blog-1.jpg',
    imagealt: 'A woman and dog enjoy the view of a canyon'
  },
  {
    title: 'How to Walk Multiple Dogs',
    content1: 'Kickstarter cornhole celiac lumbersexual, authentic lomo butcher occupy cred 90s kogi ethical knausgaard VHS. Tote bag church-key normcore whatever master cleanse poke man braid. Intelligentsia organic XOXO asymmetrical, hexagon meditation you probably haven\'t heard of them master cleanse prism sustainable PBR&B tousled. Tilde migas etsy viral kinfolk, franzen shoreditch. Kogi normcore fingerstache, cloud bread selfies chillwave offal salvia unicorn. Banh mi wolf kickstarter kale chips street art aesthetic flexitarian slow-carb health goth jean shorts post-ironic snackwave cold-pressed keytar.',
    content2: 'Farm-to-table retro dreamcatcher, lo-fi photo booth man bun shoreditch subway tile yr shaman health goth. Raw denim twee keytar hoodie echo park. Pop-up coloring book plaid austin tbh cred letterpress bitters offal before they sold out meggings fashion axe hella art party gentrify. Selfies mixtape wayfarers pour-over raclette offal cliche poke unicorn banjo brunch. You probably haven\'t heard of them tousled whatever enamel pin ramps.',
    imagesrc: './images/blog-2.jpg',
    imagealt: 'A group of dogs on leash wait for their walk'
  },
  {
    title: 'Teach Your Dog to Fetch!',
    content1: 'Kickstarter cornhole celiac lumbersexual, authentic lomo butcher occupy cred 90s kogi ethical knausgaard VHS. Tote bag church-key normcore whatever master cleanse poke man braid. Intelligentsia organic XOXO asymmetrical, hexagon meditation you probably haven\'t heard of them master cleanse prism sustainable PBR&B tousled. Tilde migas etsy viral kinfolk, franzen shoreditch. Kogi normcore fingerstache, cloud bread selfies chillwave offal salvia unicorn. Banh mi wolf kickstarter kale chips street art aesthetic flexitarian slow-carb health goth jean shorts post-ironic snackwave cold-pressed keytar.',
    content2: 'Farm-to-table retro dreamcatcher, lo-fi photo booth man bun shoreditch subway tile yr shaman health goth. Raw denim twee keytar hoodie echo park. Pop-up coloring book plaid austin tbh cred letterpress bitters offal before they sold out meggings fashion axe hella art party gentrify. Selfies mixtape wayfarers pour-over raclette offal cliche poke unicorn banjo brunch. You probably haven\'t heard of them tousled whatever enamel pin ramps.',
    imagesrc: './images/blog-3.jpg',
    imagealt: 'Silhouette of a woman and dog playing fetch'
    },
];

for (i = 0; i < posts.length; i++) {
  const post = posts[i];

  const title = post.title;
  const cont1 = post.content1;
  const cont2 = post.content2;
  const source = post.imagesrc;
  const alttext = post.imagealt;

  const blogPost = document.createElement('article');
    blogPost.setAttribute('class', 'blog-article');

  const blogPic = document.createElement('img');
    blogPic.setAttribute('src', source);

  const blogTitle = document.createElement('h4');
    blogTitle.textContent = title;

  const blogText1 = document.createElement('p');
    blogText1.textContent = cont1;
  const blogText2 = document.createElement('p');
    blogText2.textContent = cont2;

    blogPost.appendChild(blogPic);
    blogPost.appendChild(blogTitle);
    blogPost.appendChild(blogText1);
    blogPost.appendChild(blogText2);

  const el = document.querySelector('.blog-container');

    el.appendChild(blogPost);
  }

//const dogArticle = document.createElement("article");
//dogArticle.setAttribute('class', 'blog-article');

//const template =
//<img src=${blog.image} alt=${blog.alt}>
//<div class="blog-article_text-box">
//  <h3 class="blog-article_heading">${blog.headline}</h3>
//</div>
