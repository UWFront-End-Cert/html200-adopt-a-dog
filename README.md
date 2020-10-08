Adoptadog

Custom site for dog adoption agency in Seattle, WA.

Description

The Adoptadog site is written in HTML5, CSS, and javascript and integrates jQuery to
generate blog page info and shopping cart functionality. This site provides
information about the many dogs available in a straightforward manner and has a
seem-less checkout process.

See the Adoptadog site https://jem1520.github.io/html200-adopt-a-dog for list of dogs
available and information about caring for dogs.

 - Site runs seamlessly on all newer versions of major browsers and on mobile devices.
 - Designed with the end user in mind.
 - Site designed with easy to understand DOM structure.
 - New dog tiles simple to add whenever needed.
 - Accessibility features built in to make navigation by screenreader simpler.
 - Alt text for images and plain header background provided in the event that images don't load in the browser.
 - Site text and features are meant to adjust well and be readable on all screen sizes by media queries.   


Site testing Notes:

-- User Personas

User: Young Professional
Name: Kay Kelly
Age: 27
Occupation: Internet Marketing
Activities: Outdoors, hiking, yoga
Other Details:
- Owns a 2-year old iPhone and 3-year old MacBook. Savvy with technology and the internet.
- Looking to adopt a pet for the first time. Interested in adopting locally and looking at all local
adoption agencies for application process, cost, and dogs available for adoption.

Quote: "I'm adopting a dog for the first time and I want to be well informed about the adoption process before I adopt."


User: Retiree
Name: Donna Smith
Age: 67
Occupation: Recently retired teacher
Activities: Gardening, walking, baking
Other Details:
- Owns a new iPhone and a 6-year old PC laptop. Somewhat savvy with technology.
Typically uses laptop more for web searches and email, uses iPhone primarily for calls, FaceTime, Text etc.
- Looking to adopt a new dog for companionship. Mainly browsing to see what dogs are available in her area. Has adopted before, and is already familiar with the application process.

Quote: "I want to adopt a dog to keep me company in retirement, and I want to be able to see all of the dogs that are available in my area."

--
Site will mostly be accessed by users with iPhones or androids, looking for information about dogs that are currently available for adoption, and finding information about the adoption process, cost, etc. Site will also be accessed by users with Apple and PC laptops and desktops for similar purposes.


Testing Site Notes:

Tested site on Safari Desktop, Google Chrome, Firefox, and Edge by using browser Dev-Tools to view sites at various sizes and breakpoints.
Including viewing all pages on all browser Device Tools, looking at both portrait and landscape.

Also looked at site on ISO Safari with an iPhone 8.

Discovered the following items to be fixed:
- Navigation bar should stack on smaller devices.
- Adoptadog logo is very small at the bottom on mobile.
- Blog text overlaps with blog titles on smaller screens.
- Blog page title is off center on each screen size.
- Adopt button on dogs for adoption page is slightly right on smaller screens.
- Text size on blog, too small on most screens as well as labels, etc.
- State dropdown on checkout page is too small on smaller screens.

Fixed items in list by implementing the following:
- Additional padding on navigation bar to make it stack on smaller screens.
- Adjusted footer logo with media queries.
- Added padding to the bottom of blog title text.
   -- Discovered that meta/viewport was missing on blog page and checkout page. Added to pages so that media queries would also work on those pages.
- Updated blog page tile, by switching to % instead of px.
- Updates class tags on adopt bottom links and changes left padding to % instead of px.
- Blog text size fixed with adding meta/view above, and added media query to blog text to use more of the screen on smaller screens.
- Changed state dropdown on checkout page from % width to fixed width, so that it won't be too small on mobile.


Licensing

Adoptadog was created for Adoptadog Seattle, WA.
