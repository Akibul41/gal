// List of image filenames (replace these with your actual image names)
const imageFilenames = [
    'image1.jpg', 
    'image2.jpg', 
    'image3.jpg', 
    'image4.jpg', 
    'image5.jpg',
    'image6.jpg'
];

// Function to create gallery items dynamically
function loadGallery() {
    const gallery = document.getElementById('gallery');

    imageFilenames.forEach((filename, index) => {
        const galleryItem = document.createElement('div');
        galleryItem.classList.add('gallery-item');

        const img = document.createElement('img');
        img.src = `images/${filename}`; // Assuming images are stored in "images/" folder
        img.alt = `Image ${index + 1}`;

        const caption = document.createElement('p');
        caption.innerText = `Image ${index + 1}`;

        galleryItem.appendChild(img);
        galleryItem.appendChild(caption);
        gallery.appendChild(galleryItem);
    });
}

// Call the function to load gallery after the DOM is ready
window.onload = loadGallery;
