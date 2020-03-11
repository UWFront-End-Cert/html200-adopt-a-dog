# Adopt-a-Dog Website

This website allows users to browse and select dogs available for adoption.
Photos and biographies for each dog are organized in cards, which provide
the option to reserve the chosen dog by adding its fee to a shopping cart.
User details and payment are collected on a checkout page. There is also a
blog featuring articles from various contributors about pet care, training
and other aspects of dog ownership. The purpose of this site is to allow
those interested in dog adoption to take their time learning about each animal
and make decisions on their own schedule, rather than having to spend hours
traveling to various shelters trying to find a good match.  



## USER PERSONA 1: Anna

![Image of Anna](user-persona-anna.jpg)  

**AGE:**  
27

**OCCUPATION:**  
Copywriter for a local nonprofit

**INTERESTS:**  
Hiking, Camping, Photography, Exploring the PNW

**REASON FOR VISITING:**  
Anna enjoys getting out and being active, and is interested
in adopting a dog to accompany her on her adventures. Finding a good fit is important to her, and the bios provided for each dog help her determine which ones will be most compatible. She also likes that there are images included in the profiles so that she can get a better impression of the candidates she is interested in.

**DEVICES USED:**  
iPhone 8 and MacBook. She browses on her phone during commutes and on breaks at work, and browses on a MacBook when at home.  

**BROWSERS USED:**  
Safari, Firefox and Chrome   



## USER PERSONA 2: James & Angela  

![Image of James and Angela](user-persona-janda.jpg)  

**AGES:**  
38 (James) and 36 (Angela)

**OCCUPATION:**  
Both are landscape architects at their own small firm

**INTERESTS:**  
Spending time with family at the beach, camping, playing board games;
hosting family gatherings  

**REASON FOR VISITING:**  
James and Angela are interested in finding a pet for their two young children. They have limited experience with pet ownership but really
want to give a good home to a dog that needs a family, and hope that it will be
a nice playmate for their kids. They like being able to learn about the dog’s
traits and personality so they can know what sort of behavior to expect. They
also appreciate that they can get advice about dog care and training from the Adopt-a-dog blog.  

**DEVICES USED:**  
PC Desktop, Galaxy phones and tablet. They do a little research at the office on desktop computers, and browse at home on the tablet or phone with the kids.  

**BROWSERS USED:**  
Chrome and Firefox  



## USER TESTING RESULTS:  

### Testing Device: iMac Retina 4k  

**GOOGLE CHROME:**  
Site in default window size appears as expected.
All elements display and behave properly.

Using Chrome developer tools, these issues were found:  
**Pixel 2 (411x731) and Pixel 2XL (411x823):**
  Submit button on checkout page cut off
  Blog page titles not wrapping images well
**iPhone 6/7/8 (375x667):**
  Blog page, titles not wrapping well
  Submit button on checkout page cut off
  Checkout form fields not visible

  FIX: Added paddingBottom to images in script file  for blog page  
  FIX: Increased width percentage for submit button on checkout form  
  FIX: Decreased overall width for blog page on smaller screen sizes

Final preview of following device settings was as expected:  
* Responsive
* Galaxy S5
* Pixel 2 (& XL)
* iPhone 5/SE
* iPhone 6/7/8 (& Plus)
* iPhone X
* iPad (& Pro)  

**FIREFOX:**  
Site in default window size appears as expected.

Using Web Developer Inspect tools, no issues found.

Design appears as expected on preview of the following devices:
* Galaxy S9/S9 + Android 7.0
* iPad
* iPad Mini
* iPhone 6/7/8 (& Plus) iOS 11
* iPhone X/XS iOS 12
* Kindle Fire HDX Linus
* Laptop with HiDPI Screen  

**SAFARI:**  
Site in default window size appears as expected.  


- - -
### Testing Device: iPad Air

**Browser used:** Safari
Design appeared as expected.  


- - -
### Testing Device: iPhone XS
**Browser used:** Safari

Design appeared as expected.  


- - -
### Testing Device: VAIO
**Browsers used:** Chrome and Edge

Design appeared as expected on both browsers.
