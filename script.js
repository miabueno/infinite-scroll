
// DOM elements
const imageContainer = document.getElementById('image-container');
const loader = document.getElementById('loader');

let readyToLoad = false;
let imagesLoaded = 0;
let totalImages = 0;
let photosArray = [];

const imageLoaded = () => {
    imagesLoaded++;
    if (imagesLoaded === totalImages) {
        readyToLoad = true;
        loader.hidden = true;
    }
}

// Helper Function to Set Attributes on DOM Elements
const setAttributes = (element, attributesObj) => {
    for (const key in attributesObj) {
        element.setAttribute(key, attributesObj[key]);
    }
};

// Create Elements for Links & Photos, Add to DOM
const displayPhotos = (photosArr) => {
    imagesLoaded = 0;
    totalImages = photosArr.length;

    photosArr.forEach((photo) => {
        const item = document.createElement('a');
        setAttributes(item, {
            href: photo.links.html,
            target: '_blank',
        });

        const image = document.createElement('img');
        setAttributes(image, {
            src: photo.urls.regular,
            alt: photo.alt_description,
            title: photo.alt_description,
        });

        image.addEventListener('load', imageLoaded);

        item.appendChild(image);
        imageContainer.appendChild(item);
    });
}

// Get photos from Unsplash API
const getPhotos = async(numImages) => {
    const apiKey = `O7VuEnuKgqS8MLz7mM4m6m9CMen19MOhEfoA-Vhr65w`;
    const apiUrl = `https://api.unsplash.com/photos/random/?client_id=${apiKey}&count=${numImages}`;

    try {
        const response = await fetch(apiUrl);
        photosArray = await response.json();
        displayPhotos(photosArray);
    } catch (error) {
        console.log(error);
        alert(error);
    }
};

/* Check to see if scrolling near bottom of page, Load More Photos

    > window.innerHeight = Total height of browser window
    > window.scrollY = Distance from top of page user has scrolled
    > document.body.offsetHeight = Height of everything in the body, 
      indcluding what is not within view
    > we will need to subtract (any px amount) from offsetHeight
      to trigger event (load more photos) before bottom is reached

*/
window.addEventListener('scroll', () => {
    if (window.innerHeight + window.scrollY >= document.body.offsetHeight - 1000 && readyToLoad) {
        readyToLoad = false;
        getPhotos(30);
    }
});

//On Load
getPhotos(5);