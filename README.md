html200-adopt-a-dog

LAST UPDATE, 3-3-2021

Responsive images week's assignment. 
- style.css and html files have been updated. 
- Media Queries now starts from mobile to desktop version.
- Experience on compressing and editing images.
- HTML files has been reinforced by applying classes to a make a robust sections of each pages, especially in headers and footers.
- Reduced innecesary extra lines of coding.
- Examined through the dev-tools > network, the capacity of how this pages render in a satisfactory time performance. Tested and rendered in Mozilla, Chrome and Brave web    browsers.


2-19-2021

The biggest changes has been committed in script.js, all the same functions (which were for each dog) are in just one function called 'dogInfo', as suggested. The second function previouly called 'cost', now 'total' includes the math operation, instead of displaying a string.

parameters and arguments are defined in the function to keep the program stable.

Click handlers of index.html and dogs.html contain the dog's information as a string, instead of in the JS file. All the multiple functions have been removed.

To add some fun... in every dog's bio, the paragraph element contains 'doggy impsum'.

Adopt button fixed, when it's clicked, an alert pops up showing up the price. Then, if you click on other dog adopt's button, the total price increase the value, respectively.



PREVIOUS NOTES:

The CSS of Blog's page is now linked to the main stylesheet page, located in the same folder 'styles', name of the file: 'style.css'.

In the 'scripts' folder there are two JavaScript files, one of them is the main one which is linked to 'index.html' and 'dogs.html'. So, 'script-two.js' is the result of making another alternative program to run pages but I definitely chose the first attempt, 'script.js'

I committed some updates on pages 'index.html' and 'dogs.html' because I used the attribute 'charset' and its value of 'utf-8' wrapped in the script tag located within head element. After the validation process, the validator pointed a warning related of that issue, which it said that 'it is deprecated or obsolete'. So, I figured out the idea of using the attribute 'charset' would work inside the 'body' and in order to avoid some errors, this attribute must be omitted.

Forgot to mention the styling I have been added on images, buttons and links. Some hover effects to break a little bit the 'static' on pages.
