# Adopt a Dog

Adopt a dog is a site built to support people that want to adopt a dog.

## Installation

Use GitHub to download or clone the site files [GitHub](https://github.com/HMalloy/html200-adopt-a-dog.git).

```bash
git clone https://github.com/HMalloy/html200-adopt-a-dog.git
```
Site uses jQuery as well. For details on use and installation visit [jquery.com](https://jquery.com/)

Site uses Google fonts

## Contributing
Pull requests are welcome. For major changes, please open an issue first to discuss what you would like to change.

## License and copyright
[2020 Adopt a Dog](https://hmalloy.github.io/html200-adopt-a-dog/)

## Users
[See .pdf personas here](https://hmalloy.github.io/html200-adopt-a-dog/comps/personas.pdf)

## Testing
### Google Chrome, Firefox presentation layer
- General layout and styles appear and perform as expected
- Google fonts load
- Images all load at appropriate sizes
- Layout responds to resizing of window

### Google Chrome, Firefox functionality
- Check hover effect on dog cards
- Click on "adopt" button and ensure cart total in header is updated
  - Didn't work at first, I had to change variable for total from 'const' to 'let' in jquery.js line 1
- Check form functionality on checkout page
  - If submit is clicked w/o required fields complete
    - Alert to fill out required fields is displayed
    - Required fields are highlighted with red border
  - When fields are filled layout
    - Red border is removed
    - Form can be submitted
    - Upon submit alert appears that information was received
    - Form data is logged to the console

### Internet Explorer 11
- Checked visual presentation layer
  - Sticky footer was causing layout issues added '-ms-flex: 1 1 auto;' to main container in style.css line 34
  - Appears to have a problem with jQuery
    - Dog cards not showing up on either index.html or dogs.html
    - Blog cards not showing up on either index.html or blog.html
    - Form not functioning as expected (is not catching when required fields are not filled out)

## iPhone 8    
- Checked visual presentation layer to ensure it is readable on small screen and important information is prioritized
- Checked that all links are easily clicked and do what is expected
- Checked that clicking on "adopt" button updates total and gives an alert to that effect
- Checked that form functions as expected on checkout page, including required fields functionality
- Submit button for the form does not look correctly on the iPhone
  - added 'input[type="submit"]' to styles.css at line 249 - as those appear to be the styles that are missing
  - added '-webkit-appearance: none; -moz-appearance: none; appearance: none;' to styles.css at line 252
