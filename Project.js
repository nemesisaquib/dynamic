const projectImages = document.querySelectorAll('.project-img');
const popupOverlay = document.getElementById('popup-overlay');
const popupImage = document.getElementById('popup-image');
const closeBtn = document.getElementById('close-btn');
const customCursor = document.getElementById('custom-cursor');

// Open popup on image click
projectImages.forEach(img => {
    img.addEventListener('click', function () {
        const src = this.src;
        popupImage.src = src;

        // GSAP Animation to scale image into view
        gsap.to(popupImage, {
            scale: 1,
            duration: 0.5,
            ease: "power2.out"
        });

        popupOverlay.style.display = 'flex';
    });
});

// Close popup when clicking outside the image or on the close button
closeBtn.addEventListener('click', closePopup);
popupOverlay.addEventListener('click', function (event) {
    if (event.target === popupOverlay) {
        closePopup();
    }
});

function closePopup() {
    // GSAP Animation to scale image out
    gsap.to(popupImage, {
        scale: 0,
        duration: 0.5,
        ease: "power2.in",
        onComplete: function () {
            popupOverlay.style.display = 'none';
        }
    });
}

// Filter functionality
const filterBtns = document.querySelectorAll('.project-grid-btn ul li');
const projectItems = document.querySelectorAll('.project-item');

filterBtns.forEach(btn => {
    btn.addEventListener('click', function () {
        // Remove active class from all buttons
        filterBtns.forEach(btn => btn.classList.remove('active'));

        // Add active class to the clicked button
        this.classList.add('active');

        const filter = this.getAttribute('data-filter');

        projectItems.forEach(item => {
            if (filter === '*' || item.classList.contains(filter.slice(1))) {
                item.style.display = 'block';
            } else {
                item.style.display = 'none';
            }
        });

        // Smooth scroll to the projects section
        gsap.to(window, { duration: 1, scrollTo: '.containert' });
    });
});

// Cursor movement
let mouseX = 0, mouseY = 0;
let targetX = 0, targetY = 0;

document.addEventListener('mousemove', (e) => {
    mouseX = e.clientX;
    mouseY = e.clientY;

    gsap.to(customCursor, {
        x: mouseX - 25, // Adjust to center cursor
        y: mouseY - 25, // Adjust to center cursor
        duration: 0.1
    });
});

// Change cursor style on hover over images
document.querySelectorAll('.project-item').forEach(item => {
    item.addEventListener('mouseenter', function () {
        customCursor.classList.add('eye');  // Show "eye" cursor
    });

    item.addEventListener('mouseleave', function () {
        customCursor.classList.remove('eye');  // Reset to default cursor
    });
});