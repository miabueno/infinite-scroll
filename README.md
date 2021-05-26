# infinite-scroll

Infinite Scroll mini project built through Udemy course found [here](https://www.udemy.com/course/javascript-web-projects-to-build-your-portfolio-resume/)

### What does it do?

This Infinite Scroll uses [Unsplash API](https://unsplash.com/documentation#creating-a-developer-account) to fetch images and displays images on this page and loads images every time a user scrolls to the bottom of the page.

### What does this project entail?

* On initial load: 
    * loading spinner appears to load first few images
    * it only fetches 5 images to improve network traffic speed
* Fixed title at top of page
* When scrolling to bottom of loaded images, another 30 images are fetched

**Note:** Unsplash API have allowed a limited number of API requests and so when the limit is reached, continuously loading images will no longer work (50 loads per hour)
