$(function() {

  let fees = [];

  $('.dog-card-image').click(function() {
    let dogName = $(this).siblings('div').find('h3').text();
    let breed = $(this).siblings('div').find('p:nth-of-type(2)').text();
    let cost = $(this).siblings('div').find('p:nth-of-type(1)').text();
    alert('Name: ' + dogName + '\n\n' + 'Breed: ' + breed + '\n\n' + cost);
  });

  $('.adopt-button').click(function() {
    let dogName = $(this).siblings('h3').text();
    let displayCost = $(this).parent().find('p:nth-of-type(1)').text();
    let feeId = $(this).parent().find('p:nth-of-type(1)').attr('id');
    let fee = document.getElementById(feeId).childNodes[1].nodeValue.replace('$', '');

    fee = Number(fee);
    fees.push(fee);
    let total = fees.reduce(function(a, b) {
      return a + b;
    }, 0);
    let displayTotal = total.toFixed(2);

    alert('Name: ' + dogName + '\n' + displayCost + '\n' + 'Total: ' + '$' + displayTotal);
    $(this).attr('disabled', 'true').css('background-color', '#808080');
    $('#checkout-total').text('$' + displayTotal);
    return total;
  });
  

  $('.dog-card').mouseenter(function() {
    $(this).css('box-shadow', '0 5px 15px rgba(0,0,0,0.3)')
  }).mouseleave(function() {
    $(this).css('box-shadow', 'none')
  })


  /*********************************CHECKOUT**************************************/

  $('form').submit(function(event) {
    event.preventDefault();
    alert('Thank you. The form information has been received.');
    console.log($(this).serializeArray());
  });


  /********************************BLOG***************************************/

  let post;

  const blogArticles = [
    {
      id: 'blog1',
      title: 'Traveling With Your Dog',
      fullText: 'Pellentesque tellus velit, finibus ac nisi non, euismod aliquam magna. In ac pretium ante, sit amet iaculis ligula. Proin viverra accumsan est, ut semper sapien imperdiet non. Pellentesque blandit accumsan sollicitudin. Nulla scelerisque facilisis semper. Fusce aliquet, turpis vitae sodales porta, sapien magna mattis dui, ut hendrerit risus lectus et ligula. Nullam eu nunc ultrices, mattis purus non, sollicitudin lacus. Curabitur varius id leo vel vulputate. Aenean non elit eleifend, laoreet sapien eget, vestibulum ipsum. Suspendisse ac ex ut mauris sodales accumsan.',
      imageURL: 'images/blog-1.jpg',
      imageAltText: 'Woman with dog sitting on a cliff overlooking a valley'
    },
    {
      id: 'blog2',
      title: 'How to Walk Multiple Dogs',
      fullText: 'Pellentesque tellus velit, finibus ac nisi non, euismod aliquam magna. In ac pretium ante, sit amet iaculis ligula. Proin viverra accumsan est, ut semper sapien imperdiet non. Pellentesque blandit accumsan sollicitudin. Nulla scelerisque facilisis semper. Fusce aliquet, turpis vitae sodales porta, sapien magna mattis dui, ut hendrerit risus lectus et ligula. Nullam eu nunc ultrices, mattis purus non, sollicitudin lacus. Curabitur varius id leo vel vulputate. Aenean non elit eleifend, laoreet sapien eget, vestibulum ipsum. Suspendisse ac ex ut mauris sodales accumsan.',
      imageURL: 'images/blog-2.jpg',
      imageAltText: 'Four dogs on a leash, sitting down in a park, one of them is yawning'
    },
    {
      id: 'blog3',
      title: 'Teach Your Dog to Fetch!',
      fullText: 'Pellentesque tellus velit, finibus ac nisi non, euismod aliquam magna. In ac pretium ante, sit amet iaculis ligula. Proin viverra accumsan est, ut semper sapien imperdiet non. Pellentesque blandit accumsan sollicitudin. Nulla scelerisque facilisis semper. Fusce aliquet, turpis vitae sodales porta, sapien magna mattis dui, ut hendrerit risus lectus et ligula. Nullam eu nunc ultrices, mattis purus non, sollicitudin lacus. Curabitur varius id leo vel vulputate. Aenean non elit eleifend, laoreet sapien eget, vestibulum ipsum. Suspendisse ac ex ut mauris sodales accumsan.',
      imageURL: 'images/blog-3.jpg',
      imageAltText: 'Silhouettes of person playing fetch with dog at sunset'
    }
  ];

  for (let i = 0; i < blogArticles.length; i += 1) {
    let blogArticle = blogArticles[i];
    post = document.getElementById(blogArticle.id);

    if (post) {
      let images = document.createElement('img');
      post.appendChild(images);
      images.setAttribute('src', blogArticle.imageURL);
      images.setAttribute('width', '328');
      images.setAttribute('height', '310');
      images.setAttribute('class', 'blog-article-image');
      images.setAttribute('alt', blogArticle.imageAltText);

      let blogTextContainer = document.createElement('div');
      post.appendChild(blogTextContainer);
      blogTextContainer.setAttribute('class', 'blog-article-text');

      let headlineTitles = document.createElement('h2');
      blogTextContainer.appendChild(headlineTitles);
      headlineTitles.innerHTML = blogArticle.title;

      let blogText = document.createElement('p');
      blogTextContainer.appendChild(blogText);
      blogText.innerHTML = blogArticle.fullText;
      blogText.setAttribute('class', 'smaller-font-size');
    }
  }

})




