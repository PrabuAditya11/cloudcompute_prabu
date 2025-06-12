// main.js

document.addEventListener('DOMContentLoaded', function() {
    // Smooth scrolling for navigation links
    const links = document.querySelectorAll('a[href^="#"]');
    links.forEach(link => {
        link.addEventListener('click', function(e) {
            e.preventDefault();
            const targetId = this.getAttribute('href');
            const targetElement = document.querySelector(targetId);
            targetElement.scrollIntoView({ behavior: 'smooth' });
        });
    });

    // Example of an animation trigger
    const animatedElements = document.querySelectorAll('.animate');
    animatedElements.forEach(element => {
        element.classList.add('fade-in');
    });

    // Form submission handling (example)
    const contactForm = document.querySelector('#contact-form');
    if (contactForm) {
        contactForm.addEventListener('submit', function(e) {
            e.preventDefault();
            // Handle form submission logic here
            alert('Form submitted!');
        });
    }
});