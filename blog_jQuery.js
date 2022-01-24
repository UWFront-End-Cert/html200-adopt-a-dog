// Lesson 9 (jQuery) Assignment:  Use jQuery and refactor the form submission
let numOfPost = 0;

let post = {
  imageSrc: '',
  imageDescriptor: '',
  headline: '',
  text: ''
}

$(function(){
  // initial button that prompts for a blog post
  $('main').append('<button id="btn-initialPrompt" type="submit">Submit a Blog Post</button>');

  // add a div to include form with 3 input fields and 2 buttons (Submit and Cancel)
  $('main').append('<div id="divForm"></div>');

  $('#btn-initialPrompt').click(function(){
    $('#btn-initialPrompt').hide();
    createForm();
  });
});

function createForm() {
  $('#divForm').append('<form></form>');

  $('form').append('<label for="img-select">Image Source</label>');

  $('form').append('<select id="img-select"></select');
  // 3 availabe image options to select from
  $('#img-select').append('<option value="./images/blog-1.jpg">Main at canyon sitting with a dog</option>');
  $('#img-select').append('<option value="./images/blog-2.jpg">Several leashed dogs on the street</option>');
  $('#img-select').append('<option value="./images/blog-3.jpg">Woman ad dog play in sunset</option>');

  $('form').append('<label for="headline">Headline</label>');
  $('form').append('<input id="headline" type="text" size="42">');

  $('form').append('<label for="text">Text</label>');
  $('form').append('<input id="text" type="textarea" size="42">');

  $('#divForm').append('<button id="btn-submitPost">Submit</button>');
  $('#divForm').append('<button id="btn-cancelPost">Cancel</button>');

  $('#btn-submitPost').click(function(){
    post.imageSrc = $('#img-select').find(":selected").val();
    post.imageDescriptor = $('#img-select').find(":selected").text();
    post.headline = $('#headline').val();
    post.text = $('#text').val();

    if (post.headline == '' || post.text == '') {
      alert('Missing headline and/or text.');
    }
    else {
      alert('Thank you. The form information has been received.');

      numOfPost++;

      buildPost();

      $('#divForm').html("");
      $('#btn-initialPrompt').show();

      console.log('Blog post ' + numOfPost + ' submitted.  Headline: ' + post.headline + '  Image: ' + post.imageSrc + '.');
    }
  });

  $('#btn-cancelPost').click(function(){
    $('#divForm').html("");
    $('#btn-initialPrompt').show();
  });
}

function buildPost() {
  $('#div-display-blog').append('<article id="article-' + numOfPost + '" class="blog-post"></article>');

  $('#article-' + numOfPost).append('<img class="responsive-image" src="' + post.imageSrc + '" alt="' + post.imageDescriptor + '">');
  $('#article-' + numOfPost).append('<div id="div-empty-' + numOfPost + '"></div>');

  $('#div-empty-' + numOfPost).append('<h3>' + post.headline +'</h3>')
  $('#div-empty-' + numOfPost).append('<p>' + post.text +'</p>')
}
