const apiKey = 'YOUR_UNSPLASH_API_KEY';
const imageContainer = document.getElementById('imageContainer');
let page = 1;
let loading = false;

// Fetch images from Unsplash
async function fetchImages() {
    loading = true;
    try {
        const response = await fetch(`https://api.unsplash.com/photos/?client_id=${apiKey}&page=${page}&per_page=10`);
        const data = await response.json();
        displayImages(data);
        page++;
    } catch (error) {
        console.error('Error fetching images:', error);
    }
    loading = false;
}

// Display images in the DOM
function displayImages(images) {
    images.forEach(image => {
        const imgElement = document.createElement('img');
        imgElement.src = image.urls.small;
        imgElement.alt = image.alt_description;
        imageContainer.appendChild(imgElement);
    });
}

// Infinite scroll event listener
window.addEventListener('scroll', () => {
    if (window.innerHeight + window.scrollY >= document.body.offsetHeight - 1000 && !loading) {
        fetchImages();
    }
});

// Initial load
fetchImages();