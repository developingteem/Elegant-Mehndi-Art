// Open the lightbox with the selected image
function openLightbox(img) {
  const lightbox = document.getElementById('lightbox');
  const lightboxImg = document.getElementById('lightbox-img');

  // Set the lightbox image source to the clicked image
  lightboxImg.src = img.src;
  lightbox.style.display = 'flex'; // Show the lightbox
}

// Close the lightbox
function closeLightbox() {
  const lightbox = document.getElementById('lightbox');
  lightbox.style.display = 'none'; // Hide the lightbox
}
