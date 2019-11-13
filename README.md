# Adoptadog Website

This is a website that sells dogs. It is consisted of 4 pages, Index, dogs, blog and checkout. To render its content on various media, the website utilizes responsive web design method by using css. Also, The website uses javascript to keep track of user input and dynamically generates dog information.

The following sections cover User Persona and Testing of the website.

## User Persona

To run the website, download all files in the root folder and render website by using web browser.

## Testing

To ensure site quality, the website was tested on 3 different browsers and 3 different devices. The browsers are Chrome, Firefox and Edge. All browser tests were conducted on windows PC. Apart from windows PC, other devices tested were iphone XR and Macbook. For each browser and device, the following items were tested.

100% Zoom
* Header image and button size and position
* Side Bar size and position
* Dog tiles size and position
* Dog tiles hover function
* Text do not overlap or create too much gap

Varying Zoom
* Header image and button resizes and
* Side Bar expands with scale and eventually disappears
* Dog tile column changes with scale and remain readable over all zoom range
* Text remain readable over all zoom range

### javascript

Eliminated errors and redundant variables. Implemented function to generate dog tiles on both Index and dogs pages. See example below.

```
for (let i = 0; i < Math.min(dogs.length, num); i++) {
  const temp = document.createElement('div');
  temp.setAttribute('class','dog-box hidden');
  document.querySelector('.dog-section').appendChild(temp);
}
```

Where variable "num" is the input parameter to the function that the user sets as the amount of dog tiles.

### Css & html

Validated code by using https://validator.w3.org/.


Eliminated errors and redundant variables. Eliminated errors and redundant variables. Eliminated most <div> tag for semantic markup


## Authors

**Zhengtang Yang** - *Structural Engineer* - [LinkedIn](https://www.linkedin.com/in/zt-yang-1b66b0185/)

## License

This project is licensed under the 737MAX MCAS License - see the [LICENSE.md](LICENSE.md) file for details
