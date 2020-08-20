window.onload = function()
{
    

  var objects = [{
        headline: "Traveling With Your Dog",
        link_to_image: "images/blog-4.jpg",
        blog_text_upper: "Iduciendisite quo magnatem iuntum quid quaest ea am, tenderumet adis dolenem quidustrum fuga. Faceaquae estioria derum recuptatur, cum volore, undipsa doloreium hillupta aut es ut alitatuscit ommossum haritatur arum qui officae videbiti corporeium faccull oribus es quidignis ipietus explam sus am aut amet ant fugiatum, utem non reptat.",
        blog_text_bottom: "Uptiusd andesci qui nem aut vendion ectur? Debis que explaut laborenia que doluptur, con et labor abor sant poreperum dio quat que doluptatur aut voluptassim quisciatquam ea ad qui con nes cus esere dolut hicto teni solutenis alit ulparume nonseca estorer spernam voluptassim quisciatquam ea ad qui con nes cus esere dolut hicto teni solutenis alit ulparume nonseca estorer spernam.",
      }, {
        headline: "How To Walk Multiple Dogs",
        link_to_image: "images/blog-5.jpg",
        blog_text_upper: "Iduciendisite quo magnatem iuntum quid quaest ea am, tenderumet adis dolenem quidustrum fuga. Faceaquae estioria derum recuptatur, cum volore, undipsa doloreium hillupta aut es ut alitatuscit ommossum haritatur arum qui officae videbiti corporeium faccull oribus es quidignis ipietus explam sus am aut amet ant fugiatum, utem non reptat.",
        blog_text_bottom: "Uptiusd andesci qui nem aut vendion ectur? Debis que explaut laborenia que doluptur, con et labor abor sant poreperum dio quat que doluptatur aut voluptassim quisciatquam ea ad qui con nes cus esere dolut hicto teni solutenis alit ulparume nonseca estorer spernam voluptassim quisciatquam ea ad qui con nes cus esere dolut hicto teni solutenis alit ulparume nonseca estorer spernam.",
      }, {
        headline: "Teach Your Dog To Fetch",
        link_to_image: "images/blog-6.jpg",
        blog_text_upper: "Iduciendisite quo magnatem iuntum quid quaest ea am, tenderumet adis dolenem quidustrum fuga. Faceaquae estioria derum recuptatur, cum volore, undipsa doloreium hillupta aut es ut alitatuscit ommossum haritatur arum qui officae videbiti corporeium faccull oribus es quidignis ipietus explam sus am aut amet ant fugiatum, utem non reptat.",
        blog_text_bottom: "Uptiusd andesci qui nem aut vendion ectur? Debis que explaut laborenia que doluptur, con et labor abor sant poreperum dio quat que doluptatur aut voluptassim quisciatquam ea ad qui con nes cus esere dolut hicto teni solutenis alit ulparume nonseca estorer spernam voluptassim quisciatquam ea ad qui con nes cus esere dolut hicto teni solutenis alit ulparume nonseca estorer spernam.",
      }
    ];
    post_blog(objects);

    function post_blog(objects)
    {
        var blog_page_contents = document.getElementsByClassName("blog-page-contents").item(0);

        objects.forEach(element => {
            
            var blog_content_list = document.createElement('div');
            
            blog_content_list.className = "blog-page-contents-lists";

            var blog_page_contents_img = document.createElement('div');

            blog_page_contents_img.className = "blog-page-contents-img blog-page-contents-img-inner";

            var img = document.createElement('img');
            img.src = element["link_to_image"];
            img.alt = "";
            blog_page_contents_img.appendChild(img);

            blog_content_list.appendChild(blog_page_contents_img);

            var blog_page_contents_letter = document.createElement('div');
            blog_page_contents_letter.className = "blog-page-contents-letter blog-inner";

            var h3 = document.createElement('h3');
            h3.className = "blog-page-contents-topic";
            h3.innerHTML = element["headline"];

            blog_page_contents_letter.appendChild(h3);

            var p1 = document.createElement('p');
            // p1.innerHtml = element["blog_text_upper"];
            var text1 = document.createTextNode(element["blog_text_upper"]);

            p1.appendChild(text1);

            var p2 = document.createElement('p');

            // p2.innerHtml = element["blog_text_bottom"];
            var text2 = document.createTextNode(element["blog_text_bottom"]);

            p2.appendChild(text2);

            blog_page_contents_letter.appendChild(p1);

            blog_page_contents_letter.appendChild(p2);

            blog_content_list.appendChild(blog_page_contents_letter);

            blog_page_contents.appendChild(blog_content_list);
        });

    }

}