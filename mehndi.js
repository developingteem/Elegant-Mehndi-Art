// Smooth Scroll for 'Explore Our Services' Button
document.querySelector('.btn').addEventListener('click', function(e) {
    e.preventDefault();
    document.querySelector('#services').scrollIntoView({ behavior: 'smooth' });
});

// Lightbox functionality for Gallery Images
function openLightbox(img) {
    const lightbox = document.getElementById('lightbox');
    const lightboxImg = document.getElementById('lightbox-img');
    lightboxImg.src = img.src;
    lightbox.style.display = 'flex';
}

function closeLightbox() {
    document.getElementById('lightbox').style.display = 'none';
}

// Hover animation for gallery images and buttons
const galleryItems = document.querySelectorAll('.gallery-item img');
galleryItems.forEach(item => {
    item.addEventListener('mouseover', () => item.style.transform = 'scale(1.1)');
    item.addEventListener('mouseout', () => item.style.transform = 'scale(1)');
});

// Pop-up Testimonials on Hover
const testimonials = document.querySelectorAll('.testimonials blockquote');
testimonials.forEach(testimonial => {
    testimonial.addEventListener('mouseover', () => {
        testimonial.style.backgroundColor = '#e6c6b2';
        testimonial.style.color = '#fff';
    });
    testimonial.addEventListener('mouseout', () => {
        testimonial.style.backgroundColor = '#fdf5e6';
        testimonial.style.color = '#4b2e2e';
    });
});

// Contact Section Social Icons Animation
const socialIcons = document.querySelectorAll('.social-icons a');
socialIcons.forEach(icon => {
    icon.addEventListener('mouseover', () => {
        icon.style.color = '#d5694e';
        icon.style.transform = 'scale(1.3)';
    });
    icon.addEventListener('mouseout', () => {
        icon.style.color = '#a0522d';
        icon.style.transform = 'scale(1)';
    });
});