# html200-adopt-a-dog
Adopt-A-Dog Website


Story:
The website is for busy individuals who are looking to adopt a dog 
but aren't able to visit a pet store to find a dog to adopt.  
Adopt-a-Dog makes it convenient for these type of individuals.
The website gives the user the ability, from the comfort of their home, 
or any place with internet connectivity, 
to browse through the gallery of dog images, get information on the dogs available
for adoption and easily adopt the dog of their choice.

The user can simply open the page on one of the most popular browsers (Chrome, Firefox or Edge), click 
the button below the dog they want to adopt and it's automatically added to the cart.  Once the user is
done with their selection, the user can complete a form with their details and submit it to have
their new pet ready to be picked up at their desired location.

Browser Compatibility:  Chrome, FireFox, Edge
Device Compatibility:  Windows 10 desktop, Android phone

Requirements:  A device with internet access


***TESTING SECTION***

Tested in below environments:
Browsers:  Chrome, Firefox, Edge (most commonly used browsers)
Operating System:  Windows 10
Devices supported:  Desktop, phone


What was tested:
-Page rendering
-Component layout meet requirements on mockup
-All links are functional and take user to appropriate page
-All images load and are not truncated
-Clicking on Adopt controls updates the cart total
-Refreshing the page, resets cart total to zero
-Clicking Checkout control takes user to the checkout form page
-Clicking Submit control on checkout form alerts user that the form has been submitted
-All events trigger
-All alerts display as appropriate
-All input fields on checkout form are editable
-Elements are responsive when re-sizing the browser
-Content is visible and images/text is not truncated when viewing in iPad, Pixel 2XL, Galaxy S5 using DevTools; Chrome browser only (the persona this website is targetting will mainly use Chrome on both desktop and phone)
-Font type/color/style on headings is consistent across pages
-All images have alt text for accessibility


Changes made:
-Converted adoptadog-logo.svg to adoptadog-logo.png to make it compatible with Firefox
-Removed <div> around the logo in footer section to inherit alignment from parent element
-Updated button below tiles on home page so that it's clickable and takes user to correct page (dogs.html) when clicked 
-Changed murphyInfo function to dogInfo so the name is more generic
